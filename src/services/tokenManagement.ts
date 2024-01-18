import axios, { AxiosError } from "axios";
import { getCookie, setCookie, removeCookie } from "../utils/cookies";

interface AuthTokens {
  access_token: string;
  refresh_token: string;
  access_expiration: string;
  refresh_expiration: string;
}

const apiClientWithAuth = axios.create({
  baseURL: "https://fixam-mono-production.up.railway.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getToken = (tokenName: string): string | null =>
  getCookie(tokenName);

export const setToken = (
  tokenName: string,
  tokenValue: string,
  expiration?: string | number
): void => {
  setCookie(tokenName, tokenValue, expiration as number);
};

export const removeToken = (tokenName: string): void => {
  removeCookie(tokenName);
};

export const setTokens = (tokens: AuthTokens): void => {
  setToken("accessToken", tokens.access_token, tokens.access_expiration);
  setToken("refreshToken", tokens.refresh_token, tokens.refresh_expiration);

  // Assuming tokens returned from the refresh endpoint include expiration information
  if (tokens.access_expiration && tokens.refresh_expiration) {
    setToken("accessExpiration", tokens.access_expiration);
    setToken("refreshExpiration", tokens.refresh_expiration);
  }
};

export const removeTokens = (): void => {
  removeToken("accessToken");
  removeToken("refreshToken");
  removeToken("accessExpiration");
  removeToken("refreshExpiration");
};

export const getAccessToken = (): string | null => getToken("accessToken");
export const getRefreshToken = (): string | null => getToken("refreshToken");
export const getAccessExpiration = (): string | null =>
  getToken("accessExpiration");
export const getRefreshExpiration = (): string | null =>
  getToken("refreshExpiration");

// Interceptor to refresh access token if it's expired
apiClientWithAuth.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired access token
    if (error.response?.status === 401) {
      try {
        const refreshToken = getRefreshToken();

        // API endpoint to refresh the access token
        const refreshResponse = await axios.post<AuthTokens>(
          "/users/auth/token/refresh/",
          {
            refresh: refreshToken,
          }
        );

        setTokens(refreshResponse.data);

        // Update the original request with the new access token
        originalRequest?.headers.setAuthorization(
          `Bearer ${refreshResponse.data.access_token}`
        );

        // Retry the original request with the new token
        return axios(originalRequest!);
      } catch (refreshError) {
        console.error("Error refreshing access token:", refreshError);
        removeTokens(); // Clear tokens if refresh fails
        // TODO: Redirect to login or handle the error
      }
    }

    return Promise.reject(error);
  }
);

// Interceptor to include Authorization header for requests that require it
apiClientWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default apiClientWithAuth;
