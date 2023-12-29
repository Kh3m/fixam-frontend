import DatePicker from "../../../components/DatePicker";
import FilterButton from "./FilterButton";

const OrderQuickFilter = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <FilterButton isActive>All Order</FilterButton>
        <FilterButton>Completed</FilterButton>
        <FilterButton>Cancelled</FilterButton>
      </div>

      <div className="flex items-center space-x-2">
        <DatePicker />
        <span className="mx-2">To</span>
        <DatePicker />
      </div>
    </div>
  );
};

export default OrderQuickFilter;
