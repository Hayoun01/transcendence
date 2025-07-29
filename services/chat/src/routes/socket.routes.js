import { prisma } from '../db/prisma.js'
import { redis } from '../db/redis.js'

/**
 * @type {Map<string, Set<import('@fastify/websocket').WebSocket>>}
 */
const connections = new Map()


const sendMessage = async (userId, conversationId, payload) => {
    const conversation = await prisma.conversation.findUnique({
        where: {
            id: conversationId,
            members: {
                some: { userId }
            },
        },
    })
    if (!conversation)
        return
    await prisma.message.create({
        data: {
            conversationId,
            content: payload.content,
            senderId: userId,
        }
    })
}

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default async (fastify) => {
    fastify.get('/live', { websocket: true }, async (con, req) => {
        const { userId } = req.query
        if (!userId) {
            con.close()
            return
        }

        if (!connections.has(userId))
            connections.set(userId, new Set())

        connections.get(userId).add(con)

        con.on('message', message => {
            let data
            try {
                data = JSON.parse(message.toString());
            } catch {
                con.send(JSON.stringify({ error: 'Invalid JSON' }))
                return
            }
            console.log(data)
            // ! check data schema
            switch (data.type) {
                case 'message:send':
                    sendMessage(userId, data.conversationId, data.payload)
                    break
                case 'message:new':
                case 'message:delete':
                case 'message:typing':
                case 'ping':
                    con.send(JSON.stringify({ type: 'pong' }))
                    break
                default:
                    con.send(JSON.stringify({ error: 'Unknown message type' }))
            }
        });
        con.on('close', async () => {
            const userCon = connections.get(userId)
            if (userCon) {
                userCon.delete(con)
                if (userCon.size === 0)
                    connections.delete(userId)
            }
            console.log('Client disconnected');
        });
    })
}
