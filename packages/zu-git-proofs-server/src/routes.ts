import type { FastifyInstance } from "fastify";
import { pingRoute } from "./routes/ping";

export async function registerRoutes(server: FastifyInstance) {
    pingRoute(server)
}