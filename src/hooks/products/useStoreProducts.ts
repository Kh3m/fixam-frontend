import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../../services/product";
import { DummyAPIClient } from "../../services/apiClient";
import { productBaseURL } from "../../services/baseURLs";

const useStoreProducts = (storeId: string) => {
  const apiClient = new DummyAPIClient<ProductType>(
    `${productBaseURL}/products/store/${storeId}/`
  );

  return useQuery({
    queryKey: ["products", "store", storeId],
    queryFn: apiClient.fetchAll,
  });
};

export default useStoreProducts;
