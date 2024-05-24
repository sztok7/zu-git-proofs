import type { FastifyInstance } from "fastify";


export function pingRoute(server: FastifyInstance): void {
    server.get('/ping', async (request, reply) => {
        return 'pong\n'
      })
}