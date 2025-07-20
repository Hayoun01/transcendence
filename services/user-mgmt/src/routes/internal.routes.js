import { prisma } from '../db/prisma.js'
import { sendError, sendSuccess } from '../utils/fastify.js'

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify, opts, done) => {
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
            return sendError(reply, 400, 'User already has a profile!')
        const user = await prisma.userProfile.create({
            data: {
                id: userId,
                username,
            }
        })
        return sendSuccess(reply, 201, 'User profile created!')
    })
    fastify.post('/username-available', async (request, reply) => {
        const { username } = request.body
        const user = await prisma.userProfile.findUnique({
            where: {
                username
            }
        })
        if (user)
            return sendError(reply, 409, 'Username already taken!')
        return sendSuccess(reply, 200, 'Username available!')
    })
    done()
}
