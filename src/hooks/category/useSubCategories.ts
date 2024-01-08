import { useQuery } from "@tanstack/react-query";
import { subCategoryService } from "../../services/category";

const useSubCategories = (categoryId: string) =>
  useQuery({
    queryKey: ["categories", categoryId, "subcategories"],
    queryFn: () => subCategoryService(categoryId).fetchAll(),
  });

export default useSubCategories;
