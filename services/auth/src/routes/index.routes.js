import readyRoute from './ready.routes.js'
import authRoute from './auth.routes.js'
import twoFactorRoute from './twoFactor.routes.js'

/**
 * @type {import('fastify').FastifyPluginAsync}
 */
const indexRoute = async (fastify, opts) => {
    await fastify.register(readyRoute, { prefix: '/' })
    await fastify.register(authRoute, { prefix: '/auth' })
    await fastify.register(twoFactorRoute, { prefix: '/2fa' })
};

export default indexRoute;
