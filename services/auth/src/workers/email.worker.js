import { Worker } from 'bullmq'
import { QueueType } from '../services/queue.services.js'
import { redis } from '../db/redis.js'
import mailer from '../utils/mailer.js'
import { fileURLToPath } from 'url'

let running_worker;

const worker = () => new Worker(
    QueueType.EMAIL,
    async (job) => {
        console.log('Job (email) started!')
        const { email, template, context } = job.data
        try {
            await mailer.sendEmail(template, email, context)
        }
        catch (e) { }
        console.log('Job (email) done')
    },
    {
        connection: redis,
        concurrency: 10,
        limiter: {
            max: 200,
            duration: 1000
        }
    }
)

process.on('SIGINT', async () => {
    await running_worker.close()
    process.exit(0)
})

process.on('SIGTERM', async () => {
    await running_worker.close()
    process.exit(0)
})

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    console.log('Email worker started!')
    running_worker = worker()
}
