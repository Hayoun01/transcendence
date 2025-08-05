import dotenv from 'dotenv'

dotenv.config({ path: ['.env', '../.env.shared'] })

export const environ = {
    PORT: process.env.PORT || 3003,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    INTERNAL_HMAC_SECRET: process.env.INTERNAL_HMAC_SECRET,
}
