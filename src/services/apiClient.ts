import axios, { AxiosRequestConfig } from "axios";

const dummyApiClient = axios.create({
  baseURL: "https://cartservice-production.up.railway.app/api/v1",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: Remove this dummy stuffs
export class DummyAPIClient<TData, TVariables = Partial<any>> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // Arrow functions don't have their own this context
  // this will refer to the this context of APIClient instance
  fetchAll = async (config?: AxiosRequestConfig) => {
    return dummyApiClient
      .get<TData[] | FetchResponseType<TData>>(this.endpoint, config)
      .then((res) => res.data);
  };

  fetch = async (productId: string) => {
    return dummyApiClient
      .get<TData>(this.endpoint + productId + "/")
      .then((res) => res.data);
  };

  fetchOne = async () => {
    return dummyApiClient.get<TData>(this.endpoint).then((res) => res.data);
  };

  post = async (data: TVariables, config?: AxiosRequestConfig) => {
    return dummyApiClient
      .post<TData>(this.endpoint, data, config)
      .then((res) => res.data);
  };
}

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

  fetch = async (productId: string) => {
    return apiClient
      .get<TData>(this.endpoint + productId + "/")
      .then((res) => res.data);
  };

  post = async (data: TVariables, config?: AxiosRequestConfig) => {
    return apiClient
      .post<TData>(this.endpoint, data, config)
      .then((res) => res.data);
  };

  // postFormData = (data: FormData, config?: AxiosRequestConfig) => {
  //   apiClient.post<T>(this.endpoint, data, config).then((res) => res.data);
  // };
}

export default apiClient;
