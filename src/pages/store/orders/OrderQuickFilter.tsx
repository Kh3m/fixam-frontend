import FilterButton from "./FilterButton";

export type DeliveryStatusFilteringType =
  | "All Order"
  | "Placed"
  | "Shipped"
  | "Delivered";

interface Props {
  status: DeliveryStatusFilteringType;
  handleStatusClick: (value: DeliveryStatusFilteringType) => void;
}

const OrderQuickFilter = ({ status, handleStatusClick }: Props) => {
  const deliveryStatus: DeliveryStatusFilteringType[] = [
    "All Order",
    "Placed",
    "Shipped",
    "Delivered",
  ];

  return (
    <div className="flex justify-between items-center">
      <div>
        {deliveryStatus.map((value) => (
          <FilterButton
            onClick={() => handleStatusClick(value)}
            isActive={status === value}
          >
            {value}
          </FilterButton>
        ))}
        {/* <FilterButton isActive={status === "All Order"}>All Order</FilterButton>
        <FilterButton isActive={status === "Placed"}>Placed</FilterButton>
        <FilterButton isActive={status === "Shipped"}>Shipped</FilterButton>
        <FilterButton isActive={status === "Delivered"}>Delivered</FilterButton> */}
      </div>

      {/* <div className="flex items-center space-x-2">
        <DatePicker />
        <span className="mx-2">To</span>
        <DatePicker />
      </div> */}
    </div>
  );
};

export default OrderQuickFilter;
