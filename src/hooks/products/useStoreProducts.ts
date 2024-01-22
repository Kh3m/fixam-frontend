import { useQuery } from "@tanstack/react-query";
import { storeProductsService } from "../../services/store";

const useStoreProducts = (storeId: string) => {
  return useQuery({
    queryKey: ["products", "store", storeId],
    queryFn: storeProductsService(storeId).fetchAll,
    enabled: !!storeId,
  });
};

export default useStoreProducts;
