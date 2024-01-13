import { useQuery } from "@tanstack/react-query";
import { dummyApiClient } from "../../services/apiClient";
import { orderBaseURL } from "../../services/baseURLs";
import { OrderType } from "../../services/order";

const useOrder = (orderId: string) =>
  useQuery({
    queryKey: ["orders", orderId],
    queryFn: () =>
      dummyApiClient
        .get<OrderType>(`${orderBaseURL}/orders/${orderId}/`)
        .then((res) => res.data),
  });

export default useOrder;
