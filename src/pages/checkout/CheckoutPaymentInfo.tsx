import CheckoutPaymentForm from "./CheckoutPaymentForm";
import PaymentSummary from "./PaymentSummary";

interface Props {
  changeDefault: boolean;
  handleCancel: () => void;
}

const CheckoutPaymentInfo = ({ changeDefault, handleCancel }: Props) => {
  return (
    <>
      {!changeDefault && <PaymentSummary />}
      {changeDefault && <CheckoutPaymentForm handleCancel={handleCancel} />}
    </>
  );
};

export default CheckoutPaymentInfo;
