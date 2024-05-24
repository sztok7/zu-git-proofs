  import { MessagePCDPackage, type MessagePCD } from "@pcd/message-pcd";
import {
    FeedHost,
    PollFeedRequest,
    PollFeedResponseValue,
    verifyCredential,
} from "@pcd/passport-interface";
import {
    DeleteFolderPermission,
    PCDAction,
    PCDActionType,
    PCDPermissionType,
    type ReplaceInFolderPermission
} from "@pcd/pcd-collection";
import { ArgumentTypeName, SerializedPCD } from "@pcd/pcd-types";
import { FastifyInstance, type FastifyPluginAsync } from "fastify";
  
  const FOLDER = "Github Ranks"

  export async function registerFeedService(server: FastifyInstance) {
    const feedPlugin: FastifyPluginAsync = async (instance, opts) => {
        const feedHost = new FeedHost(
            [
              {
                feed: {
                  id: "999999999999",
                  name: "zu-git-rank",
                  description: "Feed containing your Git badges",
                  permissions: [
                    {
                      folder: FOLDER,
                      type: PCDPermissionType.DeleteFolder
                    } as DeleteFolderPermission,
                    {
                      folder: FOLDER,
                      type: PCDPermissionType.ReplaceInFolder
                    } as ReplaceInFolderPermission,
                  ],
                  credentialRequest: {
                    signatureType: "sempahore-signature-pcd",
                    pcdType: "email-pcd"
                  }
                },
                handleRequest: async (
                  req: PollFeedRequest
                ): Promise<PollFeedResponseValue> => {
                  if (req.pcd === undefined) {
                    throw new Error(`Missing credential`);
                  }
                  
                  const { emailClaim, emailSignatureClaim } = await verifyCredential(req.pcd);
                  
                  if (emailClaim && emailSignatureClaim) {
                    // const verified =
                    //   _.isEqual(emailSignatureClaim.publicKey, ZUPASS_PUBLIC_KEY);
                    return {
                        actions: await feedActionsForEmail(
                          server.config.SERVER_PRIVATE_KEY,
                          emailClaim.emailAddress
                        )
                    };
                  }
                  return { actions: [] };
                }
              }
            ],
            "https://8c57-185-199-104-14.ngrok-free.app/feeds",
            "Zu Git Proof Feed Server"
          );
        instance.decorate("feed", feedHost)
    }
    //@ts-expect-error
    feedPlugin[Symbol.for('skip-override')] = true

    await server.register(feedPlugin);
  } 

  async function feedActionsForEmail(
    privateKey: string, 
    emailAddress: string
  ): Promise<PCDAction[]> {
  
    const actions = [];

    // Clear out the folder
    actions.push({
        type: PCDActionType.DeleteFolder,
        folder: FOLDER,
        recursive: false
    });
  
    //TODO: check bacdge by email
    actions.push({
        type: PCDActionType.ReplaceInFolder,
        folder: FOLDER,
        pcds: [
            await issueBadgePCD(privateKey, "Core Contributor")
        ]
      });
  
    return actions;
  }
  
  async function issueBadgePCD(
    privateKey: string,
    badge: string
  ): Promise<SerializedPCD<MessagePCD>> {
  
    const pcd = await MessagePCDPackage.prove({
      message: {
        argumentType: ArgumentTypeName.Object,
        value: {
            displayName: "Github Rank",
            mdBody: badge
        }
      },
      privateKey: {
        value: privateKey,
        argumentType: ArgumentTypeName.String
      },
      id: {
        value: undefined,
        argumentType: ArgumentTypeName.String
      }
    });
  
    return MessagePCDPackage.serialize(pcd);
  }
  
  declare module 'fastify' {
    interface FastifyInstance {
        feed: FeedHost
    }
  }

