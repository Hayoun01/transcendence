import { Queue } from 'bullmq'
import { redis } from '../db/redis.js'

export const QueueType = Object.freeze({
    REGISTRATION: 'registration',
    NOTIFICATIONS: 'notifications',
    EMAIL: 'email',
})

export const queue = {
    [QueueType.REGISTRATION]: new Queue(QueueType.REGISTRATION, {
        connection: redis,
        defaultJobOptions: {
            attempts: 3,
            backoff: {
                type: 'exponential',
                delay: 1000,
            }
        }
    })
}
