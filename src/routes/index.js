import readyRoute from './ready.js'
import usersRoute from './users.js'

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify, opts, done) => {
    fastify.register(readyRoute, { prefix: '/' })
    fastify.register(usersRoute, { prefix: '/' })
    done()
}
