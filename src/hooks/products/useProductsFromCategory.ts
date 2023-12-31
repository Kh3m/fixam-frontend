import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../../services/product";
import { APIClient } from "../../services/apiClient";

const useProductsFromCategory = (categoryId: string) => {
  const apiClient = new APIClient<ProductType>(
    `/products/categories/${categoryId}/products/?levels_deep=all`
  );

  return useQuery({
    queryKey: ["products", "categories", categoryId],
    queryFn: apiClient.fetchAll,
  });
};

export default useProductsFromCategory;
