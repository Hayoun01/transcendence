import { Worker } from "bullmq";
import { closeAll, getQueue, QueueType } from "../services/queue.services.js";
import { redis } from "../db/redis.js";
import otpServices from "../services/otp.services.js";
import { prisma } from "../db/prisma.js";
import mailer from "../utils/mailer.js";
import { postInternal } from "../utils/internalClient.js";
import { fileURLToPath } from "url";

let running_worker;

const eventHandler = {
  UserRegistered: async (payload, userId) => {
    const { username, email, sessionToken, headers } = payload;
    const otp = await otpServices.createOTP(
      prisma,
      userId,
      "email_verification"
    );
    await getQueue(QueueType.EMAIL).add("send-verification", {
      email,
      template: "verifyEmail",
      context: {
        code: otp.token,
        link: `http://localhost:3000/api/v1/auth/otp/verify?sessionToken=${sessionToken}&otp=${otp.token}`,
      },
    });
    const res = await postInternal(
      "http://localhost:3002/internal/profiles",
      {
        userId,
        username,
      },
      headers
    );
    if (!res.ok) throw new Error("Internal server error");
  },
};

const worker = () =>
  new Worker(
    QueueType.REGISTRATION,
    async (job) => {
      console.log("Job (registration) started!");
      const { outboxId, userId, eventType, payload } = job.data;
      try {
        await eventHandler[eventType](payload, userId);
        await prisma.outBox.update({
          where: { id: outboxId },
          data: { status: "processed" },
        });
      } catch (e) {
        await prisma.outBox.update({
          where: { id: outboxId },
          data: { status: "failed" },
        });
        throw e;
      }
      console.log("Job (registration) done");
    },
    {
      connection: redis,
      concurrency: 5,
    }
  );

setInterval(async () => {
  const events = await prisma.outBox.findMany({
    where: {
      status: "pending",
    },
    take: 10,
    orderBy: { createdAt: "asc" },
  });

  for (const event of events) {
    await getQueue(QueueType.REGISTRATION).add("process-registration", {
      outboxId: event.id,
      userId: event.userId,
      eventType: event.eventType,
      payload: event.payload,
    });
    await prisma.outBox.update({
      where: { id: event.id },
      data: { status: "queued" },
    });
  }
}, 1000);

process.on("SIGINT", async () => {
  await running_worker.close();
  await closeAll();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await running_worker.close();
  await closeAll();
  process.exit(0);
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log("Registration worker started!");
  running_worker = worker();
  getQueue(QueueType.EMAIL);
  getQueue(QueueType.REGISTRATION);
}
