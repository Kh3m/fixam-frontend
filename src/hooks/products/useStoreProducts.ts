import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../../services/product";
import { APIClient } from "../../services/apiClient";

const useStoreProducts = (storeId: string) => {
  const apiClient = new APIClient<ProductType>(`/products/store/${storeId}/`);

  return useQuery({
    queryKey: ["products", "categories", storeId],
    queryFn: apiClient.fetchAll,
  });
};

export default useStoreProducts;
