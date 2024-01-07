import { DummyAPIClient } from "./apiClient";
import { productBaseURL } from "./baseURLs";

export type CategoryType = {
  id: string;
  subcategories: string[];
  name: string;
  description: string;
  parent: string | null;
};

const apiClient = new DummyAPIClient<CategoryType>(
  `${productBaseURL}/products/categories/`
);

const categoryService = apiClient;

export const subCategoryService = (categoryId?: string) => {
  console.log(
    `${productBaseURL}/products/categories/${categoryId}/subcategories/`
  );
  return new DummyAPIClient<CategoryType>(
    `/products/categories/${categoryId}/subcategories/`
  );
};

export default categoryService;
