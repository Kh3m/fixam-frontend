import { UserAddressType } from "../../services/user";
import CheckoutDeliveryForm from "./CheckoutDeliveryForm";
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
      {changeDefault && <CheckoutDeliveryForm handleCancel={handleCancel} />}
    </>
  );
};

export default CheckoutDeliveryAddress;
