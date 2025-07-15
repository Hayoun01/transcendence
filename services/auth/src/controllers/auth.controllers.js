import { loginUserSchema, registerUserSchema } from '../schemas/auth.schemas.js';
import { z } from 'zod';
import { v4 as uuid } from 'uuid';
import { hashCompare, hashPassword } from '../utils/bcrypt.js';
import { prisma } from '../db/prisma.js';
import { authService } from '../services/auth.services.js';
import { sendError } from '../utils/fastify.js';

/**
 * 
 * @type {import('fastify').RouteHandlerMethod}
 */
const registerUser = async (request, reply) => {
    const result = registerUserSchema.safeParse(request.body)
    if (!result.success) {
        const errors = result.error.errors.flatMap((err) => ({
            path: err.path?.join('.') || err.keys?.join('.'),
            message: err.message
        }))
        return sendError(reply, 400, 'Bad request', { errors: errors })
    }
    let { email, password } = request.body;
    if (authService.isUserExists(email))
        return sendError(reply, 400, 'User already exists!')
    const createUser = await prisma.user.create({
        data: {
            email,
            passwordHashed: hashPassword(password)
        }
    })
    reply.code(201).send(createUser)
}

/**
 * 
 * @return {import('fastify').RouteHandlerMethod}
 */
const loginUser = (fastify) => {
    return async (request, reply) => {
        const result = loginUserSchema.safeParse(request.body)
        if (!result.success) {
            const errors = result.error.errors.flatMap((err) => ({
                path: err.path?.join('.') || err.keys?.join('.'),
                message: err.message
            }))
            return sendError(reply, 400, 'Bad request', { errors: errors })
        }
        let { email, password } = request.body;
        const user = await prisma.user.findFirst({
            where: {
                email
            },
            include: {
                TwoFactorAuth: {
                    where: {
                        isEnabled: true
                    }
                }
            }
        })
        if (!user)
            return sendError(reply, 401, 'Email or Password incorrect!')
        if (!hashCompare(password, user.passwordHashed))
            return sendError(reply, 401, 'Email or Password incorrect!')
        if (user.TwoFactorAuth.length > 0) {
            const sessionToken = fastify.jwt.sign({ userId: user.id, stat: "awaiting_2fa" }, { expiresIn: '4m' })
            return sendError(reply, 401, 'Please enter your 2FA code.', { status: '2fa_required', sessionToken, })
        }
        const { accessToken, refreshToken } = await authService.newUserSession(fastify, request, user)
        reply.code(200).send({ accessToken, refreshToken })
    }
}

export const authControllers = {
    registerUser,
    loginUser,
}
