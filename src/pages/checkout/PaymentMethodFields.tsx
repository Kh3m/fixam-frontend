import Input from "../../components/Input";
import Space from "../../components/Space";
import CheckoutFormFieldCard from "./CheckoutFormFieldCard";

const PaymentMethodFields = () => {
  return (
    <section>
      <CheckoutFormFieldCard
        checkbox={{
          text: "use as my default address",
          boxFor: "default-delivery-address",
        }}
        heading="PAYMENT METHOD"
        isPaymentMethod
      >
        <Space spacing="my-4" />
        <Input placeholder="Card Number" />
        <Space spacing="my-4" />
        <Input placeholder="Name of Holder" />
        <Space spacing="my-4" />
        <div className="flex space-x-4 items-center">
          <div className="flex-grow">
            <Input placeholder="MM" />
          </div>
          <span>/</span>
          <div className="flex-grow">
            <Input placeholder="YY" />
          </div>
        </div>
        <Space spacing="my-4" />
        <div className="w-[50%]">
          <Input placeholder="Security Code CVV" />
        </div>
      </CheckoutFormFieldCard>
    </section>
  );
};

export default PaymentMethodFields;
