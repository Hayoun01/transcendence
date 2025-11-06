import amqp from "amqplib";
import { prisma } from "./db/prisma.js";
import { broadcastToUser } from "./routes/notification.routes.js";

const exchange = "user.events";
const queue = "notifications.queue";

async function consumer() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  await channel.assertExchange(exchange, "topic", { durable: true });
  await channel.assertQueue(queue, { durable: true });
  await channel.bindQueue(queue, exchange, "user.created");

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
          const content = JSON.parse(msg.content.toString());
          console.log(`[>] Notification service received:`, content);
          await prisma.notification.create({
            data: content,
          });
          broadcastToUser(content);
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
