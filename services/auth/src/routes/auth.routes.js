import z from 'zod';
import { authControllers } from '../controllers/auth.controllers.js';
import { prisma } from '../db/prisma.js';
import { authService } from '../services/auth.services.js';
import otpServices from '../services/otp.services.js';
import { sendError, sendSuccess } from '../utils/fastify.js';

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify, opts, done) => {
    fastify.post('/register', authControllers.registerUser(fastify));
    fastify.post('/login', {
        // preHandler: [fastify.rateLimit({
        //     keyGenerator: (req) => {
        //         return `auth:login:${req.ip}:${req.headers['user-agent']}`
        //     },
        // })],
    }, authControllers.loginUser(fastify));

    fastify.post('/refresh', authControllers.refreshToken)

    fastify.get('/sessions', authControllers.getAllUserSessions)

    fastify.delete('/sessions/:session_id', authControllers.deleteSessionById)

    fastify.get('/verify', authControllers.verifyToken)

    const otpVerifySchema = z.object({
        otp: z.string().min(1, 'OTP is required'),
        sessionToken: z.string().min(1, 'sessionToken is required'),
    })
    // ? maybe i'll consider validation using tokens instead of OTPs
    fastify.post('/otp/verify', async (request, reply) => {
        const result = otpVerifySchema.safeParse(request.body)
        if (!result.success) {
            const errors = result.error.errors.flatMap((err) => ({
                path: err.path?.join('.') || err.keys?.join('.'),
                message: err.message
            }))
            return sendError(reply, 400, 'Bad request', { errors: errors })
        }
        const { sessionToken, otp } = request.body
        let payload
        try {
            payload = fastify.jwt.verify(sessionToken);
        } catch (err) {
            fastify.log.warn({ sessionToken }, `A suspicious attempt to validate otp using invalid sessionToken`)
            return sendError(reply, 401, 'Invalid or expired session token')
        }
        const { userId, type } = payload
        const { valid, reason } = await otpServices.verifyOTP(userId, type, otp)
        if (!valid)
            return sendError(reply, 400, reason)
        if (type === 'email_verification') {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    isVerified: true
                }
            })
        }
        return sendSuccess(reply, 200, 'OTP verified successfully')
    })
    fastify.get('/otp/verify', async (request, reply) => {
        const result = otpVerifySchema.safeParse(request.query)
        if (!result.success) {
            const errors = result.error.errors.flatMap((err) => ({
                path: err.path?.join('.') || err.keys?.join('.'),
                message: err.message
            }))
            return sendError(reply, 400, 'Bad request', { errors: errors })
        }
        const { sessionToken, otp } = request.query
        let payload
        try {
            payload = fastify.jwt.verify(sessionToken);
        } catch (err) {
            fastify.log.warn({ reqId: request.id, sessionToken }, `A suspicious attempt to validate otp using invalid sessionToken`)
            return sendError(reply, 401, 'Invalid or expired session token')
        }
        const { userId, type } = payload
        const { valid, reason } = await otpServices.verifyOTP(userId, type, otp)
        if (!valid)
            return sendError(reply, 400, reason)
        if (type === 'email_verification') {
            await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    isVerified: true
                }
            })
        }
        return sendSuccess(reply, 200, 'OTP verified successfully')
    })

    done()
}
