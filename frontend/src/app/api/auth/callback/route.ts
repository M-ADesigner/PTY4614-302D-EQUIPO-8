import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  exchangeCodeForTokens,
  ID_TOKEN_COOKIE,
  REDIRECT_COOKIE,
  SESSION_COOKIE,
  STATE_COOKIE,
} from "@/lib/auth/keycloak";

const FALLBACK_PATH = "/dashboard/admin";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const expectedState = request.cookies.get(STATE_COOKIE)?.value;
  const redirectPath = request.cookies.get(REDIRECT_COOKIE)?.value;

  const destination =
    redirectPath && redirectPath.startsWith("/") ? redirectPath : FALLBACK_PATH;

  if (!code || !state || !expectedState || state !== expectedState) {
    return NextResponse.redirect(new URL(FALLBACK_PATH, request.url));
  }

  const redirectUri = new URL("/api/auth/callback", request.nextUrl.origin).toString();

  try {
    const tokens = await exchangeCodeForTokens(code, redirectUri);
    const response = NextResponse.redirect(new URL(destination, request.url));

    response.cookies.set(SESSION_COOKIE, tokens.access_token, {
      httpOnly: true,
      sameSite: "lax",
      secure: request.nextUrl.protocol === "https",
      path: "/",
      maxAge: tokens.expires_in,
    });
    if (tokens.id_token) {
      response.cookies.set(ID_TOKEN_COOKIE, tokens.id_token, {
        httpOnly: true,
        sameSite: "lax",
        secure: request.nextUrl.protocol === "https",
        path: "/",
        maxAge: tokens.expires_in,
      });
    }
    response.cookies.delete(STATE_COOKIE);
    response.cookies.delete(REDIRECT_COOKIE);

    return response;
  } catch {
    return NextResponse.redirect(new URL(FALLBACK_PATH, request.url));
  }
}
