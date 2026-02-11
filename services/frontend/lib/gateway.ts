const rawGatewayUrl =
  process.env.NEXT_PUBLIC_GATEWAY_URL ||
  process.env.GATEWAY_URL ||
  "http://localhost:3000";

export const GATEWAY_URL = rawGatewayUrl.replace(/\/+$/, "");

export const getGatewayUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${GATEWAY_URL}${normalizedPath}`;
};

export const getWsGatewayUrl = (path: string) => {
  const wsBase = GATEWAY_URL.replace(/^http:\/\//, "ws://").replace(/^https:\/\//, "wss://");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${wsBase}${normalizedPath}`;
};
