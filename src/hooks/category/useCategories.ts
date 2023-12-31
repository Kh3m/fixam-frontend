import { useQuery } from "@tanstack/react-query";
import categoryService from "../../services/category";

// TODO: Remove categoryId
const useCategories = (categoryId?: string) =>
  useQuery({
    queryKey: categoryId ? ["categories", categoryId] : ["categories"],
    queryFn: categoryService.fetchAll,
  });

export default useCategories;