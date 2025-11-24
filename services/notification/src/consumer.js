import amqp from "amqplib";
import { prisma } from "./db/prisma.js";
import { broadcastToUser } from "./routes/notification.routes.js";
import {
  addFriendshipToCache,
  fetchUsernameFromCache,
  removeFriendshipFromCache,
} from "./utils/cache.js";

const FORMATTERS = async (p) => {
  const username = await fetchUsernameFromCache(p.fromUser);
  return {
    FRIEND_ACCEPTED: () => ({
      type: "FRIEND_ACCEPTED",
      title: "A friend accepted your friend request",
      content: `@${username} accepted your friend request.`,
      fromUser: {
        id: p.fromUser,
        username,
      },
    }),
    FRIEND_REQUEST: () => ({
      type: "FRIEND_REQUEST",
      title: "You have a new friend request",
      content: `@${username} sent you a friend request.`,
      fromUser: {
        id: p.fromUser,
        username,
      },
    }),
    NEW_MESSAGE: () => ({
      type: "NEW_MESSAGE",
      title: "You have a new message",
      content: `@${username} sent you a message.`,
      fromUser: {
        id: p.fromUser,
        username,
      },
    }),
  };
};

const exchange = "user.events";
const queue = "notifications.queue";

async function consumer() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  await channel.assertExchange(exchange, "topic", { durable: true });
  await channel.assertQueue(queue, { durable: true });
  await channel.bindQueue(queue, exchange, "user.*");
  await channel.bindQueue(queue, exchange, "friendship.*");
  await channel.bindQueue(queue, exchange, "message.*");

  //   try {
  //     await channel.prefetch(1);
  //   } catch (err) {
  //     console.warn("[!] channel.prefetch failed:", err);
  //   }

  channel.consume(
    queue,
    async (msg) => {
      if (msg) {
        try {
          const parsedMsg = JSON.parse(msg.content.toString());
          const formatter = await FORMATTERS(parsedMsg);
          let formatted;
          console.log(parsedMsg);
          switch (msg.fields.routingKey) {
            case "user.created":
              await prisma.notification.create({
                data: {
                  type: "SYSTEM",
                  title: "Welcome to transcendence",
                  content: "We're happy to have you here, play and enjoy games",
                  userId: parsedMsg.userId,
                },
              });
              break;
            case "friendship.request":
              formatted = formatter["FRIEND_REQUEST"]();
              await prisma.notification.create({
                data: {
                  type: formatted.type,
                  title: formatted.title,
                  content: formatted.content,
                  userId: parsedMsg.userId,
                },
              });
              broadcastToUser(parsedMsg.userId, formatted);
              break;
            case "friendship.created":
              formatted = formatter["FRIEND_ACCEPTED"]();
              await prisma.notification.create({
                data: {
                  type: formatted.type,
                  title: formatted.title,
                  content: formatted.content,
                  userId: parsedMsg.userId,
                },
              });
              broadcastToUser(parsedMsg.userId, formatted);
              await addFriendshipToCache(parsedMsg);
              break;
            case "friendship.removed":
              await removeFriendshipFromCache(parsedMsg);
              break;
            case "message.new":
              formatted = formatter["NEW_MESSAGE"]();
              await prisma.notification.create({
                data: {
                  type: formatted.type,
                  title: formatted.title,
                  content: formatted.content,
                  userId: parsedMsg.userId,
                },
              });
              broadcastToUser(parsedMsg.userId, formatted);
              break;
            default:
              console.log(parsedMsg);
          }
        } catch (err) {
          console.error("[!] Failed to parse message content:", err);
        }
        channel.ack(msg);
      }
    },
    { noAck: false }
  );

  console.log(
    `[*] Waiting for messages in queue '${queue}'. To exit press CTRL+C`
  );

  const closeGracefully = async () => {
    console.log("[*] Closing AMQP channel and connection...");
    try {
      await channel.close();
    } catch (err) {
      console.warn("[!] Error closing channel:", err);
    }
    try {
      await connection.close();
    } catch (err) {
      console.warn("[!] Error closing connection:", err);
    }
    process.exit(0);
  };

  process.once("SIGINT", closeGracefully);
  process.once("SIGTERM", closeGracefully);
}

export default consumer;
