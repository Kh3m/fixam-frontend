import { useQuery } from "@tanstack/react-query";
import { subCategoryService } from "../../services/category";

const useCategories = (categoryId?: string) =>
  useQuery({
    queryKey: categoryId
      ? ["categories", categoryId, "subcategories"]
      : ["categories"],
    queryFn: () => subCategoryService(categoryId).fetchAll(),
  });

export default useCategories;
