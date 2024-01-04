import Space from "../../../components/Space";
import { formatPrice } from "../../../utils/number-formatter";
import OderShippingDetail from "./OderShippingDetail";
import OrderDetailList from "./OrderDetailList";
import OrderPaymentDetail from "./OrderPaymentDetail";
import OrderSummaryCard from "./OrderSummaryCard";

const OrderDetail = () => {
  return (
    <section>
      <OrderDetailList
        items={[
          { label: "Order ID: ", value: "#547862FA" },
          { label: "Order Date: ", value: "3rd January, 2024" },
          { label: "Total Amount: ", value: formatPrice(590_850) },
          {
            label: "Estimated Delivery Date: ",
            value: "Between 10th - 14th January 2024",
          },
        ]}
      />
      <Space spacing="my-4" />
      <OrderSummaryCard hasCancel />
      <OrderPaymentDetail />
      <OderShippingDetail />
    </section>
  );
};

export default OrderDetail;
