import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

import useAuth from "../../../../hooks/useAuth";
import { dummyApiClient } from "../../../../services/apiClient";
import { userBaseURL } from "../../../../services/baseURLs";
import { isAxiosError } from "axios";
import ToastMessage from "../../../../components/ToastMessage";
import CustomerDeliveryAddressFields from "./DeliveryAddressFields";
import { useQueryClient } from "@tanstack/react-query";
import { UserAddressType } from "../../../../services/user";
import { useNavigate } from "react-router-dom";

interface Props {
  handleCancel?: () => void;
  handleCloseDeliveryAddressForm?: () => void;
  address?: UserAddressType;
  inSamePage?: boolean;
}

const DeliveryAddressForm = ({
  handleCancel,
  address,
  inSamePage,
  handleCloseDeliveryAddressForm,
}: Props) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { user } = useAuth();
  const [severErrorMessage, setServerErrorMessage] = useState("");

  const [isCreatingUserAddress, setIsCreatingUserAddress] = useState(false);

  const methods = useForm({
    defaultValues: {
      street_address: address ? address.street_address : "",
      city: address ? address.city : "",
      state: address ? address.state : "",
      country: address ? address.country : "NGA",
      zip_code: address ? address.zip_code : "",
      is_default: address ? address.is_default : false,
      receiver_first_name: address ? address.receiver_first_name : "",
      receiver_last_name: address ? address.receiver_last_name : "",
      receiver_phone_one: address ? address.receiver_phone_one : "",
      receiver_phone_two: address ? address.receiver_phone_two : "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: FieldValues) => {
    setIsCreatingUserAddress(true);
    try {
      if (user) {
        // Send request to update user's address
        const createdAddress = !address
          ? await dummyApiClient.post(`${userBaseURL}/users/adresses/`, {
              ...data,
              receiver_phone_two: data.receiver_phone_two || null,
              user: user.id,
            })
          : await dummyApiClient.put(
              `${userBaseURL}/users/adresses/${address.id}/`,
              {
                ...data,
                receiver_phone_two: data.receiver_phone_two || null,
                user: user.id,
              }
            );

        // If the address is created successful, reset the form
        if (createdAddress.status == 201 || createdAddress.status == 200) {
          queryClient.invalidateQueries({
            queryKey: ["users", user.id, "addresses"],
          });
          reset();
          if (handleCloseDeliveryAddressForm) handleCloseDeliveryAddressForm();
        }

        if (createdAddress.status == 200) {
          // Naviagate back
          if (!inSamePage) navigate("/users/account/addresses");
        }
      }

      setIsCreatingUserAddress(false);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.data[0] === "Address limit exceeded.") {
          setServerErrorMessage("Address limit exceeded.");
        }

        if (error.message === "Network Error") {
          setServerErrorMessage("Network Error");
        }
        console.log("creating address error", error);
        setIsCreatingUserAddress(false);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      {severErrorMessage && (
        <ToastMessage
          type="error"
          message={severErrorMessage}
          shoudlShowToast
        />
      )}

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <CustomerDeliveryAddressFields
          handleCancel={handleCancel}
          isLoading={isCreatingUserAddress}
          address={address ? address : undefined}
        />
      </form>
    </FormProvider>
  );
};

export default DeliveryAddressForm;
