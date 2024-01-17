import { useState } from "react";
import Card from "../../components/Card";
import Space from "../../components/Space";
import Spinner from "../../components/Spinner";
import useAuth from "../../hooks/useAuth";
import useUserAddresses from "../../hooks/user/useUserAddresses";
import DeliveryAddressForm from "../user/account/addresses/DeliveryAddressForm";
import CheckoutHeader from "./CheckoutHeader";
import DeliveryAddressSummary from "./DeliveryAddressSummary";

interface Props {}

const CheckoutInformWithState = ({}: Props) => {
  const [changeDefault, setChangeDefault] = useState(false);

  const handleChangeDefault = () => {
    setChangeDefault(!changeDefault);
  };

  const handleCancel = () => {
    setChangeDefault(false);
  };

  const handleCloseDeliveryAddressForm = () => {
    setChangeDefault(false);
  };
  const { userInfo } = useAuth();

  const { data: userAddresses, isLoading: isLoadingUserAddresses } =
    useUserAddresses(userInfo?.user.id || "");

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
            <DeliveryAddressForm
              handleCancel={handleCancel}
              handleCloseDeliveryAddressForm={handleCloseDeliveryAddressForm}
            />
          ) : (
            <DeliveryAddressSummary
              setChangeDefault={setChangeDefault}
              userAddresses={userAddresses}
              changeDefault={changeDefault}
            />
          )}
        </div>
      </Card>
    );
};

export default CheckoutInformWithState;
