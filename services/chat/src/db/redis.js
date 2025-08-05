import IORedis from 'ioredis';
import { environ } from '../utils/env.js';

export const redisSub = new IORedis({
    host: environ.REDIS_HOST,
    port: parseInt(environ.REDIS_PORT),
    maxRetriesPerRequest: null
});

export const redisPub = new IORedis({
    host: environ.REDIS_HOST,
    port: parseInt(environ.REDIS_PORT),
    maxRetriesPerRequest: null
});
