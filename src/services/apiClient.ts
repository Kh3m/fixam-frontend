import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://fixamalb-676692095.eu-north-1.elb.amazonaws.com/api/v1",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // Arrow functions don't have their own this context
  // this will refer to the this context of APIClient instance
  fetchAll = () => {
    return apiClient.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (data: T | FormData, config?: AxiosRequestConfig) => {
    apiClient.post<T>(this.endpoint, data, config).then((res) => res.data);
  };

  // postFormData = (data: FormData, config?: AxiosRequestConfig) => {
  //   apiClient.post<T>(this.endpoint, data, config).then((res) => res.data);
  // };
}

export default apiClient;
