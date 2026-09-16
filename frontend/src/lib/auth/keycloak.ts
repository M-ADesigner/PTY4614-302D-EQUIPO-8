import { createRemoteJWKSet, jwtVerify } from "jose";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta la variable de entorno ${name}`);
  }
  return value;
}

const AUTH_SERVER_URL = requireEnv("KEYCLOAK_AUTH_SERVER_URL");
const REALM = requireEnv("KEYCLOAK_REALM");
const CLIENT_ID = requireEnv("KEYCLOAK_CLIENT_ID");
const CLIENT_SECRET = requireEnv("KEYCLOAK_CLIENT_SECRET");

// Trailing slash matters: URL resolves a leading-slash path against the
// origin, discarding the base's own path, so REALM_URL must end in "/" and
// every relative path below must be written without a leading "/".
const REALM_URL = new URL(`realms/${REALM}/`, AUTH_SERVER_URL);
const ISSUER = REALM_URL.toString().replace(/\/$/, "");

let jwks: ReturnType<typeof createRemoteJWKSet> | null = null;
function getJwks() {
  if (!jwks) {
    jwks = createRemoteJWKSet(
      new URL("protocol/openid-connect/certs", REALM_URL),
    );
  }
  return jwks;
}

export const SESSION_COOKIE = "kc_session";
export const ID_TOKEN_COOKIE = "kc_id_token";
export const STATE_COOKIE = "kc_state";
export const REDIRECT_COOKIE = "kc_redirect";

export function buildAuthorizationUrl(redirectUri: string, state: string) {
  const url = new URL("protocol/openid-connect/auth", REALM_URL);
  url.searchParams.set("client_id", CLIENT_ID);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "openid");
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("state", state);
  return url;
}

export function buildEndSessionUrl(
  idTokenHint: string,
  postLogoutRedirectUri: string,
) {
  const url = new URL("protocol/openid-connect/logout", REALM_URL);
  url.searchParams.set("client_id", CLIENT_ID);
  url.searchParams.set("id_token_hint", idTokenHint);
  url.searchParams.set("post_logout_redirect_uri", postLogoutRedirectUri);
  return url;
}

type TokenResponse = {
  access_token: string;
  expires_in: number;
  id_token?: string;
  refresh_token?: string;
};

export async function exchangeCodeForTokens(
  code: string,
  redirectUri: string,
): Promise<TokenResponse> {
  const tokenUrl = new URL("protocol/openid-connect/token", REALM_URL);
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    redirect_uri: redirectUri,
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    throw new Error(
      `No se pudo canjear el código de Keycloak por un token (HTTP ${response.status})`,
    );
  }

  return response.json();
}

export async function verifyAccessToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getJwks(), { issuer: ISSUER });
    return true;
  } catch {
    return false;
  }
}
