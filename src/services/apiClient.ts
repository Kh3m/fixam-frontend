import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {
  AuthTokenType,
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setTokens,
} from "./tokenManagement";
import { removeCookie } from "../utils/cookies";

export type FetchResponseType<T> = {
  count: number;
  results: T[];
};

const apiClient = axios.create({
  baseURL: "https://fixam-mono-production.up.railway.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to refresh access token if it's expired
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;
    // Check if the error is due to an expired access token
    if (error.response?.status == 401 && !getRefreshToken()) {
      try {
        const refreshToken = getRefreshToken();

        if (refreshToken) {
          console.log(
            "There is refreshToken, trying to refresh access token",
            error
          );
          // API endpoint to refresh the access token
          const refreshResponse = await apiClient.post<AuthTokenType>(
            "/users/auth/token/refresh/",
            {
              refresh: refreshToken,
            }
          );

          // Access localstorage and get the respective time
          const oldAT = localStorage.getItem("oldAT");
          const oldRT = localStorage.getItem("oldRT");

          if (oldAT && oldRT) {
            setTokens({
              access: refreshResponse.data.access || "",
              refresh: refreshResponse.data.refresh || "",
              access_expiration:
                new Date(
                  new Date(oldAT).getTime() + 24 * 60 * 60 * 1000
                ).toDateString() || "",
              refresh_expiration:
                new Date(
                  new Date(oldRT).getTime() + 24 * 60 * 60 * 1000
                ).toDateString() || "",
            });
          }

          // Update the original request with the new access token
          originalRequest?.headers.setAuthorization(
            `Bearer ${refreshResponse.data.access}`
          );

          // Retry the original request with the new token
          return apiClient(originalRequest!);
        }
      } catch (refreshError) {
        console.error("Error refreshing access token:", refreshError);
        removeTokens(); // Clear tokens if refresh fails
        removeCookie("userId"); // Remove userId from cookie
        localStorage.removeItem("oldAT");
        localStorage.removeItem("oldRT");
        // TODO: Redirect to login or handle the error
      }
    }

    return Promise.reject(error);
  }
);

// Interceptor to include Authorization header for requests that require it
apiClient.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export class APIClient<TData, TVariables = Partial<any>> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // Arrow functions don't have their own this context
  // this will refer to the this context of APIClient instance
  fetchAll = async (config?: AxiosRequestConfig) => {
    return apiClient
      .get<TData[] | FetchResponseType<TData>>(this.endpoint, config)
      .then((res) => res.data);
  };

  fetch = async (id: string) => {
    return apiClient
      .get<TData>(this.endpoint + id + "/")
      .then((res) => res.data);
  };

  fetchOne = async () => {
    return apiClient.get<TData>(this.endpoint).then((res) => res.data);
  };

  post = async (data: TVariables, config?: AxiosRequestConfig) => {
    return apiClient
      .post<TData>(this.endpoint, data, config)
      .then((res) => res.data);
  };
}

export default apiClient;

// const apiClient = axios.create({
//   baseURL: "http://fixamalb-676692095.eu-north-1.elb.amazonaws.com/api/v1",
//   // withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export class APIClient<TData, TVariables = Partial<any>> {
//   private endpoint: string;

//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }

//   // Arrow functions don't have their own this context
//   // this will refer to the this context of APIClient instance
//   fetchAll = async (config?: AxiosRequestConfig) => {
//     return apiClient
//       .get<TData[] | FetchResponseType<TData>>(this.endpoint, config)
//       .then((res) => res.data);
//   };

//   fetch = async (productId: string) => {
//     return apiClient
//       .get<TData>(this.endpoint + productId + "/")
//       .then((res) => res.data);
//   };

//   post = async (data: TVariables, config?: AxiosRequestConfig) => {
//     return apiClient
//       .post<TData>(this.endpoint, data, config)
//       .then((res) => res.data);
//   };

//   // postFormData = (data: FormData, config?: AxiosRequestConfig) => {
//   //   apiClient.post<T>(this.endpoint, data, config).then((res) => res.data);
//   // };
// }

// export default apiClient;
