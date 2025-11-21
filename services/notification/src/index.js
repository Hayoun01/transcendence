import Fastify from "fastify";
import indexRoutes from "./routes/index.routes.js";
import helmet from "@fastify/helmet";
import consumer from "./consumer.js";
import { cacheFriendships } from "./utils/cache.js";

const fastify = Fastify({
  genReqId: () => randomUUID(),
  requestIdHeader: "x-request-id",
  logger: {
    transport: {
      targets: [
        { target: "pino-pretty", level: "info" },
        {
          target: "pino/file",
          options: { destination: "../logs/user-mgmt.log" },
          level: "info",
        },
      ],
    },
  },
});

fastify.register(import("@fastify/websocket"));
fastify.register(helmet);
fastify.register(indexRoutes);
fastify.addHook("onReady", () => {
  cacheFriendships().catch((error) => {
    console.log(`Failed to warmup friendship cache: ${error}`);
  });
  consumer().catch((error) => {
    console.log(`Failed to start rabbitmq consumer: ${error}`);
  });
});

await fastify.listen({ port: 3004 });
