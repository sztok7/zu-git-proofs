import type { FastifyInstance } from "fastify";
import { pingRoute } from "./routes/ping.js";
import { getEcdsaKey, getFeed, getFeeds, postFeeds } from "./routes/feeds.js";
import { authRoute } from "./routes/auth.js";

export async function registerRoutes(server: FastifyInstance) {
    pingRoute(server)
    authRoute(server);
    getFeeds(server)
    getFeed(server)
    postFeeds(server)
    getEcdsaKey(server)
}