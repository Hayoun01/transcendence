/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify, opts, done) => {
    fastify.get('/ready', (request, reply) => {
        return { status: 'ready' }
    })
    done()
}
