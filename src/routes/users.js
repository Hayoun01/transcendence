import { uuid } from '../db/connect.js';
import { hashCompare, hashPassword } from '../utils/bcrypt.js';
import { z } from 'zod';

/**
 * @type {import('fastify').FastifyPluginCallback}
 * @param {FastifyWithDB} fastify
 */
export default (fastify, opts, done) => {
    const UserSchema = z.object({
        username: z.string().min(3).max(64),
        password: z.string().min(8, "Password must be at least 8 characters")
            .max(64, "Password must not exceed 64 characters")
            .regex(/[A-Z]/, "Must contain at least one uppercase letter")
            .regex(/[a-z]/, "Must contain at least one lowercase letter")
            .regex(/\d/, "Must contain at least one number")
            .regex(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least one special character")
            .regex(/^\S*$/, "Must not contain spaces"),
        confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    })
    fastify.get('/users', async (request, reply) => {
        const users = fastify.db.prepare(`SELECT * FROM users`).all()
        return users
    })
    fastify.post('/register', async (request, reply) => {
        try {
            UserSchema.parse(request.body)
        } catch (err) {
            return reply.code(400).send({ errors: err.errors })
        }
        let { username, password } = request.body;
        password = hashPassword(password)
        const id = uuid();
        const stmt = fastify.db.prepare(`INSERT INTO users (id, username, password) VALUES (?, ?, ?)`);
        // stmt.run(id, username, password);

        reply.code(201)
    });
    fastify.post('/login', async (request, reply) => {
        try {
            UserSchema.parse(request.body)
        } catch (err) {
            return reply.code(400).send({ errors: err.errors })
        }
        let { username, password } = request.body;
        const id = uuid();
        const user = fastify.db.prepare(`SELECT * FROM users WHERE username = ?`).get(username);
        if (!user) return reply.code(401).send({ error: 'Username or Password incorrect' })
        if (!hashCompare(password, user.password)) return reply.code(401).send({ error: 'Username or Password incorrect' })
        const accessToken = fastify.jwt.sign({ userId: user.id }, { expiresIn: '1h' })
        const refreshToken = fastify.jwt.sign({ userId: user.id }, { expiresIn: '7d' })
        reply.setCookie('token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'strict'
        })
        reply.code(200).send({ accessToken, refreshToken })
    });

    fastify.get('/profile', { preValidation: [fastify.authenticate] }, (request, reply) => {
        reply.code(200).send({})
    })
    done()
}
