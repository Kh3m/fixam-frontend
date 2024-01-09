import { useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import Space from "../../components/Space";
import CheckoutFormFieldContainer from "./CheckoutFormFieldContainer";

interface Props {
  handleCancel?: () => void;
  isLoading?: boolean;
}

const CustomerDeliveryAddressFields = ({ handleCancel, isLoading }: Props) => {
  const { control } = useFormContext();
  return (
    <section>
      <CheckoutFormFieldContainer
        checkbox={{
          text: "use as my default address",
          boxFor: "is_default",
        }}
        heading="DELIVERY ADDRESS"
        handleCancel={handleCancel}
        isLoading={isLoading}
      >
        {/* TODO: Fix duplicate */}

        <div className="flex space-x-10">
          <div className="flex-grow">
            <Input
              name="receiver_first_name"
              rules={{}}
              control={control}
              placeholder="First Name"
            />
          </div>
          <div className="flex-grow">
            <Input
              name="receiver_last_name"
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
              name="receiver_phone_one"
              rules={{}}
              control={control}
              placeholder="Phone Number 1"
              type="tel"
            />
          </div>
          <div className="flex-grow">
            <Input
              name="receiver_phone_two"
              rules={{}}
              control={control}
              placeholder="Phone Number 2"
              type="tel"
            />
          </div>
        </div>
        <Space spacing="my-4" />
        <Input
          name="street_address"
          rules={{}}
          control={control}
          placeholder="Delivery address"
          type="address"
        />
        {/* <Space spacing="my-4" />
        <Input
          name=""
          rules={{}}
          control={control}
          placeholder="Apt, Unit, Suite etc."
          type="address"
        /> */}
        <Space spacing="my-4" />
        <div className="flex space-x-10">
          <div className="flex-grow">
            <Input
              name="city"
              rules={{}}
              control={control}
              placeholder="City"
            />
          </div>
          <div className="flex-grow">
            <Input
              name="zip_code"
              rules={{}}
              control={control}
              placeholder="ZipCode"
            />
          </div>
          <Input
            name="state"
            rules={{}}
            control={control}
            placeholder="State"
          />
        </div>
      </CheckoutFormFieldContainer>
    </section>
  );
};

export default CustomerDeliveryAddressFields;
