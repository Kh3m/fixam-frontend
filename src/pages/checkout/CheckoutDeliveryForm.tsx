import { FormProvider, useForm } from "react-hook-form";
import CustomerDeliveryAddressFields from "./CustomerDeliveryAddressFields";

interface Props {
  handleCancel: () => void;
}
const CheckoutDeliveryForm = ({ handleCancel }: Props) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="w-full">
        <CustomerDeliveryAddressFields handleCancel={handleCancel} />
      </form>
    </FormProvider>
  );
};

export default CheckoutDeliveryForm;
