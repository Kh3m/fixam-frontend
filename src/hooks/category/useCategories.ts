import { useQuery } from "@tanstack/react-query";
import categoryService from "../../services/category";

const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: categoryService.fetchAll,
  });

export default useCategories;
