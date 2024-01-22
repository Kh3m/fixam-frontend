import { getCookie, removeCookie, setCookie } from "../utils/cookies";

export type AuthTokenType = {
  access: string;
  refresh: string;
  access_expiration: string;
  refresh_expiration: string;
};

export const getToken = (tokenName: string): string | null =>
  getCookie(tokenName);

export const setToken = (
  tokenName: string,
  tokenValue: string,
  expiration?: number
): void => {
  // setCookie(tokenName, tokenValue, expiration as number);
  setCookie(tokenName, tokenValue, expiration as number);
};

export const removeToken = (tokenName: string): void => {
  removeCookie(tokenName);
};

export const setTokens = (tokens: AuthTokenType): void => {
  setToken(
    "accessToken",
    tokens.access,
    getTokenExpirationTime(tokens.access_expiration)
  );
  setToken(
    "refreshToken",
    tokens.refresh,
    getTokenExpirationTime(tokens.refresh_expiration)
  );
};

// In Milliseconds
export const getTokenExpirationTime = (expirationTime: string) => {
  return new Date(expirationTime || 0).getTime();
};

export const isAccessTokenValid = () => {
  return !!getCookie("accessToken"); // !!"accessToken" convert to it's boolean equivalent -> true
};

export const isRefreshTokenValid = () => {
  return !!getCookie("refreshToken"); // !!"refreshToken" convert to it's boolean equivalent -> true
};

export const removeTokens = (): void => {
  removeToken("accessToken");
  removeToken("refreshToken");
};

export const getAccessToken = (): string | null => getToken("accessToken");
export const getRefreshToken = (): string | null => getToken("refreshToken");
