import type { FastifyInstance } from "fastify";
import { pingRoute } from "./routes/ping";
import { getEcdsaKey, getFeed, getFeeds, postFeeds } from "./routes/feeds";
import { authRoute } from "./routes/auth";

export async function registerRoutes(server: FastifyInstance) {
    pingRoute(server)
    authRoute(server);
    getFeeds(server)
    getFeed(server)
    postFeeds(server)
    getEcdsaKey(server)
}