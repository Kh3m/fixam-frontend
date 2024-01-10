import { FetchResponseType, dummyApiClient } from "../../services/apiClient";
import { orderBaseURL } from "../../services/baseURLs";
import { ReviewType, reviewAPIClient } from "../../services/review";
import { useQuery } from "@tanstack/react-query";

type OrderType = {
  id: string;
  user_id: string;
  delivery_address_id: string;
  order_delivery_status: string;
  order_total_price: string;
  delivery_charge: string;
  order_payment_status: string;
};

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
