import Fastify from 'fastify'
import indexRoute from './routes/index.routes.js'
import fastifyJwt from '@fastify/jwt'
import { environ } from './utils/env.js'
import fastifyRateLimit from '@fastify/rate-limit'
import { redis } from './db/redis.js'
import { closeAll, getQueue, QueueType } from './services/queue.services.js'
import { randomUUID } from 'crypto'

const fastify = Fastify({
    genReqId: () => randomUUID(),
    requestIdHeader: 'x-request-id',
    logger: {
        transport: {
            targets: [
                { target: 'pino-pretty', level: 'info' },
                { target: 'pino/file', options: { destination: '../logs/auth.log' }, level: 'info' }
            ]
        }
    }
})

fastify.register(fastifyJwt, {
    secret: environ.JWT_SECRET,
    cookie: {
        cookieName: 'token',
        signed: true
    }
})

await fastify.register(fastifyRateLimit, {
    global: false,
    max: 3,
    timeWindow: '1 minute',
    redis,
})

await fastify.register(indexRoute, { prefix: '/api/v1' })

fastify.addHook('onReady', async () => {
    getQueue(QueueType.REGISTRATION)
    getQueue(QueueType.NOTIFICATIONS)
    getQueue(QueueType.EMAIL)
})

fastify.addHook('onClose', async () => {
    await closeAll()
})

fastify.addHook('onRequest', async (request, reply) => {
    // * trace request
    request.headers['x-request-id'] = request.id
    reply.header('x-request-id', request.id)
})

try {
    await fastify.listen({ port: environ.PORT })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}