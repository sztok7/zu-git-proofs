import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { Octokit } from "octokit";
import { storeZupassBadge } from "../db.js";
import { getGithubBadhes } from "../badges.js";


export function authRoute(server: FastifyInstance): void {
    server.post('/auth/github', async (
        req: FastifyRequest<{
            Body: {
                code: string;
                zupassEmail: string;
            }
        }>,
        res: FastifyReply
    ) => {
        try {
            const { code, zupassEmail } = req.body;

            const tokenAuthentication = await server.oauth({
                type: "oauth-user",
                code: code,
              });

            const octokit = new Octokit({
                auth: tokenAuthentication.token,
            });
            const { data: { login } } = await octokit.rest.users.getAuthenticated();
            console.log("Authenticated user", {github: login, zupassEmail})
            const badge = await getGithubBadhes(login)

            console.log("User badges", {zupassEmail, badges: badge})
            if(badge) {
                await storeZupassBadge(server.db, zupassEmail, badge)
            }
            console.log("Returning success")
            return res.send({ success: true });
        } catch(e) {
            console.error(e)
            res.send({success: false})
        }
    });
}