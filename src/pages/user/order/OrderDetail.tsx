import { useParams } from "react-router-dom";
import Space from "../../../components/Space";
import useOrder from "../../../hooks/order/useOrder";
import { formatPrice } from "../../../utils/number-formatter";
import OderShippingDetail from "./OderShippingDetail";
import OrderDetailList from "./OrderDetailList";
import OrderPaymentDetail from "./OrderPaymentDetail";
import OrderSummaryCard from "./OrderSummaryCard";
import Center from "../../../components/Center";
import Spinner from "../../../components/Spinner";

const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const { data: order, isLoading: isLoadingOrder } = useOrder(orderId || "");

  if (isLoadingOrder)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (order)
    return (
      <section>
        <OrderDetailList
          items={[
            { label: "Order ID: ", value: "#" + order.id.split("-")[0] },
            { label: "Order Date: ", value: order.created_at },
            {
              label: "Total Amount: ",
              value: formatPrice(order.order_total_price),
            },
            {
              label: "Estimated Delivery Date: ",
              value: "Between 10th - 14th January 2024",
            },
          ]}
        />
        <Space spacing="my-4" />
        {order.order_items.map((orderItem) => (
          <OrderSummaryCard orderitem={orderItem} hasCancel />
        ))}

        <OrderPaymentDetail />
        <OderShippingDetail />
      </section>
    );
};

export default OrderDetail;
