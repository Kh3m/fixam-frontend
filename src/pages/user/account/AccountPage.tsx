import { FaPlus } from "react-icons/fa6";
import UserPageContainer from "../UserPageContainer";
import AccountAddressSummary from "./AccountAddressSummary";
import Space from "../../../components/Space";
import BorderCard from "../BorderCard";
import CustomerDeliveryAddressFields from "../../checkout/CustomerDeliveryAddressFields";
import { FormProvider, useForm } from "react-hook-form";
import Heading from "../../../components/Heading";
import { useState } from "react";

const AccountPage = () => {
  const methods = useForm();
  const [showDeliveryAddressForm, setShowDeliveryAddressForm] = useState(false);

  const handleAddNewAddress = () => setShowDeliveryAddressForm(true);

  return (
    <UserPageContainer heading="Account">
      <AccountAddressSummary />
      <Space spacing="my-6" />
      {showDeliveryAddressForm && (
        <BorderCard>
          <FormProvider {...methods}>
            <Space spacing="my-6" />
            <Heading variant="h4" styles="font-semibold text-[20px]">
              DELIVERY ADDRESS
            </Heading>
            <Space spacing="my-6" />
            <CustomerDeliveryAddressFields
              handleCancel={() => setShowDeliveryAddressForm(false)}
            />
          </FormProvider>
        </BorderCard>
      )}
      <Space spacing="my-6" />
      <BorderCard
        handleAddNewAddress={handleAddNewAddress}
        styles="flex flex-col justify-center items-center 
        h-28 font-semibold text-gray-400 space-y-4"
      >
        <FaPlus />
        <span>Add a new Address</span>
      </BorderCard>
    </UserPageContainer>
  );
};

export default AccountPage;
