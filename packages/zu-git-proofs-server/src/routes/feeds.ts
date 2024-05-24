import { getEdDSAPublicKey } from "@pcd/eddsa-pcd";
import type { ListFeedsRequest, PollFeedRequest } from "@pcd/passport-interface";
import type { FastifyInstance } from "fastify";

export function getFeeds(server: FastifyInstance) {
    server.get("/feeds", async (req, res) => {
        const request = req.body as ListFeedsRequest;
      
        return res.send(await server.feed.handleListFeedsRequest(request));
      });
}

export function postFeeds(server: FastifyInstance) {
    server.post("/feeds", async (req, res) => {
        const request = req.body as PollFeedRequest;
      
        return res.send(await server.feed.handleFeedRequest(request));
      });
}

export function getFeed(server: FastifyInstance) {
    server.get("/feeds/:feedId", async (req, res) => {
        //@ts-expect-error
        const feedId = req.params.feedId;
        if (server.feed.hasFeedWithId(feedId)) {
          const request = { feedId };
          return res.send(await server.feed.handleListSingleFeedRequest(request));
        } else {
          return res.status(404).send("not found");
        }
      });
}

export function getEcdsaKey(server: FastifyInstance) {
    server.get("/issue/eddsa-public-key", async (req, res) => {
        return res.send(
          await getEdDSAPublicKey(server.config.SERVER_PRIVATE_KEY)
        );
      });
}
