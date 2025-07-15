import speakeasy from 'speakeasy';
import QRCode from 'qrcode';
import { _2FAService } from '../services/twoFactor.services.js';
import { prisma } from '../db/prisma.js';
import { setup2FASchema } from '../schemas/twoFactor.schemas.js';
import { sendError } from '../utils/fastify.js';

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify, opts, done) => {
    fastify.post('/setup', { preHandler: [fastify.authenticate] }, async (request, reply) => {
        const result = setup2FASchema.safeParse(request.body)
        if (!result.success) {
            const errors = result.error.errors.map((err) => ({
                path: err.path?.join('.') || err.keys?.join('.'),
                message: err.message
            }))
            return sendError(reply, 400, 'Bad request', { errors: errors })
        }
        const { method } = request.body
        if (await _2FAService.userHas2FA(request.user.id, method))
            return sendError(reply, 400, `You've already setup ${method}`)
        const twoFa = await _2FAService.setup2FA({ email: "Hayyoun@gmail.com" })
        await _2FAService.store2FA(request.user.id, twoFa)
        return twoFa
    })
    fastify.post('/verify', { preHandler: [fastify.authenticate] }, async (request, reply) => {
        const { code, method } = request.body
        const user2FA = await _2FAService.fetchUser2FA(request.user.id, method);
        if (!user2FA)
            return sendError(reply, 400, `You must setup ${method} first`)
        else if (user2FA.isVerified) {
            return sendError(reply, 400, `You've already verified ${method}`)
        }
        const secret = _2FAService.decrypt2FASecret(user2FA.secret, user2FA.iv, user2FA.tag)
        if (await _2FAService.verify2FAToken(secret, code)) {
            const backupCodes = _2FAService.generateBackupCodes()
            await prisma.twoFactorAuth.update({
                where: {
                    id: user2FA.id
                },
                data: {
                    isEnabled: true,
                    isVerified: true,
                    backupCodes: backupCodes.reduce((map, code) => { map[code] = { used: false }; return map }, {})
                }
            })
            reply.code(200).send({
                backupCodes
            })
            return
        }

        return sendError(reply, 400, `Invalid ${method} code!`)
    })
    fastify.post('/challenge', async (request, reply) => {
        const { code, sessionToken, method } = request.body
        let payload;
        try {
            payload = fastify.jwt.verify(sessionToken);
        } catch (err) {
            return sendError(reply, 401, 'Invalid or expired session token')
        }
        if (payload.stat !== 'awaiting_2fa')
            return sendError(reply, 401, 'Session not awaiting 2FA')

        const user2FA = await _2FAService.fetchUser2FA(payload.userId, method);
        if (!user2FA)
            return sendError(reply, 400, `You must setup ${method} first`)

        const secret = _2FAService.decrypt2FASecret(user2FA.secret, user2FA.iv, user2FA.tag)
        if (await _2FAService.verify2FAToken(secret, code)) {
            const accessToken = fastify.jwt.sign({ userId: payload.userId }, { expiresIn: '1h' })
            const refreshToken = fastify.jwt.sign({ userId: payload.userId }, { expiresIn: '7d' })
            await prisma.session.create({
                data: {
                    userId: payload.userId,
                    token: accessToken,
                    refreshToken,
                    ipAddress: request.ip,
                    userAgent: request.headers['user-agent'],
                    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                }
            })
            return { accessToken, refreshToken }
        }
        return sendError(reply, 401, 'Invalid 2FA code!')
    })
    done()
}
