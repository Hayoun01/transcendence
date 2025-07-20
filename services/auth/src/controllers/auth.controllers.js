import { loginUserSchema, refreshTokenSchema, registerUserSchema } from '../schemas/auth.schemas.js';
import { z } from 'zod';
import { v4 as uuid } from 'uuid';
import { hashCompare, hashPassword } from '../utils/bcrypt.js';
import { prisma } from '../db/prisma.js';
import { authService } from '../services/auth.services.js';
import { sendError } from '../utils/fastify.js';
import { postInternal } from '../utils/internalClient.js';

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
    let { email, password, username } = request.body;
    if (await authService.isUserExists(email))
        return sendError(reply, 400, 'User already exists!')
    const checkRes = await postInternal('http://localhost:3002/api/v1/internal/username-available', {
        username
    })
    if (!checkRes.ok)
        return sendError(reply, 400, 'Username already taken!')
    const createdUser = await prisma.$transaction(async (tx) => {
        const createUser = await tx.user.create({
            data: {
                email,
                passwordHashed: hashPassword(password)
            }
        })
        const res = await postInternal('http://localhost:3002/api/v1/internal/profiles', {
            userId: createUser.id,
            username
        })
        if (!res.ok)
            throw new Error('Internal server error')
        return createUser
    })
    reply.code(201).send(createdUser)
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
        const { accessToken, refreshToken } = await authService.newUserSession(fastify, request, user.id)
        reply.code(200).send({ accessToken, refreshToken })
    }
}

/**
 * 
 * @type {import('fastify').RouteHandlerMethod}
 */
const refreshToken = async (request, reply) => {
    const result = refreshTokenSchema.safeParse(request.body)
    if (!result.success) {
        const errors = result.error.errors.flatMap((err) => ({
            path: err.path?.join('.') || err.keys?.join('.'),
            message: err.message
        }))
        return sendError(reply, 400, 'Bad request', { errors: errors })
    }
    const { refreshToken } = request.body
    const session = await prisma.session.findUnique({
        where: {
            refreshToken
        }
    })
    if (!session)
        return sendError(reply, 401, 'Invalid refresh token')
    const now = new Date()
    if (session.deletedAt || session.expiresAt < now)
        return sendError(reply, 401, 'Refresh token expired')
    const userAgent = request.headers['user-agent']
    if (userAgent !== session.userAgent)
        return sendError(reply, 401, 'Invalid session')
    await prisma.session.update({
        where: {
            id: session.id
        },
        data: {
            deletedAt: new Date()
        }
    })
    const userSession = await authService.newUserSession(fastify, request, session.userId)
    return { accessToken: userSession.accessToken, refreshToken: userSession.refreshToken }
}

/**
 * 
 * @type {import('fastify').RouteHandlerMethod}
 */
const getAllUserSessions = async (request, reply) => {
    const userId = request.headers['x-user-id']
    return prisma.session.findMany({
        where: {
            userId,
            deletedAt: null
        },
        select: {
            id: true,
            ipAddress: true,
            userAgent: true,
            createdAt: true
        }
    })
}

/**
 * 
 * @type {import('fastify').RouteHandlerMethod}
 */
const deleteSessionById = async (request, reply) => {
    const userId = request.headers['x-user-id']
    const { session_id } = request.params
    const session = await prisma.session.findUnique({
        where: {
            id: session_id,
            userId,
            deletedAt: null,
        }
    })
    if (!session)
        return sendError(reply, 404, 'Session not found!')
    await prisma.session.update({
        where: {
            id: session.id
        },
        data: {
            deletedAt: new Date()
        }
    })
    return sendSuccess(reply, 200, 'Session deleted successfuly!')
}

/**
 * 
 * @type {import('fastify').RouteHandlerMethod}
 */
const verifyToken = async (request, reply) => {
    try {
        const payload = await request.jwtVerify()
        const user = await prisma.user.findUnique({
            where: {
                id: payload.userId,
                status: 'ACTIVE',
                deletedAt: null
            },
            include: {
                Session: {
                    where: {
                        token: request.headers.authorization?.substring(7),
                        deletedAt: null
                    }
                }
            }
        })
        if (!user || !user.Session.length)
            return reply.code(401).send({ error: 'Unauthorized' })
        reply.code(200).send({ userId: user.id })
    } catch (e) {
        reply.code(401).send({ error: 'Unauthorized' })
    }
}

export const authControllers = {
    registerUser,
    loginUser,
    refreshToken,
    getAllUserSessions,
    deleteSessionById,
    verifyToken,
}
