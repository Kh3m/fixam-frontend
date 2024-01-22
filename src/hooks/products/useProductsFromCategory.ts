import { useQuery } from "@tanstack/react-query";
import { productsFromCategoryService } from "../../services/product";

const useProductsFromCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ["products", "categories", categoryId],
    queryFn: productsFromCategoryService(categoryId).fetchAll,
    enabled: !!categoryId,
  });
};

export default useProductsFromCategory;
