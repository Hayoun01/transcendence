import { authControllers } from '../controllers/auth.controllers.js';
import { prisma } from '../db/prisma.js';
import { authService } from '../services/auth.services.js';
import { sendError, sendSuccess } from '../utils/fastify.js';

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

    fastify.post('/refresh', authControllers.refreshToken)

    fastify.get('/sessions', authControllers.getAllUserSessions)

    fastify.delete('/sessions/:session_id', authControllers.deleteSessionById)

    fastify.get('/verify', authControllers.verifyToken)

    done()
}
