import Fastify from 'fastify'
import indexRoute from './routes/index.js'
import { db } from './db/connect.js'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'

const fastify = Fastify({
    logger: true
})

fastify.register(fastifyJwt, {
    secret: 'enR8JDK3EJvBl03pk9wbP33EO8J6cbB5irrjkML996X9rsPe3V',
    cookie: {
        cookieName: 'token',
        signed: true
    }
})

fastify.decorate('db', db)
fastify.get('/', async function handler(request, reply) {
    return { hello: 'world' }
})

fastify.decorate('authenticate', async (request, reply) => {
    try {
        const payload = await request.jwtVerify()
        const user = fastify.db.prepare(`SELECT * FROM users WHERE id = ?`).get(payload.userId)
        if (!user) return reply.code(401).send({ error: 'Unauthorized' })
    } catch (e) {
        reply.code(401).send({ error: 'Unauthorized' })
    }
})

fastify.register(fastifyCookie)


fastify.register(indexRoute, { prefix: '/api/v1' })

try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}