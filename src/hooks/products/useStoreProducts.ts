import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../../services/apiClient";
import { ProductType } from "../../services/product";

const useStoreProducts = (storeId: string) => {
  const apiClient = new APIClient<ProductType>(`/products/store/${storeId}/`);

  return useQuery({
    queryKey: ["products", "store", storeId],
    queryFn: apiClient.fetchAll,
  });
};

export default useStoreProducts;
