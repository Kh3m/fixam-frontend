import {
  FieldValue,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import BorderCard from "../../BorderCard";
import Space from "../../../../components/Space";
import Heading from "../../../../components/Heading";
import CustomerDeliveryAddressFields from "../../../checkout/CustomerDeliveryAddressFields";
import { useLocation } from "react-router-dom";
import useAddress from "../../../../hooks/user/useAddress";
import Spinner from "../../../../components/Spinner";

interface Props {
  handleShowDeliveryAddressForm?: (show: boolean) => void;
}

const DeliveryAddressForm = ({ handleShowDeliveryAddressForm }: Props) => {
  const methods = useForm();
  const { state } = useLocation();

  const { data: address, isLoading: isLoadingAddress } = useAddress(
    state.addressId
  );

  const { handleSubmit } = methods;

  if (isLoadingAddress)
    return (
      <div className="my-4 flex justify-center">
        <Spinner />
      </div>
    );

  const onSumbit = (data: FieldValues) => {
    console.log("EDIT Address Variables", data);
  };

  return (
    <BorderCard>
      <FormProvider {...methods}>
        <Space spacing="my-6" />
        <Heading variant="h4" styles="font-semibold text-[20px]">
          DELIVERY ADDRESS
        </Heading>
        <Space spacing="my-6" />
        <form onSubmit={handleSubmit(onSumbit)}>
          <CustomerDeliveryAddressFields
            shouldRemoveCancel
            address={address}
            handleCancel={() =>
              handleShowDeliveryAddressForm
                ? handleShowDeliveryAddressForm(false)
                : null
            }
          />
        </form>
      </FormProvider>
    </BorderCard>
  );
};

export default DeliveryAddressForm;
