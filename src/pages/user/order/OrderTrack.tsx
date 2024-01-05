import Space from "../../../components/Space";
import DeliveryTimeEstimator from "./BottomSpanMessage";
import OrderProgress from "./OrderProgress";

const OrderTrack = () => {
  return (
    <div>
      <div className="text-sm font-semibold my-1">
        <span>Order ID:</span>
        <span className="text-gray-500">#547862FA</span>
      </div>
      <Space spacing="my-12" />
      <OrderProgress />
      <Space spacing="my-12" />
      <DeliveryTimeEstimator>
        To be delivered between Friday 10th and Tuesday 14th January
      </DeliveryTimeEstimator>
    </div>
  );
};

export default OrderTrack;
