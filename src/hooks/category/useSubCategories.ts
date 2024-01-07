import { useQuery } from "@tanstack/react-query";
import { subCategoryService } from "../../services/category";

const useSubCategories = (categoryId?: string) =>
  useQuery({
    queryKey: categoryId
      ? ["categories", categoryId, "subcategories"]
      : ["categories"],
    queryFn: () => subCategoryService(categoryId).fetchAll(),
  });

export default useSubCategories;
