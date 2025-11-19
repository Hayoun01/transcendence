import crypto from "crypto";
import environ from "./environ.js";

const headerName = "x-hmac-signature";

const signPayload = (payload) => {
  return crypto
    .createHmac("sha256", environ.INTERNAL_HMAC_SECRET)
    .update(payload)
    .digest("hex");
};

export const getInternal = async (url) => {
  const res = await fetch(url, {
    headers: {
      [headerName]: signPayload(""),
    },
  });
  return await res.json();
};
