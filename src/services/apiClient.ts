import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://fixamalb-676692095.eu-north-1.elb.amazonaws.com/api/v1",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export type FetchResponseType<T> = {
  count: number;
  results: T[];
};

export class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  setEndpoint = (endpoint: string) => {
    this.endpoint = endpoint;
  };

  // Arrow functions don't have their own this context
  // this will refer to the this context of APIClient instance
  fetchAll = async (config?: AxiosRequestConfig) => {
    return apiClient
      .get<T[] | FetchResponseType<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  post = async (data: T | FormData, config?: AxiosRequestConfig) => {
    return apiClient
      .post<T>(this.endpoint, data, config)
      .then((res) => res.data);
  };

  // postFormData = (data: FormData, config?: AxiosRequestConfig) => {
  //   apiClient.post<T>(this.endpoint, data, config).then((res) => res.data);
  // };
}

export default apiClient;
