import { useParams } from "react-router-dom";
import Space from "../../../components/Space";
import DeliveryTimeEstimator from "./BottomSpanMessage";
import OrderProgress from "./OrderProgress";
import useOrder from "../../../hooks/order/useOrder";
import Spinner from "../../../components/Spinner";
import Center from "../../../components/Center";

const OrderTrack = () => {
  const { orderId } = useParams();

  const { data: order, isLoading: isLoadingOrder } = useOrder(orderId || "");

  if (isLoadingOrder)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (order)
    return (
      <div>
        <div className="text-sm font-semibold my-1">
          <span>Order ID:</span>
          <span className="text-gray-500">
            #{orderId?.split("-")[0].toUpperCase()}
          </span>
        </div>
        <Space spacing="my-12" />
        <OrderProgress orderDeliveryStatus={order.order_delivery_status} />
        <Space spacing="my-12" />
        <DeliveryTimeEstimator>
          To be delivered between Friday 10th and Tuesday 14th January
        </DeliveryTimeEstimator>
      </div>
    );
};

export default OrderTrack;
