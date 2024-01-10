import { FieldValues, FormProvider, useForm } from "react-hook-form";
import CustomerDeliveryAddressFields from "./CustomerDeliveryAddressFields";
import { dummyApiClient } from "../../services/apiClient";
import { userBaseURL } from "../../services/baseURLs";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

interface Props {
  handleCancel: () => void;
}
const CheckoutDeliveryForm = ({ handleCancel }: Props) => {
  const { user } = useAuth();

  const [isCreatingUserAddress, setIsCreatingUserAddress] = useState(false);

  const methods = useForm({
    defaultValues: {
      street_address: "",
      city: "",
      state: "",
      country: "NGA",
      zip_code: "",
      is_default: false,
      receiver_first_name: "",
      receiver_last_name: "",
      receiver_phone_one: "",
      receiver_phone_two: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: FieldValues) => {
    setIsCreatingUserAddress(true);

    console.log("Delivery Address Variables", data);

    try {
      if (user) {
        // Send request to update user's address
        const createdAddress = await dummyApiClient.post(
          `${userBaseURL}/users/adresses/`,
          { ...data, user: user.id }
        );

        console.log("createdAddress", createdAddress);
      }

      setIsCreatingUserAddress(false);
    } catch (error) {
      console.log("creating address error", error);
      setIsCreatingUserAddress(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <CustomerDeliveryAddressFields
          handleCancel={handleCancel}
          isLoading={isCreatingUserAddress}
        />
      </form>
    </FormProvider>
  );
};

export default CheckoutDeliveryForm;
