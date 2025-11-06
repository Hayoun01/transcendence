import { prisma } from "../db/prisma.js";
import { randomUUID } from "crypto";

/**
 * @type {Map<string, Set<import('@fastify/websocket').WebSocket>>}
 */
const users = new Map();

export const broadcastToUser = (data) => {
  const user = users.get(data.userId);
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
    const notifications = await prisma.notification.findMany();
    return notifications;
  });
  fastify.post("/notifications", async (request, reply) => {
    const data = request.body;
    const notification = await prisma.notification.create({
      data,
    });
    broadcastToUser(data);
    return notification;
  });
};

setInterval(() => {
  let count = 0;
  let totalClients = 0;
  for (const conn of users) {
    totalClients++;
    count += conn[1].size;
  }
  console.log(`Active clients: ${totalClients}`);
  console.log(`Active connections: ${count}`);
}, 1000);
