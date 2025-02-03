const redis = require("redis");
const client = redis.createClient();

client.connect().catch(console.error);

const cacheMiddleware = async (req, res, next) => {
  const key = req.originalUrl;
  const cachedData = await client.get(key);

  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  }

  res.sendResponse = res.json;
  res.json = async (body) => {
    await client.setEx(key, 3600, JSON.stringify(body)); // Cache for 1 hour
    res.sendResponse(body);
  };

  next();
};

module.exports = cacheMiddleware;
