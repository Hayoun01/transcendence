import { getInternal } from "./src/utils/internal";
import { redis } from "./src/utils/redis";

async function fetchUsernameFromCache(userId) {
  const key = `notification:username:${userId}`;
  const username = await redis.get(key);
  if (!username) {
    console.warn("Username Not Found! fetching from remote server...");
    const fetchedUser = await getInternal(
      `http://127.0.0.1:3002/internal/users/${userId}`
    );
    await redis.setex(key, 10, fetchedUser.username);
    return fetchedUser.username;
  }
  return username;
}

async function clearCacheBlocked() {}

async function cacheBlocks() {
  const fetchedBlocked = await getInternal(
    `http://127.0.0.1:3002/internal/blocks`
  );
  const time = Date.now();
  const arr = [];
  for (const blocked of fetchedBlocked) {
    console.log(blocked);
    arr.push(
      ...[
        await redis.sadd(
          `notification:blocks:${blocked.blockerId}`,
          blocked.blockedId
        ),
        await redis.sadd(
          `notification:blocked:${blocked.blockedId}`,
          blocked.blockerId
        ),
      ]
    );
  }
  await Promise.all(arr);
  console.log(`All blocks has been cashed! Took ${Date.now() - time}ms`);
}

await cacheBlocks();
await redis.quit();
