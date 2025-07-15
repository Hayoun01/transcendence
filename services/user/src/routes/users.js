import path from 'path'
import fs from 'fs';
import mime from 'mime-types'
import { generateFilename, saveFile } from '../utils/file.js'
import sharp from 'sharp';
import { z } from 'zod';


/**
 * @type {import('fastify').FastifyPluginCallback}
 * @param {FastifyWithDB} fastify
*/
export default (fastify, opts, done) => {
    fastify.get('/', async (request, reply) => {
        const users = fastify.db.prepare(`SELECT * FROM users`).all()
        return users
    })
    fastify.get('/me', { preValidation: [fastify.authenticate] }, async (request, reply) => {
        const user = request.user
        return {
            username: user.username,
            bio: user.bio
        }
    })
    fastify.post('/me/avatar', { preValidation: [fastify.authenticate] }, async (request, reply) => {
        try {
            const data = await request.file()
            const allowedTypes = ["image/png", "image/jpeg"]
            if (!allowedTypes.includes(data.mimetype)) return reply.code(400).send({ error: 'Invalid file type. Only JPEG/PNG allowed.' })
            const extension = path.extname(data.filename)
            const filename = generateFilename(extension)
            const dirPath = path.join('uploads', 'avatars', generateFilename())
            const filePath = path.join(dirPath, filename)
            fs.mkdirSync(path.dirname(filePath), { recursive: true })
            await saveFile(data.file, filePath)
            const result = fastify.db.transaction((id, newPath, newName) => {
                const old = fastify.db.prepare(`SELECT avatar_path FROM users WHERE id = ?`).get(id)
                fastify.db.prepare(`UPDATE users SET avatar_path = ?, avatar_name = ? WHERE id = ?`).run(newPath, newName, id)
                return old
            })(request.user.id, dirPath, data.filename)
            if (result?.avatar_path) {
                fs.rmSync(result.avatar_path, { recursive: true, force: true })
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
    fastify.get('/me/avatar', { preValidation: [fastify.authenticate] }, async (request, reply) => {
        const size = request.query.size || 'large'
        const allowedSizes = ['small', 'medium', 'large'];
        if (!allowedSizes.includes(size)) {
            reply.code(400)
            return
        }
        try {
            const result = fastify.db.prepare(`SELECT avatar_path, avatar_name FROM users WHERE id = ?`).get(request.user.id)
            if (!result.avatar_path) return reply.code(404).send({ error: 'Avatar not found.' })
            const ext = path.extname(result.avatar_name)
            const filePath = path.join(result.avatar_path, `${size}${ext}`)
            if (!fs.existsSync(filePath)) return reply.code(404).send({ error: 'Avatar not found.' })
            const fileStream = fs.createReadStream(filePath)
            return reply.header('Content-Disposition', `inline; filename="${result.avatar_name}"`)
                .type(mime.contentType(filePath))
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
        preValidation: [fastify.authenticate],
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
