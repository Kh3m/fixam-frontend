import { FetchResponseType } from "../services/apiClient";
import { CategoryType } from "../services/category";

export const getMainCategory = (
  categories: FetchResponseType<CategoryType>
): CategoryType[] => {
  if (categories) {
    return (categories as FetchResponseType<CategoryType>).results.filter(
      (cat) => cat.parent === null
    );
  }

  return [];
};

export const getCategoryIdFromURL = (category: string) =>
  category.split("/")[category.split("/").length - 2];
