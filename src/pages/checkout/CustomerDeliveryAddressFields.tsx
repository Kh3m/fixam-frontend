import CheckoutFormFieldCard from "./CheckoutFormFieldCard";
import Space from "../../components/Space";
import Input from "../../components/Input";

const CustomerDeliveryAddressFields = () => {
  return (
    <section>
      <CheckoutFormFieldCard
        checkbox={{
          text: "use as my default address",
          boxFor: "default-delivery-address",
        }}
        heading="DELIVERY ADDRESS"
      >
        {/* TODO: Fix duplicate */}
        <div className="flex space-x-10">
          <div className="flex-grow">
            <Input placeholder="First Name" />
          </div>
          <div className="flex-grow">
            <Input placeholder="Last Name" />
          </div>
        </div>
        <Space spacing="my-4" />
        <div className="flex space-x-10">
          <div className="flex-grow">
            <Input placeholder="Phone Number 1" type="tel" />
          </div>
          <div className="flex-grow">
            <Input placeholder="Phone Number 2" type="tel" />
          </div>
        </div>
        <Space spacing="my-4" />
        <Input placeholder="Delivery address" type="address" />
        <Space spacing="my-4" />
        <Input placeholder="Apt, Unit, Suite etc." type="address" />
        <Space spacing="my-4" />
        <div className="flex space-x-10">
          <div className="flex-grow">
            <Input placeholder="City" />
          </div>
          <div className="flex-grow">
            <Input placeholder="ZipCode" />
          </div>
          <Input placeholder="State" />
        </div>
      </CheckoutFormFieldCard>
    </section>
  );
};

export default CustomerDeliveryAddressFields;
