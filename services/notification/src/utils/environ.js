import { config } from "dotenv";

config({
  path: ["./env", "../.env.shared"],
});

export default {
  INTERNAL_HMAC_SECRET: process.env.INTERNAL_HMAC_SECRET,
};
