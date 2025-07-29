/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default async (fastify) => {
    fastify.get('/health', {
        schema: {
            tags: ['Health'],
            summary: 'Check the health of user-mgmt service',
            description: 'Returns a simple status message to indicate the user-mgmt service is running.',
            response: {
                200: {
                    description: 'Service is healthy',
                    type: 'object',
                    properties: {
                        message: { type: 'string', example: 'healthy' }
                    }
                }
            }
        }
    }, (request, reply) => {
        return { message: 'healthy' }
    })
}
