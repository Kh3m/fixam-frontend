import { useQuery } from "@tanstack/react-query";
import { FetchResponseType, dummyApiClient } from "../../services/apiClient";
import { orderBaseURL } from "../../services/baseURLs";
import { OrderType } from "../../services/order";

const useOrders = (userId: string) =>
  useQuery({
    queryKey: ["orders", "user", userId],
    queryFn: () =>
      dummyApiClient
        .get<FetchResponseType<OrderType>>(
          `${orderBaseURL}/orders/user/${userId}`
        )
        .then((res) => res.data),
  });

export default useOrders;
