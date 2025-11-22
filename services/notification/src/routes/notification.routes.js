import { prisma } from "../db/prisma.js";

/**
 * @type {Map<string, Set<import('@fastify/websocket').WebSocket>>}
 */
export const users = new Map();

export const broadcastToUser = (userId, data) => {
  const user = users.get(userId);
  if (!user) return;
  for (const socket of user) {
    socket.send(JSON.stringify(data));
  }
};

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default (fastify) => {
  fastify.get("/live", { websocket: true }, (socket, req) => {
    const { userId } = req.query;
    console.log(`${userId} connected!`);
    socket.send("hey");
    if (!users.has(userId)) users.set(userId, new Set());
    users.get(userId).add(socket);
    socket.on("message", (message) => {
      socket.send(`Message from ${userId}: ${message}`);
    });
    socket.on("close", () => {
      const userSocket = users.get(userId);
      if (userSocket) {
        userSocket.delete(socket);
        if (userSocket.size === 0) users.delete(userId);
      }
      console.log(`${userId} closed connection`);
    });
  });
  fastify.get("/notifications", async (request, reply) => {
    const userId = request.headers["x-user-id"];
    console.log(userId);
    const notifications = await prisma.notification.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return notifications;
  });

  fastify.patch(
    "/notifications/:notificationId/read",
    async (request, reply) => {
      const userId = request.headers["x-user-id"];
      const notificationId = request.params.notificationId;
      const notification = await prisma.notification.findUnique({
        where: {
          id: notificationId,
          userId,
          deletedAt: null,
        },
      });
      // ! Change error message
      if (!notification) return reply.send({ error: "Not found!" });
      if (notification.readAt)
        return reply.send({ error: "Already read this notification!" });
      const updated = await prisma.notification.update({
        where: { id: notification.id },
        data: {
          readAt: new Date(),
        },
      });
      return updated;
    }
  );

  fastify.post("/notifications", async (request, reply) => {
    const data = request.body;
    const notification = await prisma.notification.create({
      data,
    });
    broadcastToUser(data);
    return notification;
  });

  fastify.post("/notifications/read_all", async (request, reply) => {
    const userId = request.headers["x-user-id"];
    const notification = await prisma.notification.updateMany({
      where: {
        userId,
        readAt: null,
        deletedAt: null,
      },
      data: {
        readAt: new Date(),
      },
    });
    return { success: true, ...notification };
  });
};

// setInterval(() => {
//   let count = 0;
//   let totalClients = 0;
//   for (const conn of users) {
//     totalClients++;
//     count += conn[1].size;
//   }
//   console.log(`Active clients: ${totalClients}`);
//   console.log(`Active connections: ${count}`);
// }, 1000);
