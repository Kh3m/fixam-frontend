import CheckoutDeliveryForm from "./CheckoutDeliveryForm";
import DeliveryAddressSummary from "./DeliveryAddressSummary";

interface Props {
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
