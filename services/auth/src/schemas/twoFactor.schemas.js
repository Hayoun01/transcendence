import z from 'zod'

export const setup2FASchema = z.object({
    method: z.enum(['TOTP', 'EMAIL']),
    email: z.string().email().optional(),
}).strict().refine(data => {
    if (data.method === 'EMAIL') return !!data.email
    return true
}, { message: 'email is required for EMAIL method' }
)