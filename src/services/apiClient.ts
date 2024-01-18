import { AxiosRequestConfig } from "axios";
import apiClientWithAuth from "./tokenManagement";

export type FetchResponseType<T> = {
  count: number;
  results: T[];
};

const apiClient = apiClientWithAuth;

// axios.create({
//   // withCredentials: true,
//   baseURL: "https://fixam-mono-production.up.railway.app/api/v1",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export class APIClient<TData, TVariables = Partial<any>> {
  private endpoint: string;
  private authRequired: boolean;

  constructor(endpoint: string, authRequired: boolean = true) {
    this.endpoint = endpoint;
    this.authRequired = authRequired;
  }

  private getApiClient() {
    return this.authRequired ? apiClientWithAuth : apiClient;
  }

  // Arrow functions don't have their own this context
  // this will refer to the this context of APIClient instance
  fetchAll = async (config?: AxiosRequestConfig) => {
    return this.getApiClient()
      .get<TData[] | FetchResponseType<TData>>(this.endpoint, config)
      .then((res) => res.data);
  };

  fetch = async (id: string) => {
    return this.getApiClient()
      .get<TData>(this.endpoint + id + "/")
      .then((res) => res.data);
  };

  fetchOne = async () => {
    return this.getApiClient()
      .get<TData>(this.endpoint)
      .then((res) => res.data);
  };

  post = async (data: TVariables, config?: AxiosRequestConfig) => {
    return this.getApiClient()
      .post<TData>(this.endpoint, data, config)
      .then((res) => res.data);
  };
}

export default apiClient;
export { apiClientWithAuth };

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
