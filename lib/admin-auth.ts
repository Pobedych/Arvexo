import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "arx_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 14;

function getSecret() {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) throw new Error("ADMIN_PASSWORD is not configured");
  return secret;
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createSessionToken(): string {
  const expires = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = `${expires}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

  const expires = Number(payload);
  return Number.isFinite(expires) && Date.now() < expires;
}

export function checkPassword(candidate: string): boolean {
  const secret = getSecret();
  const a = Buffer.from(candidate);
  const b = Buffer.from(secret);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export const sessionCookieMaxAge = SESSION_MAX_AGE_SECONDS;
