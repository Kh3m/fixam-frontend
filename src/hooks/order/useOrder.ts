import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import { OrderType } from "../../services/order";

const useOrder = (orderId: string) =>
  useQuery({
    queryKey: ["orders", orderId],
    queryFn: () =>
      apiClient.get<OrderType>(`/orders/${orderId}/`).then((res) => res.data),
    enabled: !!orderId,
  });

export default useOrder;
