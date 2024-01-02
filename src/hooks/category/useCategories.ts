import { useQuery } from "@tanstack/react-query";
import categoryService from "../../services/category";

// TODO: Remove categoryId
const useCategories = (categoryId?: string) =>
  useQuery({
    queryKey: categoryId ? ["categories", categoryId] : ["categories"],
    queryFn: categoryService.fetchAll,
    staleTime: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

export default useCategories;
