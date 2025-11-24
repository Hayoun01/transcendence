import crypto from "crypto";
import { environ } from "./env.js";

const secret = environ.INTERNAL_HMAC_SECRET;
const headerName = "x-hmac-signature";

const signPayload = (payload) => {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
};

export const postInternal = async (url, data = {}, headers = {}) => {
  const payload = JSON.stringify(data);
  const signature = signPayload(payload);

  return fetch(url, {
    method: "POST",
    headers: {
      ...headers,
      [headerName]: signature,
      "content-type": "application/json",
    },
    body: payload,
  });
};
