import Fastify from 'fastify'
import fastifyWebsocket from '@fastify/websocket'
import { randomUUID } from 'crypto'
import indexRoutes from './routes/index.routes.js'

const fastify = Fastify({
    genReqId: () => randomUUID(),
    requestIdHeader: 'x-request-id',
    logger: {
        transport: {
            targets: [
                { target: 'pino-pretty', level: 'info' },
                { target: 'pino/file', options: { destination: '../logs/chat.log' }, level: 'info' }
            ]
        }
    }
})

fastify.register(fastifyWebsocket)
fastify.register(indexRoutes, { prefix: '/' })

try {
    await fastify.listen({ port: 3003 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}
