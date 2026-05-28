import { NextRequest } from "next/server";
import { proxyAuthRequest } from "@/lib/authProxy";

export async function POST(request: NextRequest) {
  return proxyAuthRequest(request, "/auth/register", "POST");
}
