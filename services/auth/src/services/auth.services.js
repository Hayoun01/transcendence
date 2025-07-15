import { prisma } from "../db/prisma.js"


const isUserExists = async (email) => {
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })
    return user
}

const newUserSession = async (fastify, request, userId) => {
    const accessToken = fastify.jwt.sign({ userId }, { expiresIn: '1h' })
    const refreshToken = fastify.jwt.sign({ userId }, { expiresIn: '7d' })
    await prisma.session.create({
        data: {
            userId,
            token: accessToken,
            refreshToken,
            ipAddress: request.ip,
            userAgent: request.headers['user-agent'],
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        }
    })
    return { accessToken, refreshToken }
}

export const authService = {
    newUserSession,
    isUserExists,
}