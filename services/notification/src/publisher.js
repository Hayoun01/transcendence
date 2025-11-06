import amqp from "amqplib";
// import { setTimeout } from "timers/promises";
import { randomUUID } from "crypto";

const exchange = "user.events";

async function publish() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  await channel.assertExchange(exchange, "topic", { durable: true });
  console.log("Channel created!");
  const event = {
    userId: "a8d8eaa0-aaa4-441f-8c27-4adadeb79f41",
    type: "SYSTEM",
    title: "Welcome to transcendence",
    content: "We're happy to have you here, play and enjoy games",
  };
  const routingKey = "user.created";
  //   await setTimeout(20000);
  channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(event)), {
    persistent: true,
  });
  //   await setTimeout(20000);
  await channel.close();
  await connection.close();
}

publish().catch(console.error);
