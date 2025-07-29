import { prisma } from '../db/prisma.js'
import { sendError, sendSuccess } from '../utils/fastify.js'

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default async (fastify) => {
    fastify.get('/blocks', async (request, reply) => {
        const userId = request.headers['x-user-id']
        return await prisma.blockedUser.findMany({
            where: {
                blockerId: userId
            },
            select: {
                id: true,
                blocked: {
                    select: {
                        id: true,
                        username: true,
                    }
                },
                createdAt: true
            }
        })
    })
    fastify.post('/blocks', async (request, reply) => {
        const userId = request.headers['x-user-id']
        const { targetUserId } = request.body
        if (userId === targetUserId)
            return sendError(reply, 400, 'USER_CANNOT_BLOCK_SELF')
        // ! replace it
        if (!await prisma.userProfile.findUnique({ where: { id: targetUserId } })) {
            return sendError(reply, 404, 'USER_NOT_FOUND')
        }
        if (await prisma.blockedUser.findUnique({
            where: {
                blockerId_blockedId: {
                    blockerId: userId,
                    blockedId: targetUserId,
                }
            }
        })) {
            return sendError(reply, 400, 'USER_ALREADY_BLOCKED')
        }
        await prisma.blockedUser.create({
            data: {
                blockerId: userId,
                blockedId: targetUserId,
            }
        })
        return sendSuccess(reply, 200, 'USER_BLOCKED_SUCCESS')
    })
    fastify.delete('/blocks', async (request, reply) => {
        const userId = request.headers['x-user-id']
        const { blockedId } = request.body

        if (!await prisma.blockedUser.findUnique({
            where: {
                id: blockedId,
                blockerId: userId
            }
        })) {
            return sendError(reply, 404, 'NOT_FOUND')
        }
        await prisma.blockedUser.delete({
            where: { id: blockedId }
        })
        return sendSuccess(reply, 200, 'USER_UNBLOCKED_SUCCESS')
    })
}
