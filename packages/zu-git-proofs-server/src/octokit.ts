  import { FastifyInstance, type FastifyPluginAsync } from "fastify";
import { createOAuthAppAuth, type OAuthAppAuthInterface } from "@octokit/auth-oauth-app";


  export async function registerGithubOAuthService(server: FastifyInstance) {
    const octokitPlugin: FastifyPluginAsync = async (instance, opts) => {
      const app = createOAuthAppAuth({
        clientType: "oauth-app",
        clientId: server.config.GITHUB_CLIENT_ID,
        clientSecret: server.config.GITHUB_CLIENT_SECRET,
      });  
      instance.decorate("oauth", app)
    }
    //@ts-expect-error
    octokitPlugin[Symbol.for('skip-override')] = true

    await server.register(octokitPlugin);
  } 
  
  declare module 'fastify' {
    interface FastifyInstance {
        oauth: OAuthAppAuthInterface
    }
  }

