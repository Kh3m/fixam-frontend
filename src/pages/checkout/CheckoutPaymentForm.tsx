import { FormProvider, useForm } from "react-hook-form";
import PaymentMethodFields from "./PaymentMethodFields";

interface Props {
  handleCancel: () => void;
}
const CheckoutPaymentForm = ({ handleCancel }: Props) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="w-full">
        <PaymentMethodFields handleCancel={handleCancel} />
      </form>
    </FormProvider>
  );
};

export default CheckoutPaymentForm;
