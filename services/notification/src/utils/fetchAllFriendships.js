import { getInternal } from "./internal.js";
import { redis } from "./redis.js";

export async function cacheFriendships() {
  const time = Date.now();
  const relationships = await getInternal(
    "http://127.0.0.1:3002/internal/friendships"
  );

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
}
