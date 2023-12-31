import {} from "../entities/store";
import { APIClient } from "./apiClient";

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

const apiClient = new APIClient<ProductType>("/products/");

export default apiClient;
