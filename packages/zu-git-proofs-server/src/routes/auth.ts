import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { Octokit } from "octokit";
import { storeZupassBadge } from "../db.js";
import { getGithubBadhes as getGithubBadges } from "../badges.js";


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
            console.log("Received callback", code, zupassEmail)
            const tokenAuthentication = await server.oauth({
                type: "oauth-user",
                code: code,
              });

            const octokit = new Octokit({
                auth: tokenAuthentication.token,
            });
            const { data: emails } = await octokit.rest.users.listEmailsForAuthenticatedUser();
            console.log("Authenticated user", {github: emails, zupassEmail})
            const badge = await getGithubBadges(emails.map((email) => email.email))
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