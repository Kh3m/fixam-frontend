import { APIClient } from "./apiClient";

export type CategoryType = {
  id: string;
  subcategories: string[];
  name: string;
  description: string;
  parent: string | null;
};

const categoryService = new APIClient<CategoryType>(`/products/categories/`);

export const subCategoryService = (categoryId?: string) => {
  return new APIClient<CategoryType>(
    `/products/categories/${categoryId}/subcategories/`
  );
};

export default categoryService;
