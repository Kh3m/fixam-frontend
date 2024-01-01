import { useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import Space from "../../components/Space";
import CheckoutFormFieldContainer from "./CheckoutFormFieldContainer";

interface Props {
  handleCancel: () => void;
}
const PaymentMethodFields = ({ handleCancel }: Props) => {
  const { control } = useFormContext();
  return (
    <section>
      <CheckoutFormFieldContainer
        handleCancel={handleCancel}
        checkbox={{
          text: "use as my default address",
          boxFor: "default-delivery-address",
        }}
        heading="PAYMENT METHOD"
        isPaymentMethod
      >
        <Space spacing="my-4" />
        <Input name="" rules={{}} control={control} placeholder="Card Number" />
        <Space spacing="my-4" />
        <Input
          name=""
          rules={{}}
          control={control}
          placeholder="Name of Holder"
        />
        <Space spacing="my-4" />
        <div className="flex space-x-4 items-center">
          <div className="flex-grow">
            <Input name="" rules={{}} control={control} placeholder="MM" />
          </div>
          <span>/</span>
          <div className="flex-grow">
            <Input name="" rules={{}} control={control} placeholder="YY" />
          </div>
        </div>
        <Space spacing="my-4" />
        <div className="w-[50%]">
          <Input
            name=""
            rules={{}}
            control={control}
            placeholder="Security Code CVV"
          />
        </div>
      </CheckoutFormFieldContainer>
    </section>
  );
};

export default PaymentMethodFields;
