  import messagePcd from "@pcd/message-pcd";
import passportInterface from "@pcd/passport-interface";
import pcdCollection from "@pcd/pcd-collection";
import pcdTypes from "@pcd/pcd-types";
import { FastifyInstance, type FastifyPluginAsync } from "fastify";
import { getZupassBadge } from "./db.js";
  
  const FOLDER = "Github Ranks"

  export async function registerFeedService(server: FastifyInstance) {
    const feedPlugin: FastifyPluginAsync = async (instance, opts) => {
        const feedHost = new passportInterface.FeedHost(
            [
              {
                feed: {
                  id: "999999999999",
                  name: "zu-git-rank",
                  description: "Feed containing your Git badges",
                  permissions: [
                    {
                      folder: FOLDER,
                      type: pcdCollection.PCDPermissionType.DeleteFolder
                    } as pcdCollection.DeleteFolderPermission,
                    {
                      folder: FOLDER,
                      type: pcdCollection.PCDPermissionType.ReplaceInFolder
                    } as pcdCollection.ReplaceInFolderPermission,
                  ],
                  credentialRequest: {
                    signatureType: "sempahore-signature-pcd",
                    pcdType: "email-pcd"
                  }
                },
                handleRequest: async (
                  req: passportInterface.PollFeedRequest
                ): Promise<passportInterface.PollFeedResponseValue> => {
                  if (req.pcd === undefined) {
                    throw new Error(`Missing credential`);
                  }
                  
                  const { emailClaim, emailSignatureClaim } = await passportInterface.verifyCredential(req.pcd);
                  
                  if (emailClaim && emailSignatureClaim) {
                    // const verified =
                    //   _.isEqual(emailSignatureClaim.publicKey, ZUPASS_PUBLIC_KEY);
                    console.log("Creating feed for email", emailClaim.emailAddress)
                    return {
                        actions: await feedActionsForEmail(
                          server.db,
                          server.config.SERVER_PRIVATE_KEY,
                          emailClaim.emailAddress
                        )
                    };
                  }
                  return { actions: [] };
                }
              }
            ],
            server.config.PUBLIC_SERVER_URL + "/feeds",
            "Zu Git Proof Feed Server"
          );
        instance.decorate("feed", feedHost)
    }
    //@ts-expect-error
    feedPlugin[Symbol.for('skip-override')] = true

    await server.register(feedPlugin);
  } 

  async function feedActionsForEmail(
    db: FastifyInstance["db"],
    privateKey: string, 
    emailAddress: string
  ): Promise<pcdCollection.PCDAction[]> {
  
    const actions = [];

    // Clear out the folder
    actions.push({
        type: pcdCollection.PCDActionType.DeleteFolder,
        folder: FOLDER,
        recursive: false
    });
  
    const badge = await getZupassBadge(db, emailAddress)
    console.log("Obtained badges for zupassemail", {emailAddress, badge})
    if(badge) {
      actions.push({
        type: pcdCollection.PCDActionType.ReplaceInFolder,
        folder: FOLDER,
        pcds: [
            await issueBadgePCD(privateKey, badge.badge)
        ]
      });
    }
    return actions;
  }
  
  async function issueBadgePCD(
    privateKey: string,
    badge: string
  ): Promise<pcdTypes.SerializedPCD<messagePcd.MessagePCD>> {
  
    const pcd = await messagePcd.MessagePCDPackage.prove({
      message: {
        argumentType: pcdTypes.ArgumentTypeName.Object,
        value: {
            displayName: "Github Rank",
            mdBody: badge
        }
      },
      privateKey: {
        value: privateKey,
        argumentType: pcdTypes.ArgumentTypeName.String
      },
      id: {
        value: undefined,
        argumentType: pcdTypes.ArgumentTypeName.String
      }
    });
  
    return messagePcd.MessagePCDPackage.serialize(pcd);
  }
  
  declare module 'fastify' {
    interface FastifyInstance {
        feed: passportInterface.FeedHost
    }
  }

