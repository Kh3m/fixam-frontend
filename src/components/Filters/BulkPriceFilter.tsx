import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const rooms = [
  {
    category: "Show all",
    count: "",
    selected: true,
  },
  {
    category: "Yes",
    count: "• 471 ads",
    selected: true,
  },
  {
    category: "No",
    count: "• 167 561 ads",
    selected: true,
  },
];

const BulkPriceFilter = () => {
  return (
    <>
      <FiltersWithInputField
        filters={rooms}
        filterTitle="Bulk Price"
        variant="radio"
      />
      <Space spacing="my-4" />
    </>
  );
};

export default BulkPriceFilter;
