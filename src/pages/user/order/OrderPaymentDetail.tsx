import Space from "../../../components/Space";
import { formatPrice } from "../../../utils/number-formatter";
import HeadingWithBorderBottom from "./HeadingWithBorderBottom";
import OrderDetailList from "./OrderDetailList";

const OrderPaymentDetail = () => {
  return (
    <section>
      <Space spacing="my-6" />
      <HeadingWithBorderBottom heading="Payment  Details" />
      <OrderDetailList
        items={[
          { label: "Payment method: ", value: "Pay on Delivery" },
          { label: "Item Cost: ", value: formatPrice(547_050) },
          { label: "Delivery Fee: ", value: formatPrice(43_800) },
          { label: "Total Cost:  ", value: formatPrice(590_850) },
        ]}
      />
    </section>
  );
};

export default OrderPaymentDetail;
