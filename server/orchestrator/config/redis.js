if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const Redis = require("ioredis");

const redis = new Redis({
  port: process.env.PORT_REDIS,
  username: "default",
  host: process.env.HOST_REDIS,
  password: process.env.PASS_REDIS,
});

module.exports = redis;
