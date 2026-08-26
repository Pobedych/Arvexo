import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, checkPassword, createSessionToken, sessionCookieMaxAge } from "@/lib/admin-auth";

export async function POST(request: Request) {
  let password: string;
  try {
    const body = await request.json();
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Admin access is not configured" }, { status: 503 });
  }

  if (!password || !checkPassword(password)) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: sessionCookieMaxAge
  });

  return NextResponse.json({ ok: true });
}
