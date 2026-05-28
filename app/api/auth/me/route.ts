import { NextRequest } from "next/server";
import { proxyAuthRequest } from "@/lib/authProxy";

export async function GET(request: NextRequest) {
  return proxyAuthRequest(request, "/auth/me", "GET");
}
