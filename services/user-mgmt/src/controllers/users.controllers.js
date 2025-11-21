import path from "path";
import fs from "fs";
import mime from "mime-types";
import { generateFilename, saveFile } from "../utils/file.js";
import sharp from "sharp";
import { prisma } from "../db/prisma.js";
import { sendError, sendSuccess } from "../utils/fastify.js";
import { updateUserSchema } from "../schemas/users.schemas.js";
import errorMessages from "../schemas/errorMessages.js";

/**
 *
 * @type {import('fastify').RouteHandlerMethod}
 */
const updateMyProfile = async (request, reply) => {
  const userId = request.headers["x-user-id"];
  if (!request.body || Object.keys(request.body).length == 0)
    return reply.code(400).send({ error: "Bad Request" });
  const data = request.body;
  await prisma.userProfile.update({
    where: { id: userId },
    data,
  });
  return sendSuccess(reply, 200, "USER_PROFILE_UPDATE_SUCCESS");
};

/**
 *
 * @type {import('fastify').RouteHandlerMethod}
 */
const showMyProfile = async (request, reply) => {
  const userId = request.headers["x-user-id"];
  return prisma.userProfile.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      username: true,
      language: true,
      bio: true,
    },
  });
};

/**
 *
 * @type {import('fastify').RouteHandlerMethod}
 */
const updateMyAvatar = async (request, reply) => {
  try {
    const userId = request.headers["x-user-id"];
    const data = await request.file();
    const allowedTypes = ["image/png", "image/jpeg"];
    if (!allowedTypes.includes(data.mimetype))
      return reply
        .code(400)
        .send({ error: "Invalid file type. Only JPEG/PNG allowed." });
    const extension = path.extname(data.filename);
    const filename = generateFilename(extension);
    const dirPath = path.join("uploads", "avatars", generateFilename());
    const filePath = path.join(dirPath, filename);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    await saveFile(data.file, filePath);
    const { width, height } = await sharp(filePath).metadata();
    const ratio = width / height;
    const isSquare = Math.abs(ratio - 1) < 0.01;
    if (!isSquare) return sendError(reply, 400, "NOT_SQUARE");
    const result = await prisma.$transaction(async (tx) => {
      const old = await tx.userProfile.findUnique({
        where: {
          id: userId,
        },
        select: {
          avatarPath: true,
        },
      });
      await tx.userProfile.update({
        where: {
          id: userId,
        },
        data: {
          avatarPath: dirPath,
          avatarName: data.filename,
        },
      });
      return old;
    });
    if (result?.avatarPath) {
      fs.rmSync(result.avatarPath, { recursive: true, force: true });
    }
    const sizes = [
      { name: "small", width: 64, height: 64 },
      { name: "medium", width: 128, height: 128 },
      { name: "large", width: 512, height: 512 },
    ];
    await Promise.all(
      sizes.map((size) => {
        const ext = path.extname(data.filename);
        const outputFile = path.join(dirPath, `${size.name}${ext}`);
        return sharp(filePath)
          .resize(size.with, size.height)
          .toFile(outputFile);
      })
    );
    fs.unlinkSync(filePath);
    reply.code(201).send();
    return;
  } catch (e) {
    reply.code(400);
    console.log(e);
    return;
  }
};

/**
 *
 * @type {import('fastify').RouteHandlerMethod}
 */
const showMyAvatar = async (request, reply) => {
  const userId = request.headers["x-user-id"];
  const size = request.query.size?.toLowerCase() || "large";
  const allowedSizes = ["small", "medium", "large"];
  if (!allowedSizes.includes(size)) {
    return sendError(
      reply,
      400,
      `Invalid size, valid ones are (${allowedSizes.join(" or ")})`
    );
  }
  try {
    const result = await prisma.userProfile.findUnique({
      where: {
        id: userId,
      },
      select: {
        avatarPath: true,
        avatarName: true,
      },
    });
    if (!result.avatarPath)
      return reply.code(404).send({ error: "Avatar not found." });
    const ext = path.extname(result.avatarName);
    const filePath = path.join(result.avatarPath, `${size}${ext}`);
    if (!fs.existsSync(filePath))
      return reply.code(404).send({ error: "Avatar not found." });
    const fileStream = fs.createReadStream(filePath);
    return reply
      .header("Content-Disposition", `inline; filename="${result.avatarName}"`)
      .type(mime.contentType(ext))
      .send(fileStream);
  } catch (e) {
    reply.code(500);
    console.log(e);
    return;
  }
};

/**
 *
 * @type {import('fastify').RouteHandlerMethod}
 */
const showUserAvatar = async (request, reply) => {
  const { username } = request.params;
  const size = request.query.size?.toLowerCase() || "large";
  const allowedSizes = ["small", "medium", "large"];
  if (!allowedSizes.includes(size)) {
    return sendError(
      reply,
      400,
      `Invalid size, valid ones are (${allowedSizes.join(" or ")})`
    );
  }
  try {
    const result = await prisma.userProfile.findUnique({
      where: {
        username,
      },
      select: {
        avatarPath: true,
        avatarName: true,
      },
    });
    if (!result) return sendError(reply, 404, "USER_NOT_FOUND");
    if (!result.avatarPath)
      return reply.code(404).send({ error: "Avatar not found." });
    const ext = path.extname(result.avatarName);
    const filePath = path.join(result.avatarPath, `${size}${ext}`);
    if (!fs.existsSync(filePath))
      return reply.code(404).send({ error: "Avatar not found." });
    const fileStream = fs.createReadStream(filePath);
    return reply
      .header("Content-Disposition", `inline; filename="${result.avatarName}"`)
      .type(mime.contentType(ext))
      .send(fileStream);
  } catch (e) {
    reply.code(500);
    console.log(e);
    return;
  }
};

export default {
  updateMyProfile,
  showMyProfile,
  updateMyAvatar,
  showMyAvatar,
  showUserAvatar,
};
