import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Space from "../../components/Space";
import useAuth from "../../hooks/useAuth";
import { dummyApiClient } from "../../services/apiClient";
import { userBaseURL } from "../../services/baseURLs";
import { UserAddressType } from "../../services/user";
import DeliveryAddressForm from "../user/account/addresses/DeliveryAddressForm";
import CheckoutHeader from "./CheckoutHeader";
import DeliveryAddressSummary from "./DeliveryAddressSummary";
import useUserAddresses from "../../hooks/user/useUserAddresses";
import Spinner from "../../components/Spinner";

interface Props {}

const CheckoutInformWithState = ({}: Props) => {
  const [changeDefault, setChangeDefault] = useState(false);

  const handleChangeDefault = () => {
    setChangeDefault(!changeDefault);
  };

  const handleCancel = () => {
    setChangeDefault(false);
  };

  const { user } = useAuth();

  const { data: userAddresses, isLoading: isLoadingUserAddresses } =
    useUserAddresses(user?.id || "");

  if (isLoadingUserAddresses) {
    return (
      <div className="flex justify-center my-4">
        <Spinner />
      </div>
    );
  }

  if (userAddresses)
    return (
      <Card>
        <div className="px-4">
          <CheckoutHeader
            heading="DELIVERY ADDRESS"
            handleChangeDefault={handleChangeDefault}
            changeDefault={changeDefault}
          />

          <Space spacing="my-6" />

          {changeDefault && userAddresses.length === 0 ? (
            <DeliveryAddressForm handleCancel={handleCancel} />
          ) : (
            <DeliveryAddressSummary
              userAddresses={userAddresses}
              changeDefault={changeDefault}
            />
          )}
        </div>
      </Card>
    );
};

export default CheckoutInformWithState;
