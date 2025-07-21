import Fastify from 'fastify'
import indexRoute from './routes/index.routes.js'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { environ } from './utils/env.js'
import { prisma } from './db/prisma.js'
import fastifyRateLimit from '@fastify/rate-limit'
import Redis from 'ioredis'
import { redis } from './db/redis.js'
import { queue } from './services/queue.services.js'

const fastify = Fastify({
    logger: true,
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

await fastify.register(fastifyCookie)
await fastify.register(indexRoute, { prefix: '/api/v1' })
fastify.addHook('onClose', async () => {
    await queue.registration.close()
})

try {
    await fastify.listen({ port: environ.PORT })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}