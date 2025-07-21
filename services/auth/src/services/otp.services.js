/**
 * 
 * @typedef {import('../generated/prisma/client.js').$Enums.VerificationTokenType} OtpType
 * @typedef {import('../generated/prisma/client.js').PrismaClient} PrismaClient
 */


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
    return prisma.verificationToken.create({
        data: {
            token: generateOTP(),
            userId,
            expiresAt,
            type,
        }
    })
}

export default {
    createOTP,
}