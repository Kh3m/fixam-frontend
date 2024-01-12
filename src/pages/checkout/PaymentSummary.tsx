import Button from "../../components/Button";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCardSharp } from "react-icons/io5";
import RadioButton from "../../components/RadioButton";
import { useCheckoutContext } from "../../contexts/checkout-context";

const PaymentSummary = () => {
  const {
    setPaymentMethod,
    checkoutState: { paymentMethod },
  } = useCheckoutContext();

  return (
    <div className="flex flex-col justify-center space-y-4 mb-4">
      <RadioButton
        onChange={(e) => setPaymentMethod(e.target.value)}
        checked={paymentMethod === "pay with card"}
        value="pay with card"
        radioFor={"payment_method"}
      >
        <div className="flex space-x-2">
          <IoCardSharp size={24} />
          <Button variant="text">Pay with card</Button>
        </div>
      </RadioButton>

      <RadioButton
        onChange={(e) => setPaymentMethod(e.target.value)}
        checked={paymentMethod === "pay on delivery"}
        value="pay on delivery"
        radioFor={"payment_method"}
      >
        <div className="flex space-x-2">
          <CiDeliveryTruck size={24} />
          <Button variant="text">Pay on delivery</Button>
        </div>
      </RadioButton>

      {/* <Button variant="text">Add new card</Button> */}
    </div>
  );
};

export default PaymentSummary;
