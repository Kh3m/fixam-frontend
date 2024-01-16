import { useQuery } from "@tanstack/react-query";
import { storeOrdersService } from "../../services/store";

const useOrdersForStore = (storeId: string) =>
  useQuery({
    queryKey: ["orders", storeId, "store"],
    queryFn: storeOrdersService(storeId).fetchAll,
    enabled: !!storeId,
  });

export default useOrdersForStore;
