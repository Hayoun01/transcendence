const sendError = (reply, statusCode, message, extra = {}) => {
    return reply.code(statusCode).send({
        success: false,
        message,
        ...extra
    })
}

const sendSuccess = (reply, statusCode, message, extra = {}) => {
    return reply.code(statusCode).send({
        success: true,
        message,
        ...extra
    })
}

const requestToHeaders = (request) => ({
    'x-request-id': request.headers['x-request-id']
})

export {
    sendError,
    sendSuccess,
    requestToHeaders,
}