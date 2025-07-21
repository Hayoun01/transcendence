import { Worker } from 'bullmq'
import { QueueType } from '../services/queue.services.js'
import { redis } from '../db/redis.js'
import otpServices from '../services/otp.services.js'
import { prisma } from '../db/prisma.js'
import mailer from '../utils/mailer.js'
import { postInternal } from '../utils/internalClient.js'

const worker = new Worker(QueueType.REGISTRATION, async (job) => {
    console.log('Job started!')
    const { userId, username, email } = job.data
    const otp = await otpServices.createOTP(prisma, userId, 'EMAIL_VERIFICATION')
    await mailer.sendEmail('verifyEmail', email, { code: otp.token })
    const res = await postInternal('http://localhost:3002/api/v1/internal/profiles', {
        userId,
        username,
    })
    if (!res.ok)
        throw new Error('Internal server error')
    console.log('Job done')
},
    {
        connection: redis,
        concurrency: 5,
    })

process.on('SIGINT', async () => {
    await worker.close()
    process.exit(0)
})