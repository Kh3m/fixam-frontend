import { APIClient } from "./apiClient";
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
  selling_price: number | string;
  favorite?: boolean;
};

export type ProductVariantType = {
  url: string;
  id: string;
  name: string;
  description: string;
};

const productService = new APIClient<ProductType>(`/products/`);

export const productVariantsService = new APIClient<ProductVariantType>(
  `/products/variants/`
);

export default productService;
