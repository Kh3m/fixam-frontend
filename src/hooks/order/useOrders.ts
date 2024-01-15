import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponseType } from "../../services/apiClient";
import { OrderType } from "../../services/order";

const useOrders = (userId: string) =>
  useQuery({
    queryKey: ["orders", "user", userId],
    queryFn: () =>
      apiClient
        .get<FetchResponseType<OrderType>>(`/orders/user/${userId}`)
        .then((res) => res.data),
  });

export default useOrders;
