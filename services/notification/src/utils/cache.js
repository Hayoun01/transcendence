import { getInternal } from "./internal.js";
import { redis } from "./redis.js";

async function listFriendships() {
  const stream = redis.scanStream({ match: "notification:friends:*" });
  stream.on("data", async (keys) => {
    for (const key of keys) {
      console.log(key);
      console.log(await redis.smembers(key));
    }
  });
}

export async function cacheFriendships() {
  const relationships = await getInternal(
    "http://127.0.0.1:3002/internal/friendships"
  );
  const time = Date.now();

  const arr = [];

  for (const relationship of relationships) {
    arr.push(
      ...[
        redis.sadd(
          `notification:friends:${relationship.requesterId}`,
          relationship.receiverId
        ),
        redis.sadd(
          `notification:friends:${relationship.receiverId}`,
          relationship.requesterId
        ),
      ]
    );
  }

  await Promise.all(arr);

  console.log(`All friendship has been cashed! Took ${Date.now() - time}ms`);
  await listFriendships();
}

export async function removeFriendshipFromCache({ requesterId, receiverId }) {
  await Promise.all([
    redis.srem(`notification:friends:${requesterId}`, receiverId),
    redis.srem(`notification:friends:${receiverId}`, requesterId),
  ]);
  console.log(`removed: ${requesterId} && ${receiverId}`);
  await listFriendships();
}

export async function addFriendshipToCache({ requesterId, receiverId }) {
  await Promise.all([
    redis.sadd(`notification:friends:${requesterId}`, receiverId),
    redis.sadd(`notification:friends:${receiverId}`, requesterId),
  ]);
  console.log(`added: ${requesterId} && ${receiverId}`);
  await listFriendships();
}
