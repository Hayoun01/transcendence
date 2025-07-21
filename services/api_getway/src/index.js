import Fastify from 'fastify'
import proxy from '@fastify/http-proxy'
import { randomUUID } from 'crypto'
import { sendError } from './utils/fastify.js';
import { environ } from './utils/env.js';
import { pathToRegexp } from 'path-to-regexp'

const fastify = Fastify({ logger: true });

const publicRoutes = [
    '/api/v1/auth/login',
    '/api/v1/auth/register',
    '/api/v1/auth/verify',
    '/api/v1/auth/refresh',
    '/api/v1/auth/oauth/:provider/callback',
    '/api/v1/auth/oauth/:provider',
].map(path => pathToRegexp(path))

fastify.addHook('onRequest', async (request, reply) => {
    const uuid = randomUUID()
    // TODO: trace request
    request.headers['x-request-id'] = uuid
    reply.header('x-request-id', uuid)
    const isInternal = request.url.includes('/internal/')

    if (isInternal) {
        return reply.code(403).send({ error: 'Forbidden' })
    }
    const url = request.url.split('?')[0]
    if (publicRoutes.some(regex => regex.regexp.test(url)))
        return
    const result = await fetch('http://localhost:3001/api/v1/verify', {
        method: 'GET',
        headers: request.headers,
    })
    if (!result.ok)
        return sendError(reply, 401, 'Unauthorized')
    const response = await result.json();
    request.headers['x-user-id'] = response.userId
})

fastify.register(proxy, {
    upstream: 'http://localhost:3001',
    prefix: '/api/v1/auth',
    rewritePrefix: '/api/v1',
})

fastify.register(proxy, {
    upstream: 'http://localhost:3002',
    prefix: '/api/v1/user-mgmt',
    rewritePrefix: '/api/v1',
})

fastify.get('/health', (request, reply) => {
    return { message: 'healthy' }
})

fastify.listen({ port: environ.PORT })
