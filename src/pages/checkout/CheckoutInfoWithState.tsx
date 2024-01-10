import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Space from "../../components/Space";
import CheckoutDeliveryAddress from "./CheckoutDeliveryAddress";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutPaymentInfo from "./CheckoutPaymentInfo";
import { isAxiosError } from "axios";
import { dummyApiClient } from "../../services/apiClient";
import { userBaseURL } from "../../services/baseURLs";
import useAuth from "../../hooks/useAuth";
import { UserAddressType } from "../../services/user";

interface Props {
  isPaymentMethod?: boolean;
  heading: string;
}

const CheckoutInformWithState = ({ isPaymentMethod, heading }: Props) => {
  const [changeDefault, setChangeDefault] = useState(false);

  const handleChangeDefault = () => {
    setChangeDefault(!changeDefault);
  };

  const handleCancel = () => {
    setChangeDefault(false);
  };

  const { user } = useAuth();

  const [userAddresses, setUserAddresses] = useState<UserAddressType[]>([]);

  const defautlUserAddress = userAddresses.find(
    (address) => address.is_default
  );

  useEffect(() => {
    const fetchUserAddresses = async () => {
      if (user) {
        try {
          const userAddressesRes = await dummyApiClient.get<UserAddressType[]>(
            `${userBaseURL}/users/adresses/${user.id}/`
          );

          console.log("userAddresses", userAddressesRes.data);
          setUserAddresses(userAddressesRes.data);

          setChangeDefault(false);
        } catch (error) {
          if (isAxiosError(error)) {
            if (
              error.response?.status == 404 &&
              error.response?.data.detail === "Not found."
            ) {
              console.log("userAddresses ERROR===", error);
              // In this case create user address and set it as default
              setChangeDefault(true);
              setUserAddresses([]);
            }
          }
        }
      }
    };

    fetchUserAddresses();
  }, []);

  return (
    <Card>
      <div className="px-4">
        <CheckoutHeader
          heading={heading}
          handleChangeDefault={handleChangeDefault}
          changeDefault={changeDefault}
        />

        {isPaymentMethod ? <Space spacing="my-2" /> : <Space spacing="my-6" />}

        {!isPaymentMethod && (
          <CheckoutDeliveryAddress
            defautlUserAddress={defautlUserAddress!}
            handleCancel={handleCancel}
            changeDefault={changeDefault}
          />
        )}

        {isPaymentMethod && (
          <CheckoutPaymentInfo
            changeDefault={changeDefault}
            handleCancel={handleCancel}
          />
        )}
      </div>
    </Card>
  );
};

export default CheckoutInformWithState;
