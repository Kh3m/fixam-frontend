import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Space from "../../../../components/Space";
import Spinner from "../../../../components/Spinner";
import useAuth from "../../../../hooks/useAuth";
import useUserAddresses from "../../../../hooks/user/useUserAddresses";
import BorderCard from "../../BorderCard";
import AccountAddressSummary from "../AccountAddressSummary";
import DeliveryAddressForm from "./DeliveryAddressForm";

const Addresses = () => {
  const { user } = useAuth();

  const { data: addresses, isLoading: isLoadingAddresses } = useUserAddresses(
    user?.id || "24ac295f-175f-4909-af44-b3d3a2a4e18f"
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
          {addresses?.map((address) => (
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
      {addresses?.length !== 3 && (
        <BorderCard
          handleAddNewAddress={handleAddNewAddress}
          styles="flex flex-col justify-center items-center 
          h-28 font-semibold text-gray-400 space-y-4"
        >
          <FaPlus />
          <span>Add a new Address</span>
        </BorderCard>
      )}
    </div>
  );
};

export default Addresses;
