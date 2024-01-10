import { FaPlus } from "react-icons/fa6";
import BorderCard from "../../BorderCard";
import Space from "../../../../components/Space";
import { FormProvider, useForm } from "react-hook-form";
import CustomerDeliveryAddressFields from "../../../checkout/CustomerDeliveryAddressFields";
import Heading from "../../../../components/Heading";
import AccountAddressSummary from "../AccountAddressSummary";
import Spinner from "../../../../components/Spinner";
import { useState } from "react";
import useUserAddresses from "../../../../hooks/user/useUserAddresses";
import useAuth from "../../../../hooks/useAuth";
import DeliveryAddressForm from "./DeliveryAddressForm";

const Addresses = () => {
  const { user } = useAuth();

  const { data: addresses, isLoading: isLoadingAddresses } = useUserAddresses(
    user?.id || ""
  );

  const [showDeliveryAddressForm, setShowDeliveryAddressForm] = useState(false);

  const handleAddNewAddress = () => setShowDeliveryAddressForm(true);

  return (
    <div>
      {isLoadingAddresses ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div>
          {addresses.results.map((address) => (
            <AccountAddressSummary address={address} />
          ))}
        </div>
      )}
      <Space spacing="my-6" />
      {showDeliveryAddressForm && (
        <DeliveryAddressForm
          handleShowDeliveryAddressForm={setShowDeliveryAddressForm}
        />
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
    </div>
  );
};

export default Addresses;
