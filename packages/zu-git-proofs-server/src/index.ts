import fastify from 'fastify'
import {fastifyCors} from '@fastify/cors'
import { registerEnvPlugin } from './config'
import { registerRoutes } from './routes';
import { MessagePCDPackage } from "@pcd/message-pcd";
import { registerFeedService } from './feed';

const server = fastify();

async function init() {
  await MessagePCDPackage.init?.({});
  await registerEnvPlugin(server)
  await registerFeedService(server)
  await server.register(fastifyCors, {
    origin: true
  })

  await registerRoutes(server)
}


init().then(() => {
    server.listen({ port: server.config.PORT }, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address}`)
    })
})