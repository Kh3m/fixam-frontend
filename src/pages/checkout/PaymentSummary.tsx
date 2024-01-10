import Button from "../../components/Button";
import { CiDeliveryTruck } from "react-icons/ci";

const PaymentSummary = () => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      {/* <IoCardSharp size={24} /> */}
      <CiDeliveryTruck size={24} />

      <Button variant="text">Pay on Delivery</Button>
      {/* <Button variant="text">Add new card</Button> */}
    </div>
  );
};

export default PaymentSummary;
