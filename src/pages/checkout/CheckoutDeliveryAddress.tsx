import { UserAddressType } from "../../services/user";
import DeliveryAddressForm from "../user/account/addresses/DeliveryAddressForm";
import DeliveryAddressSummary from "./DeliveryAddressSummary";

interface Props {
  defautlUserAddress: UserAddressType;
  changeDefault: boolean;
  handleCancel: () => void;
}

const CheckoutDeliveryAddress = ({ changeDefault, handleCancel }: Props) => {
  return (
    <>
      {!changeDefault && <DeliveryAddressSummary />}
      {changeDefault && <DeliveryAddressForm handleCancel={handleCancel} />}
    </>
  );
};

export default CheckoutDeliveryAddress;
