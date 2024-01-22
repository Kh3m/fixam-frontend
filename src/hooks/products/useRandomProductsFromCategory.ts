import { useQuery } from "@tanstack/react-query";
import { randomProductsFromCategoryService } from "../../services/product";

const useRandomProductsFromCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ["products", "categories", categoryId, "random_products"],
    queryFn: randomProductsFromCategoryService(categoryId).fetchAll,
    enabled: !!categoryId,
  });
};

export default useRandomProductsFromCategory;
