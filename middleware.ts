import { NextResponse, type NextRequest } from "next/server";

const LOCALE_COOKIE = "arx_locale";
const ADMIN_SESSION_COOKIE = "arx_admin_session";

function preferredLocale(acceptLanguage: string | null): "ru" | "en" {
  if (!acceptLanguage) return "en";

  const first = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";
  return first.startsWith("ru") ? "ru" : "en";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isRu = pathname === "/ru" || pathname.startsWith("/ru/");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", isRu ? "ru" : "en");

  if (pathname.startsWith("/admin") && pathname !== "/admin/login" && !request.cookies.get(ADMIN_SESSION_COOKIE)) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  if (pathname === "/" && !request.cookies.get(LOCALE_COOKIE)) {
    const locale = preferredLocale(request.headers.get("accept-language"));

    if (locale === "ru") {
      const url = request.nextUrl.clone();
      url.pathname = "/ru";
      const response = NextResponse.redirect(url);
      response.cookies.set(LOCALE_COOKIE, "ru", { maxAge: 60 * 60 * 24 * 365, path: "/" });
      return response;
    }

    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.cookies.set(LOCALE_COOKIE, "en", { maxAge: 60 * 60 * 24 * 365, path: "/" });
    return response;
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next|api|images|.*\\..*).*)"]
};
