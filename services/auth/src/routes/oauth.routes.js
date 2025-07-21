import axios from 'axios';
import { sendError, sendSuccess } from '../utils/fastify.js';
import { authService } from '../services/auth.services.js';
import { prisma } from '../db/prisma.js';
import { environ } from '../utils/env.js';

const providers = {
    google: {
        clientId: environ.GOOGLE_CLIENT_ID,
        clientSecret: environ.GOOGLE_CLIENT_SECRET,
        authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
        tokenUrl: 'https://oauth2.googleapis.com/token',
        profileUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
        scopes: ['openid', 'email', 'profile']
    },
    github: {
        clientId: environ.GITHUB_CLIENT_ID,
        clientSecret: environ.GITHUB_CLIENT_SECRET,
        authUrl: 'https://github.com/login/oauth/authorize',
        tokenUrl: 'https://github.com/login/oauth/access_token',
        profileUrl: 'https://api.github.com/user',
        scopes: ['user:email']
    }
};

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify, opts, done) => {
    fastify.get('/:provider', (request, reply) => {
        const { provider } = request.params
        const config = providers[provider]
        if (provider === 'github')
            return sendSuccess(reply, 200, 'Github OAuth', {
                link: `${config.authUrl}?scope=${config.scopes.join(',')}&client_id=${config.clientId}`
            })
        return sendError(reply, 400, 'Unsupported OAuth provider')
    })
    const getOAuthProfile = async (provider, code) => {
        const config = providers[provider]
        if (provider === 'github') {
            const { data: accessTokenData } = await axios.post(
                config.tokenUrl,
                {
                    client_id: config.clientId,
                    client_secret: config.clientSecret,
                    code,
                    redirect_uri: 'http://127.0.0.1:3000/api/v1/auth/oauth/github/callback'
                },
                {
                    headers: { Accept: 'application/json' }
                }
            )
            console.log(accessTokenData)
            const { data: profile } = await axios.get(config.profileUrl, {
                headers: { Authorization: `Bearer ${accessTokenData.access_token}` }
            });
            const { data: emails } = await axios.get('https://api.github.com/user/emails', {
                headers: { Authorization: `Bearer ${accessTokenData.access_token}` }
            });

            const primaryEmail = emails.find(email => email.primary)?.email || emails[0]?.email;

            return {
                id: profile.id.toString(),
                email: primaryEmail,
                name: profile.name || profile.login
            }
        }
        return null
    }
    fastify.get('/:provider/callback', async (request, reply) => {
        const { provider } = request.params
        const { code } = request.query
        const config = providers[provider]
        const oAuthProfile = await getOAuthProfile(provider, code)
        if (!oAuthProfile)
            return sendError(reply, 400, 'Unsupported OAuth provider')
        if (await authService.isUserExists(oAuthProfile.email))
            return sendError(reply, 400, 'User already exists!')
        await prisma.$transaction(async (tx) => {
            const created_user = await tx.user.create({
                data: {
                    email: oAuthProfile.email
                }
            })
            await tx.oAuthLink.create({
                data: {
                    provider: provider.toUpperCase(),
                    providerId: oAuthProfile.id,
                    userId: created_user.id,
                }
            })
        })
        return sendSuccess(reply, 201, 'User successfuly created!')
    })
    done()
}
