import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../../services/apiClient";
import { ProductType } from "../../services/product";

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
