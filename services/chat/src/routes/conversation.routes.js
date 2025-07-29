import { prisma } from '../db/prisma.js'

/**
 * @type {import('fastify').FastifyPluginAsync}
 */
export default async (fastify, opts) => {
    fastify.get('/conversations', async (request, reply) => {
        const userId = request.headers['x-user-id']
        return prisma.conversation.findMany({
            where: {
                members: {
                    some: { userId }
                },
                deletedAt: null
            },
            include: {
                members: {
                    select: {
                        userId: true
                    }
                }
            }
        })
    })

    fastify.get('/conversations/:id', async (request, reply) => {
        const userId = request.headers['x-user-id']
        const { id } = request.params
        return prisma.conversation.findUnique({
            where: {
                id,
                members: {
                    some: { userId }
                },
                deletedAt: null
            },
            include: {
                members: {
                    select: {
                        userId: true
                    }
                },
                messages: {
                    orderBy: { createdAt: 'desc' },
                    where: { deletedAt: null },
                    select: {
                        id: true,
                        content: true,
                        senderId: true,
                        createdAt: true,
                    }
                }
            }
        })
    })

    fastify.post('/conversations/:id', async (request, reply) => {
        const userId = request.headers['x-user-id']
        const { id } = request.params
        const { content } = request.body
        const conversation = await prisma.conversation.findUnique({
            where: {
                id,
                members: {
                    some: { userId }
                },
                deletedAt: null
            }
        })
        if (!conversation)
            return reply.status(404).send()
        return prisma.message.create({
            data: {
                content,
                senderId: userId,
                conversationId: conversation.id,
            }
        })
    })

    fastify.delete('/message/:id', async (request, reply) => {
        const userId = request.headers['x-user-id']
        const { id } = request.params
        const message = await prisma.message.findUnique({
            where: {
                id,
                senderId: userId,
                deletedAt: null,
            }
        })
        if (!message)
            return reply.status(404).send({ error: 'Not found' })
        await prisma.message.update({
            where: { id: message.id },
            data: { deletedAt: new Date() }
        })
        return
    })

    fastify.post('/conversations', async (request, reply) => {
        const userId = request.headers['x-user-id']
        const { targetUserId, content } = request.body
        if (userId === targetUserId)
            return reply.status(400).send({ error: 'error' })
        const chat = await prisma.conversation.findFirst({
            where: {
                AND: [
                    { members: { every: { userId: { in: [userId, targetUserId] } } } },
                    { members: { some: { userId } } },
                    { members: { some: { userId: targetUserId } } }
                ]
            },
            include: {
                members: {
                    select: {
                        userId: true
                    }
                }
            }
        })
        if (!chat) {
            return await prisma.conversation.create({
                data: {
                    members: {
                        createMany: {
                            data: [
                                {
                                    userId
                                },
                                {
                                    userId: targetUserId
                                }
                            ]
                        }
                    },
                    messages: {
                        create: {
                            content,
                            senderId: userId,
                        }
                    }
                },
                include: {
                    members: true
                }
            })
        }
        return prisma.message.create({
            data: {
                content,
                senderId: userId,
                conversationId: chat.id,
            }
        })
    })
}
