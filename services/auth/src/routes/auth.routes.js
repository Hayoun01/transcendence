import { authControllers } from '../controllers/auth.controllers.js';
import { prisma } from '../db/prisma.js';

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify, opts, done) => {
    fastify.post('/register', authControllers.registerUser);
    fastify.post('/login', {
        // preHandler: [fastify.rateLimit({
        //     keyGenerator: (req) => {
        //         return `login:${req.ip}:${req.headers['user-agent']}`
        //     },
        // })],
    }, authControllers.loginUser(fastify));

    fastify.get('/sessions', async (request, reply) => {
        const sessions = await prisma.session.findMany()
        reply.send(sessions)
    })

    fastify.delete('/sessions', async (request, reply) => {
        await prisma.session.deleteMany()
        reply.code(200)
    })

    fastify.get('/verify', { preValidation: [fastify.authenticate] }, (request, reply) => {
        reply.code(200).send()
    })
    done()
}
