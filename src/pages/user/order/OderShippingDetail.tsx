import Space from "../../../components/Space";
import HeadingWithBorderBottom from "./HeadingWithBorderBottom";
import OrderDetailList from "./OrderDetailList";

const OderShippingDetail = () => {
  return (
    <section>
      <Space spacing="my-6" />
      <HeadingWithBorderBottom heading="Shipping Details" />
      <OrderDetailList
        items={[{ label: "Shipping Method: ", value: "Door Delivery" }]}
      />
      <Space spacing="my-6" />
      <span className="text-sm font-semibold my-1">Shipping Address:</span>

      <OrderDetailList
        items={[
          { label: "", value: "Abdul Kareem" },
          { label: "", value: "No.23 crescent close, opposite H Medix" },
          { label: "", value: "1st Avenue, Gwarinpa." },
          { label: "", value: "FCT Abuja." },
        ]}
      />
    </section>
  );
};

export default OderShippingDetail;
