import { createClient } from "redis";
require('dotenv').config();

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST, 
    port: process.env.PORT, 
  },
});

redisClient.on("error", (err) => console.error("Redis Error:", err));

(async () => {
  await redisClient.connect();
  console.log("🔥 Redis Connected");
})();

export default redisClient;
