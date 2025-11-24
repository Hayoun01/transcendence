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
