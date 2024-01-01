import CheckoutFormFieldCard from "./CheckoutFormFieldContainer";
import Space from "../../components/Space";
import Input from "../../components/Input";
import { useFormContext } from "react-hook-form";
import CheckoutFormFieldContainer from "./CheckoutFormFieldContainer";

interface Props {
  handleCancel: () => void;
}

const CustomerDeliveryAddressFields = ({ handleCancel }: Props) => {
  const { control } = useFormContext();
  return (
    <section>
      <CheckoutFormFieldContainer
        checkbox={{
          text: "use as my default address",
          boxFor: "default-delivery-address",
        }}
        heading="DELIVERY ADDRESS"
        handleCancel={handleCancel}
      >
        {/* TODO: Fix duplicate */}
        <div className="flex space-x-10">
          <div className="flex-grow">
            <Input
              name=""
              rules={{}}
              control={control}
              placeholder="First Name"
            />
          </div>
          <div className="flex-grow">
            <Input
              name=""
              rules={{}}
              control={control}
              placeholder="Last Name"
            />
          </div>
        </div>
        <Space spacing="my-4" />
        <div className="flex space-x-10">
          <div className="flex-grow">
            <Input
              name=""
              rules={{}}
              control={control}
              placeholder="Phone Number 1"
              type="tel"
            />
          </div>
          <div className="flex-grow">
            <Input
              name=""
              rules={{}}
              control={control}
              placeholder="Phone Number 2"
              type="tel"
            />
          </div>
        </div>
        <Space spacing="my-4" />
        <Input
          name=""
          rules={{}}
          control={control}
          placeholder="Delivery address"
          type="address"
        />
        <Space spacing="my-4" />
        <Input
          name=""
          rules={{}}
          control={control}
          placeholder="Apt, Unit, Suite etc."
          type="address"
        />
        <Space spacing="my-4" />
        <div className="flex space-x-10">
          <div className="flex-grow">
            <Input name="" rules={{}} control={control} placeholder="City" />
          </div>
          <div className="flex-grow">
            <Input name="" rules={{}} control={control} placeholder="ZipCode" />
          </div>
          <Input name="" rules={{}} control={control} placeholder="State" />
        </div>
      </CheckoutFormFieldContainer>
    </section>
  );
};

export default CustomerDeliveryAddressFields;
