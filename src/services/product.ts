import { DummyAPIClient } from "./apiClient";
import { productBaseURL } from "./baseURLs";

export type ProductType = {
  id: string;
  images: string[];
  name: string;
  description: string;
  price: number | string;
  type: string;
  category: string;
  category_name: string;
  favorite?: boolean;
};

const apiClient = new DummyAPIClient<ProductType>(
  `${productBaseURL}/products/`
);

export default apiClient;
