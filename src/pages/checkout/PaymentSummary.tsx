import { IoCardSharp } from "react-icons/io5";
import Button from "../../components/Button";

const PaymentSummary = () => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <IoCardSharp size={24} />
      <Button variant="text">Add new card</Button>
    </div>
  );
};

export default PaymentSummary;
