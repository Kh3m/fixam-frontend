import { useQuery } from "@tanstack/react-query";
import { subCategoryService } from "../../services/category";

const useCategories = (categoryId?: string) =>
  useQuery({
    queryKey: categoryId
      ? ["categories", categoryId, "subcategories"]
      : ["categories"],
    queryFn: () => subCategoryService(categoryId).fetchAll(),
    staleTime: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

export default useCategories;
