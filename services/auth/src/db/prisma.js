import { PrismaClient } from "../generated/prisma/index.js";

export const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})

await prisma.$executeRaw`PRAGMA synchronous = NORMAL;`
await prisma.$executeRaw`PRAGMA cache_size = 10000;`
