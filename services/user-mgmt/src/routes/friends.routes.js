/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify, opts, done) => {
    fastify.get('/friends', (request, reply) => {
        return { status: 'ready' }
    })
    done()
}
