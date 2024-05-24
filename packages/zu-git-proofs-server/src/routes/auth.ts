import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";


export function authRoute(server: FastifyInstance): void {
    server.post('/auth/github', async (
        req: FastifyRequest<{
            Body: {
                code: string;
            }
        }>,
        res: FastifyReply
    ) => {
        const { code } = req.body;

        // Exchange the code for an access token
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                client_id: server.config.GITHUB_CLIENT_ID,
                client_secret: server.config.GITHUB_CLIENT_SECRET,
                code,
            }),
        });

        const tokenData = await tokenResponse.json() as any;
        const accessToken = tokenData.access_token;

        if (accessToken) {
            // do things with jwt
            res.send({ success: true });
        } else {
            res.send({ success: false });
        }
    });
}