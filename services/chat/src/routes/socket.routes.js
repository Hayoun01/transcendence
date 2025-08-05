import { prisma } from '../db/prisma.js'
import { redisPub, redisSub } from '../db/redis.js'
import { randomUUID } from 'crypto'
import { postInternal } from '../utils/internalClient.js'

/**
 * @type {Map<string, Set<import('@fastify/websocket').WebSocket>>}
 */
const connections = new Map()

/**
 * @type {Map<string, Set<import('@fastify/websocket').WebSocket>>}
 */
const conversations = new Map()

const broadcastToConversation = (connId, conversationId, data) => {
    for (const conn of conversations.get(conversationId)) {
        if (conn.connId === connId) continue
        conn.send(JSON.stringify(data))
    }
}

redisSub.subscribe('presence')
redisSub.on('message', (channel, message) => {
    console.log('[REDIS]', channel, message)
    const data = JSON.parse(message)
    switch (channel) {
        case 'presence':
            notifyFriendsOfPresence(data.userId, data.status)
        default:
            if (channel.startsWith('conversation:')) {
                const conversationId = channel.split(':')[1]
                if (!conversations.has(conversationId))
                    return
                const { userId, payload, connId } = data
                broadcastToConversation(connId, conversationId, {
                    type: 'message:new',
                    payload: {
                        senderId: userId,
                        payload
                    }
                })
            }
    }
})

const notifyFriendsOfPresence = async (userId, status) => {
    const res = await postInternal(`http://localhost:3002/internal/friends/${userId}`)
    if (!res.ok) return
    const friends = await res.json()
    for (const friend of friends) {
        if (!connections.has(friend)) continue
        for (const conn of connections.get(friend)) {
            conn.send(JSON.stringify({
                type: 'presence',
                payload: {
                    userId,
                    status
                }
            }));
        }
    }
}

const notifyUserOfPresence = async (conn) => {
    const res = await postInternal(`http://localhost:3002/internal/friends/${conn.userId}`)
    if (!res.ok) return
    const friends = await res.json()
    const onlineFriends = friends.filter(id => connections.has(id) && connections.get(id).size > 0)
    conn.send(JSON.stringify({
        type: 'friends:online',
        payload: {
            onlineFriends
        }
    }))
}

const sendMessage = async (conn, conversationId, payload) => {
    const conversation = await prisma.conversation.findUnique({
        where: {
            id: conversationId,
            members: {
                some: { userId: conn.userId }
            },
        },
        include: {
            members: {
                where: {
                    NOT: {
                        userId: conn.userId
                    }
                }
            }
        }
    })
    if (!conversation)
        return conn.send(JSON.stringify({ error: 'Unauthorized' }))
    const targetUserId = conversation.members[0].userId
    const res = await postInternal(`http://localhost:3002/internal/chat/permissions/${conn.userId}/${targetUserId}`)
    if (!res.ok)
        return conn.send(JSON.stringify({ error: 'Unauthorized' }))
    await prisma.message.create({
        data: {
            conversationId,
            content: payload.content,
            senderId: conn.userId,
        }
    })
    redisPub.publish(`conversation:${conversation.id}`, JSON.stringify({
        userId: conn.userId,
        payload,
        connId: conn.connId
    }))
}

const conversationSub = (conn, conversationId) => {
    redisSub.subscribe(`conversation:${conversationId}`)
    if (!conversations.has(conversationId))
        conversations.set(conversationId, new Set())
    conversations.get(conversationId).add(conn)
    conn.send(JSON.stringify({
        success: true
    }))
}

const conversationUnSub = (conn, conversationId) => {
    if (!conversations.has(conversationId))
        return
    conversations.get(conversationId).delete(conn)
    if (conversations.get(conversationId).size === 0) {
        conversations.delete(conversationId)
        redisSub.unsubscribe(`conversation:${conversationId}`)
    }
}

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default async (fastify) => {
    fastify.get('/live', { websocket: true }, async (conn, req) => {
        const { userId } = req.query
        if (!userId) {
            conn.close()
            return
        }
        conn.userId = userId
        conn.connId = randomUUID()

        if (!connections.has(userId))
            connections.set(userId, new Set())

        connections.get(userId).add(conn)
        notifyUserOfPresence(conn)
        const count = await redisPub.incr(`user:online:${userId}`)
        await redisPub.expire(`user:online:${userId}`, 60)
        console.log(count)
        if (count === 1)
            redisPub.publish('presence', JSON.stringify({ userId, status: 'online' }))
        const heartbeat = setInterval(() => {
            redisPub.expire(`user:online:${userId}`, 60)
        }, 30000)

        conn.on('message', message => {
            let data
            try {
                data = JSON.parse(message.toString());
            } catch {
                conn.send(JSON.stringify({ error: 'Invalid JSON' }))
                return
            }
            console.log(data)
            // ! check data schema
            switch (data.type) {
                case 'message:send':
                    sendMessage(conn, data.conversationId, data.payload)
                    break
                case 'message:new':
                case 'message:delete':
                case 'message:typing':
                case 'ping':
                    conn.send(JSON.stringify({ type: 'pong' }))
                    break
                case 'subscribe:conversation':
                    conversationSub(conn, data.conversationId)
                    break
                case 'unsubscribe:conversation':
                    conversationUnSub(conn, data.conversationId)
                    break
                default:
                    conn.send(JSON.stringify({ error: 'Unknown message type' }))
            }
        });
        conn.on('close', async () => {
            const userCon = connections.get(userId)
            if (userCon) {
                userCon.delete(conn)
                if (userCon.size === 0) {
                    connections.delete(userId)
                }
                const counter = await redisPub.decr(`user:online:${userId}`)
                if (counter === 0) {
                    redisPub.publish('presence', JSON.stringify({ userId, status: 'offline' }))
                }
            }
            clearInterval(heartbeat)
            console.log('Client disconnected')
        });
    })
}
