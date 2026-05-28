import { NextRequest, NextResponse } from "next/server";

const DEFAULT_STUDY_AUTH_URL = "http://127.0.0.1:8001";

type AuthProxyMethod = "GET" | "POST";

function getFastApiUrl(endpoint: string) {
  const baseUrl = process.env.FASTAPI_AUTH_URL ?? DEFAULT_STUDY_AUTH_URL;
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const normalizedEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;

  return new URL(normalizedEndpoint, normalizedBase);
}

export async function proxyAuthRequest(request: NextRequest, endpoint: string, method: AuthProxyMethod = "POST") {
  const headers = new Headers({
    accept: "application/json"
  });

  const authorization = request.headers.get("authorization");
  const cookie = request.headers.get("cookie");

  if (authorization) {
    headers.set("authorization", authorization);
  }

  if (cookie) {
    headers.set("cookie", cookie);
  }

  const init: RequestInit = {
    cache: "no-store",
    headers,
    method
  };

  if (method !== "GET") {
    const contentType = request.headers.get("content-type") ?? "application/json";
    headers.set("content-type", contentType);
    init.body = await request.text();
  }

  try {
    const fastApiResponse = await fetch(getFastApiUrl(endpoint), init);
    const responseBody = await fastApiResponse.text();
    const responseHeaders = new Headers({
      "content-type": fastApiResponse.headers.get("content-type") ?? "application/json"
    });
    const setCookie = fastApiResponse.headers.get("set-cookie");

    if (setCookie) {
      responseHeaders.set("set-cookie", setCookie);
    }

    return new NextResponse(responseBody || null, {
      headers: responseHeaders,
      status: fastApiResponse.status
    });
  } catch {
    return NextResponse.json(
      {
        detail:
          "Arvexo Study authentication service is unavailable. Start Arvexo-Study backend or set FASTAPI_AUTH_URL to the Study API URL."
      },
      { status: 503 }
    );
  }
}
