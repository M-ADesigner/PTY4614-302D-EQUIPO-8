import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  buildAuthorizationUrl,
  REDIRECT_COOKIE,
  SESSION_COOKIE,
  STATE_COOKIE,
  verifyAccessToken,
} from "@/lib/auth/keycloak";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;

  if (token && (await verifyAccessToken(token))) {
    return NextResponse.next();
  }

  const state = randomUUID();
  const redirectUri = new URL("/api/auth/callback", request.nextUrl.origin);
  const authUrl = buildAuthorizationUrl(redirectUri.toString(), state);

  const response = NextResponse.redirect(authUrl);
  const cookieOptions = {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: request.nextUrl.protocol === "https",
    path: "/",
    maxAge: 300,
  };
  response.cookies.set(STATE_COOKIE, state, cookieOptions);
  response.cookies.set(REDIRECT_COOKIE, request.nextUrl.pathname, cookieOptions);
  return response;
}

export const config = {
  matcher: ["/dashboard/admin", "/dashboard/admin/:path*"],
};
