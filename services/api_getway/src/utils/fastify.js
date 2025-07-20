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

export {
    sendError,
    sendSuccess
}