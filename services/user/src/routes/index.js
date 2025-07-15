import readyRoute from './ready.js'
import usersRoute from './users.js'
import authRoute from './auth.js'
import friendsRoute from './friends.js'

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify, opts, done) => {
    fastify.register(readyRoute, { prefix: '/' })
    fastify.register(usersRoute, { prefix: '/users' })
    fastify.register(authRoute, { prefix: '/auth' })
    fastify.register(friendsRoute, { prefix: '/' })
    done()
}
