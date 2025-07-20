import Fastify from 'fastify'
import indexRoute from './routes/index.routes.js'
import fastifyMultipart from '@fastify/multipart'
import { environ } from './utils/env.js'
import hmacVerify from './utils/hmac.js'

const fastify = Fastify({
    logger: true,
})

fastify.register(fastifyMultipart)
fastify.register(hmacVerify, { secret: environ.INTERNAL_HMAC_SECRET })

fastify.register(indexRoute, { prefix: '/api/v1' })

try {
    await fastify.listen({ port: environ.PORT })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}