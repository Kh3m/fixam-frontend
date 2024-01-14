import Collapsible from "../Collapsibles/Collapsible";
import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const rooms = [
  {
    text: "Show all",
    count: "",
    selected: true,
  },
  {
    text: "Yes",
    count: "• 471 ads",
    selected: true,
  },
  {
    text: "No",
    count: "• 167 561 ads",
    selected: true,
  },
];

const BulkPriceFilter = () => {
  return (
    <Collapsible headerName="Bulk Price">
      <FiltersWithInputField
        filters={rooms}
        filterTitle="Bulk Price"
        variant="radio"
      />
      <Space spacing="my-4" />
    </Collapsible>
  );
};

export default BulkPriceFilter;
