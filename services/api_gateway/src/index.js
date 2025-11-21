import Fastify from "fastify";
import proxy from "@fastify/http-proxy";
import { randomUUID } from "crypto";
import { sendError } from "./utils/fastify.js";
import { environ } from "./utils/env.js";
import { pathToRegexp } from "path-to-regexp";
import fastifyCors from "@fastify/cors";
import fastifyMetrics from "fastify-metrics";
import fastifyCookie from "@fastify/cookie";
import helmet from "@fastify/helmet";

const fastify = Fastify({
  genReqId: () => randomUUID(),
  requestIdHeader: "x-request-id",
  logger: {
    transport: {
      targets: [
        { target: "pino-pretty", level: "info" },
        {
          target: "pino/file",
          options: { destination: "../logs/api_gateway.log" },
          level: "info",
        },
      ],
    },
  },
});

fastify.register(fastifyCookie);
fastify.register(helmet);

await fastify.register(fastifyCors, {
  origin: environ.CORS_ORIGIN,
  credentials: true,
  methods: ["GET", "POST", "PUT", "OPTIONS", "PATCH"],
});

const publicRoutes = [
  "/api/v1/auth/login",
  "/api/v1/auth/forget-password",
  "/api/v1/auth/reset-password",
  "/api/v1/auth/resend-verification",
  "/api/v1/auth/register",
  "/api/v1/auth/verify",
  "/api/v1/auth/otp/verify",
  "/api/v1/auth/refresh",
  "/api/v1/auth/oauth/:provider/callback",
  "/api/v1/auth/oauth/:provider",
  "/api/v1/auth/2fa/challenge",
].map((path) => pathToRegexp(path));

fastify.addHook("onRequest", async (request, reply) => {
  request.headers["x-request-id"] = request.id;
  reply.header("x-request-id", request.id);
});

fastify.addHook("onRequest", async (request, reply) => {
  const isInternal = request.url.includes("/internal/");

  if (isInternal) {
    return reply.code(403).send({ error: "Forbidden" });
  }
  const url = request.url.split("?")[0];
  if (publicRoutes.some((regex) => regex.regexp.test(url))) return;
  let headers = request.headers;
  if (request.url.startsWith("/ws/")) {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const token = url.searchParams.get("token");
    console.log("token:", token);
    headers = {
      authorization: `Bearer ${token}`,
    };
  }
  const result = await fetch("http://localhost:3001/api/v1/verify", {
    method: "GET",
    headers,
  });
  if (!result.ok) return sendError(reply, 401, "Unauthorized");
  const response = await result.json();
  if (request.url.startsWith("/ws/")) {
    const url = new URL(request.url, `http://${request.headers.host}`);
    url.searchParams.delete("token");
    url.searchParams.set("userId", response.userId);
    request.raw.url = url.pathname + url.search;
  } else {
    request.headers["x-user-id"] = response.userId;
  }
});

fastify.register(proxy, {
  upstream: "http://localhost:3001",
  prefix: "/api/v1/auth",
  rewritePrefix: "/api/v1",
});

fastify.register(proxy, {
  upstream: "http://localhost:3002",
  prefix: "/api/v1/user-mgmt",
  rewritePrefix: "/",
});

fastify.register(proxy, {
  upstream: "http://localhost:3003",
  prefix: "/api/v1/chat",
  rewritePrefix: "/",
});

fastify.register(proxy, {
  wsUpstream: "ws://localhost:3003",
  prefix: "/ws/chat",
  rewritePrefix: "/",
  websocket: true,
});

fastify.register(proxy, {
  upstream: "http://localhost:3004",
  prefix: "/api/v1/notification",
  rewritePrefix: "/",
});

fastify.get("/health", (request, reply) => {
  return { message: "healthy" };
});

await fastify.register(fastifyMetrics, {
  endpoint: "/api/v1/metrics",
  defaultMetrics: true,
});

fastify.listen({ port: environ.PORT });
