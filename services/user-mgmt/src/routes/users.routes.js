import path from 'path'
import fs from 'fs';
import mime from 'mime-types'
import { generateFilename, saveFile } from '../utils/file.js'
import sharp from 'sharp';
import { z } from 'zod';
import { prisma } from '../db/prisma.js';
import { sendError, sendSuccess } from '../utils/fastify.js';


/**
 * @type {import('fastify').FastifyPluginCallback}
*/
export default (fastify, opts, done) => {
    fastify.get('/me', async (request, reply) => {
        const userId = request.headers['x-user-id']
        return prisma.userProfile.findUnique({
            where: {
                id: userId
            },
            select: {
                bio: true
            }
        })
    })
    fastify.post('/me/avatar', async (request, reply) => {
        try {
            const userId = request.headers['x-user-id']
            const data = await request.file()
            const allowedTypes = ["image/png", "image/jpeg"]
            if (!allowedTypes.includes(data.mimetype))
                return reply.code(400).send({ error: 'Invalid file type. Only JPEG/PNG allowed.' })
            const extension = path.extname(data.filename)
            const filename = generateFilename(extension)
            const dirPath = path.join('uploads', 'avatars', generateFilename())
            const filePath = path.join(dirPath, filename)
            fs.mkdirSync(path.dirname(filePath), { recursive: true })
            await saveFile(data.file, filePath)
            const result = await prisma.$transaction(async (tx) => {
                const old = await tx.userProfile.findUnique({
                    where: {
                        id: userId
                    },
                    select: {
                        avatarPath: true
                    }
                })
                await tx.userProfile.update({
                    where: {
                        id: userId,
                    },
                    data: {
                        avatarPath: dirPath,
                        avatarName: data.filename,
                    }
                })
                return old
            })
            if (result?.avatarPath) {
                fs.rmSync(result.avatarPath, { recursive: true, force: true })
            }
            const sizes = [
                { name: 'small', width: 64, height: 64 },
                { name: 'medium', width: 128, height: 128 },
                { name: 'large', width: 512, height: 512 },
            ]
            await Promise.all(sizes.map((size) => {
                const ext = path.extname(data.filename)
                const outputFile = path.join(dirPath, `${size.name}${ext}`)
                return sharp(filePath)
                    .resize(size.with, size.height)
                    .toFile(outputFile)
            }))
            fs.unlinkSync(filePath)
            reply.code(201).send()
            return
        }
        catch (e) {
            reply.code(400)
            console.log(e)
            return
        }
    })
    fastify.get('/me/avatar', async (request, reply) => {
        const userId = request.headers['x-user-id']
        const size = request.query.size?.toLowerCase() || 'large'
        const allowedSizes = ['small', 'medium', 'large'];
        if (!allowedSizes.includes(size)) {
            return sendError(reply, 400, `Invalid size, valid ones are (${allowedSizes.join(' or ')})`)
        }
        try {
            const result = await prisma.userProfile.findUnique({
                where: {
                    id: userId
                },
                select: {
                    avatarPath: true,
                    avatarName: true,
                }
            })
            if (!result.avatarPath) return reply.code(404).send({ error: 'Avatar not found.' })
            const ext = path.extname(result.avatarName)
            const filePath = path.join(result.avatarPath, `${size}${ext}`)
            if (!fs.existsSync(filePath)) return reply.code(404).send({ error: 'Avatar not found.' })
            const fileStream = fs.createReadStream(filePath)
            return reply.header('Content-Disposition', `inline; filename="${result.avatarName}"`)
                .type(mime.contentType(ext))
                .send(fileStream)
        }
        catch (e) {
            reply.code(500)
            console.log(e)
            return
        }
    })
    const updateUserSchema = z.object({
        bio: z.string().max(256).optional(),
    }).strict()
    fastify.put('/me', {
        schema: {
            response: {
                500: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number' },
                        error: { type: 'string' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        try {
            updateUserSchema.parse(request.body)
        } catch (err) {
            const errors = err.errors.map((err) => ({
                path: err.path.join('.') || err.keys.join('.'),
                message: err.message
            }))
            return reply.code(400).send({ errors: errors })
        }
        if (!request.body || Object.keys(request.body).length == 0) return reply.code(400).send({ error: "Bad Request" })
        const data = request.body
        const fieldToUpdate = Object.keys(data)
            .filter((key) => data[key] !== undefined)
            .map((key) => `${key} = ?`)
            .join(', ')
        const valueToupdate = Object.values(data).filter((value) => value !== undefined)
        fastify.db.prepare(`UPDATE users SET ${fieldToUpdate} WHERE id = ?`).run([...valueToupdate, request.user.id])
        return
    })
    done()
}
