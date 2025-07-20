import healthRoute from './health.routes.js'
import usersRoute from './users.routes.js'
import friendsRoute from './friends.routes.js'
import internalRoute from './internal.routes.js'

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify, opts, done) => {
    fastify.register(healthRoute, { prefix: '/' })
    fastify.register(usersRoute, { prefix: '/' })
    fastify.register(friendsRoute, { prefix: '/' })
    fastify.register(internalRoute, { prefix: '/internal' })
    done()
}
