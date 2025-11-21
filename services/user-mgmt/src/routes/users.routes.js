import zodToJsonSchema from "zod-to-json-schema";
import usersControllers from "../controllers/users.controllers.js";
import { updateUserSchema } from "../schemas/users.schemas.js";
import { bodyValidator } from "../utils/validators.js";
import { sendError } from "../utils/fastify.js";
import { prisma } from "../db/prisma.js";
import { validate as isValidUUID } from "uuid";

// const bodyValidator = (sc)

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export default async (fastify) => {
  fastify.get(
    "/me",
    {
      schema: {
        tags: ["User"],
        summary: "Show my profile",
        description: "Show the authenticated user's profile information.",
        security: [{ bearerAuth: [] }],
        // response: {
        //   200: {
        //     description: "Show user profile",
        //     type: "object",
        //     properties: {
        //       username: { type: "string", example: "oxo4real" },
        //       bio: { type: "string", example: "Hello I'm from morocco!" },
        //     },
        //   },
        //   401: {
        //     description: "Unauthorized",
        //     type: "object",
        //     properties: {
        //       success: { type: "boolean", example: false },
        //       error: { type: "string", example: "Unauthorized" },
        //     },
        //   },
        // },
      },
    },
    usersControllers.showMyProfile
  );
  fastify.put("/me/avatar", usersControllers.updateMyAvatar);
  fastify.get(
    "/me/avatar",
    {
      schema: {
        tags: ["User"],
        summary: "Show my avatar profile",
        description: "Show the authenticated user's profile avatar.",
        security: [{ bearerAuth: [] }],
        response: {
          200: {
            description: "User's avatar",
            type: "string",
            format: "binary",
            headers: {
              "Content-Type": {
                type: "string",
                enum: ["image/png", "image/jpeg"],
              },
            },
          },
          401: {
            description: "Unauthorized",
            type: "object",
            properties: {
              success: { type: "boolean", example: false },
              error: { type: "string", example: "Unauthorized" },
            },
          },
        },
      },
    },
    usersControllers.showMyAvatar
  );
  fastify.get(
    "/:username/avatar",
    {
      schema: {
        tags: ["User"],
        summary: "Show my avatar profile",
        description: "Show the authenticated user's profile avatar.",
        security: [{ bearerAuth: [] }],
        response: {
          200: {
            description: "User's avatar",
            type: "string",
            format: "binary",
            headers: {
              "Content-Type": {
                type: "string",
                enum: ["image/png", "image/jpeg"],
              },
            },
          },
          401: {
            description: "Unauthorized",
            type: "object",
            properties: {
              success: { type: "boolean", example: false },
              error: { type: "string", example: "Unauthorized" },
            },
          },
        },
      },
    },
    usersControllers.showUserAvatar
  );
  fastify.patch(
    "/me",
    {
      preValidation: [bodyValidator(updateUserSchema)],
      schema: {
        tags: ["User"],
        summary: "Update my profile",
        description: "Update the authenticated user's profile information.",
        body: zodToJsonSchema(updateUserSchema, { target: "openApi3" }),
        security: [{ bearerAuth: [] }],
        response: {
          200: {
            description: "Profile updated successfully",
            type: "object",
            properties: {
              success: { type: "boolean", example: true },
              code: { type: "string", example: "USER_PROFILE_UPDATE_SUCCESS" },
              message: {
                type: "string",
                example: "User profile updated successfully",
              },
            },
          },
          400: {
            description: "Invalid input",
            type: "object",
            properties: {
              success: { type: "boolean", example: false },
              code: { type: "string", example: "BAD_REQUEST" },
              error: { type: "string", example: "Bad request" },
              errors: {
                type: "array",
                example: [
                  {
                    path: "bio",
                    code: "BIO_STRING",
                    message: "Bio must be a string",
                  },
                ],
              },
            },
          },
          401: {
            description: "Unauthorized",
            type: "object",
            properties: {
              success: { type: "boolean", example: false },
              error: { type: "string", example: "Unauthorized" },
            },
          },
        },
      },
    },
    usersControllers.updateMyProfile
  );
  fastify.get("/users", async (request, reply) => {
    const { q } = request.query;
    const currentUser = request.headers["x-user-id"];
    console.log(currentUser);
    //! change error code
    if (!q) return sendError(reply, 400, "query required!");
    const users = await prisma.userProfile.findMany({
      where: {
        username: {
          contains: q,
        },
        id: { not: currentUser },
        BlockedUsers: {
          none: { blockedId: currentUser },
        },
      },
    });
    return users;
  });

  fastify.get("/users/@:username", async (request, reply) => {
    const currentUser = request.headers["x-user-id"];
    const { username } = request.params;

    const user = await prisma.userProfile.findUnique({
      where: {
        username,
        BlockedUsers: { none: { blockedId: currentUser } },
      },
      select: {
        id: true,
        username: true,
        bio: true,
      },
    });
    if (!user) return sendError(reply, 404, "USER_NOT_FOUND");
    return user;
  });

  fastify.get("/users/:userId", async (request, reply) => {
    const currentUser = request.headers["x-user-id"];
    const { userId } = request.params;
    const user = await prisma.userProfile.findUnique({
      where: {
        id: userId,
        BlockedUsers: { none: { blockedId: currentUser } },
      },
    });
    if (!user) return sendError(reply, 404, "USER_NOT_FOUND");
    return user;
  });
};
