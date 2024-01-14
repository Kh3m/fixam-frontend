import Card from "../../components/Card";
import Space from "../../components/Space";
import CheckoutHeader from "./CheckoutHeader";
import PaymentSummary from "./PaymentSummary";

interface Props {}

const CheckoutPaymentInfo = ({}: Props) => {
  return (
    <Card>
      <div className="px-4">
        <CheckoutHeader heading="PAYMENT METHOD" />
        <Space spacing="my-4" />
        <PaymentSummary />
        {/* {changeDefault && <CheckoutPaymentForm handleCancel={handleCancel} />} */}
      </div>
    </Card>
  );
};

export default CheckoutPaymentInfo;
