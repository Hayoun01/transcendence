import { prisma } from '../db/prisma.js'
import { sendError, sendSuccess } from '../utils/fastify.js'

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default async (fastify) => {
    fastify.get('/health', (request, reply) => {
        return { message: 'healthy' }
    })
    fastify.post('/profiles', async (request, reply) => {
        console.log(request.body)
        const { userId, username } = request.body
        const userExists = await prisma.userProfile.findUnique({
            where: {
                id: userId,
            }
        })
        if (userExists)
            return sendSuccess(reply, 201, 'USER_PROFILE_CREATED_SUCCESS')
        const user = await prisma.userProfile.create({
            data: {
                id: userId,
                username,
            }
        })
        return sendSuccess(reply, 201, 'USER_PROFILE_CREATED_SUCCESS')
    })
    fastify.post('/username-available', async (request, reply) => {
        const { username } = request.body
        const user = await prisma.userProfile.findUnique({
            where: {
                username
            }
        })
        if (user)
            return sendError(reply, 409, 'USERNAME_TAKEN')
        return sendSuccess(reply, 200, 'USERNAME_AVAILABLE')
    })
    fastify.post('/chat/permissions/:userId/:targetUserId', async (request, reply) => {
        const { userId, targetUserId } = request.params
        const friendship = await prisma.friendship.findUnique({
            where: {
                status: 'accepted',
                OR: [
                    {
                        requesterId: userId,
                    },
                    {
                        receiverId: userId,
                    }
                ],
                NOT: [
                    {
                        requester: { BlockedUsers: { some: { blockedId: userId } } }
                    },
                    {
                        receiver: { BlockedUsers: { some: { blockedId: userId } } }
                    },
                    {
                        requester: { BlockedByUsers: { some: { blockerId: userId } } }
                    },
                    {
                        receiver: { BlockedByUsers: { some: { blockerId: userId } } }
                    },
                ]
            }
        })
        if (!friendship)
            return sendError(reply, 401, '')
        return sendSuccess(reply, 200, '')
    })
}
