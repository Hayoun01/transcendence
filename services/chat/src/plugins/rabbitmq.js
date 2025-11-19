import fp from "fastify-plugin";
import amqp from "amqplib";

export default fp(async (fastify) => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  fastify.decorate("rabbit", { connection, channel });
  fastify.addHook("onClose", async () => {
    await channel.close();
    await connection.close();
  });
});
