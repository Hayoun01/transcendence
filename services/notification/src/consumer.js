import amqp from "amqplib";
import { prisma } from "./db/prisma.js";
import { broadcastToUser } from "./routes/notification.routes.js";
import {
  addFriendshipToCache,
  removeFriendshipFromCache,
} from "./utils/cache.js";

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
          const payload = JSON.parse(msg.content.toString());
          switch (msg.fields.routingKey) {
            case "user.created":
              console.log(msg.fields.routingKey);
              console.log(`[>] Notification service received:`, payload);
              await prisma.notification.create({
                data: payload,
              });
              broadcastToUser(payload);
              break;
            case "friendship.created":
              console.log(payload);
              addFriendshipToCache(payload);
              break;
            case "friendship.removed":
              console.log(payload);
              removeFriendshipFromCache(payload);
              break;
            default:
              console.log(payload);
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
