const sendError = (reply, statusCode, message, extra = {}) => {
    return reply.code(statusCode).send({
        success: false,
        message,
        ...extra
    })
}

export {
    sendError
}