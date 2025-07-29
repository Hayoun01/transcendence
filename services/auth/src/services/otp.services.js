/**
 * 
 * @typedef {import('../generated/prisma/client.js').$Enums.VerificationTokenType} OtpType
 * @typedef {import('../generated/prisma/client.js').PrismaClient} PrismaClient
 */

import { prisma } from '../db/prisma.js'


const generateOTP = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
}

/**
 * 
 * @param {PrismaClient} prisma 
 * @param {OtpType} type
 */
const createOTP = async (prisma, userId, type, expiresIn = 4) => {
    const expiresAt = new Date()
    expiresAt.setMinutes(expiresAt.getMinutes() + expiresIn)
    await prisma.verificationToken.updateMany({
        where: { userId, type, deletedAt: null },
        data: { deletedAt: new Date() }
    })
    return prisma.verificationToken.create({
        data: {
            token: generateOTP(),
            userId,
            expiresAt,
            type,
        }
    })
}

/**
 * 
 * @param {OtpType} type
 */
const verifyOTP = async (userId, type, otp) => {
    const record = await prisma.verificationToken.findFirst({
        where: {
            userId,
            type,
            attempts: { lt: 3 },
            deletedAt: null,
        }
    })
    if (!record || record.expiresAt < new Date())
        return { valid: false, reason: 'Invalid or expired OTP' }
    if (record.token !== otp) {
        await prisma.verificationToken.update({
            where: {
                id: record.id
            },
            data: {
                attempts: { increment: 1 }
            }
        })
        return { valid: false, reason: 'Incorrect OTP' }
    }
    await prisma.verificationToken.update({
        where: {
            id: record.id,
        },
        data: {
            deletedAt: new Date()
        }
    })
    return { valid: true }
}

export default {
    createOTP,
    verifyOTP,
}