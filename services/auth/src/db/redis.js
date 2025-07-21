import IORedis from 'ioredis';
import { environ } from '../utils/env.js';

export const redis = new IORedis({
    host: environ.REDIS_HOST,
    port: parseInt(environ.REDIS_PORT),
    maxRetriesPerRequest: null
});
