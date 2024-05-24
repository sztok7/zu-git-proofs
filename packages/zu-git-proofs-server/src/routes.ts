import type { FastifyInstance } from "fastify";
import { pingRoute } from "./routes/ping";
import { authRoute } from "./routes/auth";

export async function registerRoutes(server: FastifyInstance) {
    pingRoute(server);
    authRoute(server);   
}