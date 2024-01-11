import { useLocation } from "react-router-dom";
import Spinner from "../../../../components/Spinner";
import useAddress from "../../../../hooks/user/useAddress";
import BorderCard from "../../BorderCard";
import DeliveryAddressForm from "./DeliveryAddressForm";

const EditAddresses = () => {
  const { state } = useLocation();

  const { data: address, isLoading: isLoadingAddress } = useAddress(
    state.addressId || ""
  );

  if (isLoadingAddress)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (address)
    return (
      <BorderCard>
        <DeliveryAddressForm address={address} />
        {/* <FormProvider {...methods}>
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
        </FormProvider> */}
      </BorderCard>
    );
};

export default EditAddresses;
