import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  buildEndSessionUrl,
  ID_TOKEN_COOKIE,
  SESSION_COOKIE,
} from "@/lib/auth/keycloak";

export async function GET(request: NextRequest) {
  const idToken = request.cookies.get(ID_TOKEN_COOKIE)?.value;
  // Reutiliza la misma URI ya registrada en Keycloak como "Valid post
  // logout redirect URI"; el callback ya sabe volver a /dashboard/admin
  // cuando no viene un ?code (ver app/api/auth/callback/route.ts).
  const postLogoutRedirectUri = new URL(
    "/api/auth/callback",
    request.nextUrl.origin,
  ).toString();

  const response = idToken
    ? NextResponse.redirect(
        buildEndSessionUrl(idToken, postLogoutRedirectUri),
      )
    : NextResponse.redirect(new URL("/dashboard/admin", request.url));

  response.cookies.delete(SESSION_COOKIE);
  response.cookies.delete(ID_TOKEN_COOKIE);

  return response;
}
