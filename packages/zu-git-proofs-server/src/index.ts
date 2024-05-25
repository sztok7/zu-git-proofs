import fastify from 'fastify'
import {fastifyCors} from '@fastify/cors'
import { registerEnvPlugin } from './config.js'
import { registerRoutes } from './routes.js';
import messagePcd from "@pcd/message-pcd";
import { registerFeedService } from './feed.js';
import { initDb } from './db.js';
import { registerGithubOAuthService } from './octokit.js';

const server = fastify();

async function init() {
  await messagePcd.MessagePCDPackage.init?.({});
  await registerEnvPlugin(server)
  await initDb(server)
  await registerFeedService(server)
  await server.register(fastifyCors, {
    origin: true
  })
  await registerGithubOAuthService(server)
  await registerRoutes(server)
}


init().then(() => {
    server.listen({ port: server.config.PORT, host: server.config.HOST }, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address}`)
    })
})