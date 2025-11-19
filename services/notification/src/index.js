import Fastify from "fastify";
import indexRoutes from "./routes/index.routes.js";
import helmet from "@fastify/helmet";
import consumer from "./consumer.js";
import { cacheFriendships } from "./utils/fetchAllFriendships.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(import("@fastify/websocket"));
fastify.register(helmet);
fastify.register(indexRoutes);
fastify.addHook("onReady", async () => {
  await cacheFriendships();
  await consumer();
});

await fastify.listen({ port: 3004 });
