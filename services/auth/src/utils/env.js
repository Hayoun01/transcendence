import dotenv from 'dotenv'

dotenv.config({ path: ['.env', '../.env.shared'] })

export const environ = {
    PORT: process.env.PORT || 3001,
    JWT_SECRET: process.env.JWT_SECRET,
    TWO_FA_KEY: Buffer.from(process.env.TWO_FA_KEY, 'hex'),
    INTERNAL_SECRET: process.env.INTERNAL_SECRET,
    INTERNAL_HMAC_SECRET: process.env.INTERNAL_HMAC_SECRET,
}
