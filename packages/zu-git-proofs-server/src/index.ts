import fastify from 'fastify'
import {fastifyCors} from '@fastify/cors'
import { registerEnvPlugin } from './config'
import { registerRoutes } from './routes';

const server = fastify();

async function init() {
  await registerEnvPlugin(server)
  server.register(fastifyCors, {
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