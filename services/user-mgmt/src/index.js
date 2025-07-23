import Fastify from 'fastify'
import indexRoute from './routes/index.routes.js'
import fastifyMultipart from '@fastify/multipart'
import { environ } from './utils/env.js'
import hmacVerify from './utils/hmac.js'
import { randomUUID } from 'crypto'

const fastify = Fastify({
    genReqId: () => randomUUID(),
    requestIdHeader: 'x-request-id',
    logger: {
        transport: {
            targets: [
                { target: 'pino-pretty', level: 'info' },
                { target: 'pino/file', options: { destination: '../logs/user-mgmt.log' }, level: 'info' }
            ]
        }
    }
})

fastify.register(fastifyMultipart)
fastify.register(hmacVerify, { secret: environ.INTERNAL_HMAC_SECRET })

fastify.register(indexRoute, { prefix: '/api/v1' })

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