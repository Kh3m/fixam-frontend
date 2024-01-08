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
  return new DummyAPIClient<CategoryType>(
    `${productBaseURL}/products/categories/${categoryId}/subcategories/`
  );
};

export default categoryService;
