import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../../services/apiClient";
import { ProductType } from "../../services/product";

const useRandomProductsFromCategory = (categoryId: string) => {
  const apiClient = new APIClient<ProductType>(
    `/products/categories/${categoryId}/random_products/`
  );

  return useQuery({
    queryKey: ["products", "categories", categoryId, "random_products"],
    queryFn: apiClient.fetchAll,
  });
};

export default useRandomProductsFromCategory;
