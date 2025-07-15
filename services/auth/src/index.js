import Fastify from 'fastify'
import indexRoute from './routes/index.routes.js'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { environ } from './utils/env.js'
import { prisma } from './db/prisma.js'
import fastifyRateLimit from '@fastify/rate-limit'
import Redis from 'ioredis'

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
    redis: new Redis({ host: '127.0.0.1' }),
})

fastify.decorate('authenticate', async (request, reply) => {
    try {
        const payload = await request.jwtVerify()
        // TODO: validate session as well
        const user = await prisma.user.findUnique({
            where: {
                id: payload.userId
            }
        })
        if (!user)
            return reply.code(401).send({ error: 'Unauthorized' })
        request.user = user
    } catch (e) {
        reply.code(401).send({ error: 'Unauthorized' })
    }
})

await fastify.register(fastifyCookie)
await fastify.register(indexRoute, { prefix: '/api/v1' })

try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}