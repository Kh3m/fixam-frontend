import {} from "../entities/store";
import { APIClient } from "./apiClient";

type CategoryType = {
  id: string;
  subcategories: string[];
  name: string;
  description: string;
  parent: string | null;
};

const apiClient = new APIClient<CategoryType>("/products/categories/");

const categoryService = apiClient;

export const subCategoryService = (categoryId?: string) =>
  new APIClient<CategoryType>(
    `/products/categories/${categoryId}/subcategories/`
  );
export default categoryService;
