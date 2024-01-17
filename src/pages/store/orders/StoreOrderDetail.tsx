import { useParams } from "react-router-dom";
import Space from "../../../components/Space";
import useOrder from "../../../hooks/order/useOrder";
import { formatPrice } from "../../../utils/number-formatter";
import Center from "../../../components/Center";
import Spinner from "../../../components/Spinner";
import { formatDateString } from "../../../utils/date-formatter";
import StorePageTitle from "../StorePageTitle";
import OrderDetailList from "../../user/order/OrderDetailList";
import OrderSummaryCard from "../../user/order/OrderSummaryCard";
import OrderPaymentDetail from "../../user/order/OrderPaymentDetail";
import OderShippingDetail from "../../user/order/OderShippingDetail";
import BackArrow from "../../../components/BackArrow";

const StoreOrderDetail = () => {
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
        <BackArrow>
          <StorePageTitle title={`Order Detail: #${orderId?.split("-")[0]}`} />
        </BackArrow>
        <Space spacing="my-6" />
        <OrderDetailList
          items={[
            {
              label: "Order ID: ",
              value: "#" + order.id.split("-")[0].toUpperCase(),
            },
            {
              label: "Order Date: ",
              value: formatDateString(order.created_at),
            },
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

        <OrderPaymentDetail order={order} />
        <OderShippingDetail deliveryAddressId={order.delivery_address_id} />
      </section>
    );
};

export default StoreOrderDetail;
