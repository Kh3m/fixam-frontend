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

export const productsFromCategoryService = (categoryId: string) =>
  new APIClient<ProductType>(
    `/products/categories/${categoryId}/products/?levels_deep=all`
  );

export const randomProductsFromCategoryService = (categoryId: string) =>
  new APIClient<ProductType>(
    `/products/categories/${categoryId}/random_products/`
  );

export default productService;
