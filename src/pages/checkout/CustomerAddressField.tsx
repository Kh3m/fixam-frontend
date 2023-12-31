import { useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import Space from "../../components/Space";
import CheckoutFormFieldCard from "./CheckoutFormFieldContainer";

const CustomerAddressField = () => {
  const { control } = useFormContext();

  return (
    <section>
      <CheckoutFormFieldCard
        checkbox={{
          text: "use as my default address",
          boxFor: "default-address",
        }}
        heading="CUSTOMER ADDRESS"
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
          placeholder="Address"
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
      </CheckoutFormFieldCard>
    </section>
  );
};

export default CustomerAddressField;
