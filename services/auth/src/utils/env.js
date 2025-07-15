import dotenv from 'dotenv'

dotenv.config()

export const environ = {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET,
    TWO_FA_KEY: Buffer.from(process.env.TWO_FA_KEY, 'hex'),
}
