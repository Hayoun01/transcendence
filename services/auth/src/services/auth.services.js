import { prisma } from "../db/prisma.js";
import { randomUUID } from "crypto";

const isUserExists = async (email) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  return user;
};

const newUserSession = async (fastify, request, userId) => {
  const accessToken = fastify.jwt.sign({ userId }, { expiresIn: "24h" });
  const refreshToken = randomUUID();
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);
  await prisma.session.create({
    data: {
      userId,
      token: accessToken,
      refreshToken,
      ipAddress: request.ip,
      userAgent: request.headers["user-agent"],
      expiresAt,
    },
  });
  return { accessToken, refreshToken };
};

export const authService = {
  newUserSession,
  isUserExists,
};
