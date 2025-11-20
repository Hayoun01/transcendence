import { prisma } from "../db/prisma.js";
import { sendError, sendSuccess } from "../utils/fastify.js";
import { isFriendShipExists } from "../utils/friendship.js";

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default async (fastify) => {
  fastify.get("/blocks", async (request, reply) => {
    const userId = request.headers["x-user-id"];
    return await prisma.blockedUser.findMany({
      where: {
        blockerId: userId,
      },
      select: {
        id: true,
        blocked: {
          select: {
            id: true,
            username: true,
          },
        },
        createdAt: true,
      },
    });
  });
  fastify.post("/blocks", async (request, reply) => {
    const userId = request.headers["x-user-id"];
    const { targetUserId } = request.body;
    if (userId === targetUserId)
      return sendError(reply, 400, "USER_CANNOT_BLOCK_SELF");
    // ! replace it
    if (
      !(await prisma.userProfile.findUnique({ where: { id: targetUserId } }))
    ) {
      return sendError(reply, 404, "USER_NOT_FOUND");
    }
    if (
      await prisma.blockedUser.findUnique({
        where: {
          blockerId_blockedId: {
            blockerId: userId,
            blockedId: targetUserId,
          },
        },
      })
    ) {
      return sendError(reply, 400, "USER_ALREADY_BLOCKED");
    }
    await prisma.blockedUser.create({
      data: {
        blockerId: userId,
        blockedId: targetUserId,
      },
    });
    const friendshipExists = await isFriendShipExists(userId, targetUserId);
    if (friendshipExists) {
      await fastify.rabbit.channel.publish(
        "user.events",
        "friendship.removed",
        Buffer.from(
          JSON.stringify({
            requesterId: userId,
            receiverId: targetUserId,
          })
        ),
        {
          persistent: true,
        }
      );
    }
    return sendSuccess(reply, 200, "USER_BLOCKED_SUCCESS");
  });
  fastify.delete("/blocks/:blockedId", async (request, reply) => {
    const userId = request.headers["x-user-id"];
    const { blockedId } = request.params;
    const blocked = await prisma.blockedUser.findUnique({
      where: {
        id: blockedId,
        blockerId: userId,
      },
    });
    if (!blocked) {
      return sendError(reply, 404, "NOT_FOUND");
    }
    await prisma.blockedUser.delete({
      where: { id: blockedId },
    });
    const friendshipExists = await isFriendShipExists(
      userId,
      blocked.blockedId
    );
    if (friendshipExists) {
      await fastify.rabbit.channel.publish(
        "user.events",
        "friendship.created",
        Buffer.from(
          JSON.stringify({
            requesterId: userId,
            receiverId: blocked.blockedId,
          })
        ),
        {
          persistent: true,
        }
      );
    }
    return sendSuccess(reply, 200, "USER_UNBLOCKED_SUCCESS");
  });
};
