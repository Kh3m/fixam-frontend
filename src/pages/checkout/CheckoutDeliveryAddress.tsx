import CheckoutDeliveryForm from "./CheckoutDeliveryForm";
import { UserAddressType } from "./CheckoutInfoWithState";
import DeliveryAddressSummary from "./DeliveryAddressSummary";

interface Props {
  defautlUserAddress: UserAddressType;
  changeDefault: boolean;
  handleCancel: () => void;
}

const CheckoutDeliveryAddress = ({
  defautlUserAddress,
  changeDefault,
  handleCancel,
}: Props) => {
  return (
    <>
      {!changeDefault && <DeliveryAddressSummary />}
      {changeDefault && <CheckoutDeliveryForm handleCancel={handleCancel} />}
    </>
  );
};

export default CheckoutDeliveryAddress;
