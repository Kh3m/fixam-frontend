import Space from "../../../components/Space";
import { OrderType } from "../../../services/order";
import { formatPrice } from "../../../utils/number-formatter";
import HeadingWithBorderBottom from "./HeadingWithBorderBottom";
import OrderDetailList from "./OrderDetailList";

interface Props {
  order: OrderType;
}

const OrderPaymentDetail = ({ order }: Props) => {
  return (
    <section>
      <Space spacing="my-6" />
      <HeadingWithBorderBottom heading="Payment  Details" />
      <OrderDetailList
        items={[
          { label: "Payment method: ", value: "Pay on Delivery" },
          // { label: "Item Cost: ", value: formatPrice(547_050) },
          {
            label: "Delivery Fee: ",
            value: formatPrice(order.delivery_charge),
          },
          {
            label: "Total Cost:  ",
            value: formatPrice(order.order_total_price + order.delivery_charge),
          },
        ]}
      />
    </section>
  );
};

export default OrderPaymentDetail;
