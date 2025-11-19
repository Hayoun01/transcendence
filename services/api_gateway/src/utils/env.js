import dotenv from 'dotenv'

dotenv.config({ path: ['.env', '../.env.shared'] })

export const environ = {
  PORT: process.env.PORT || 3000,
  INTERNAL_SECRET: process.env.INTERNAL_SECRET,
  INTERNAL_HMAC_SECRET: process.env.INTERNAL_HMAC_SECRET,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};
