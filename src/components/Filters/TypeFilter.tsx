import Collapsible from "../Collapsibles/Collapsible";
import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const types = [
  {
    text: "Show all",
    count: "",
    selected: true,
  },
  {
    text: "Sale",
    count: "• 42 813 ads",
    selected: true,
  },
  {
    text: "Rent",
    count: "• 34 219 ads",
    selected: true,
  },
];

const TypeFilter = () => {
  return (
    <Collapsible headerName="Type">
      <FiltersWithInputField
        filters={types}
        filterTitle="Type"
        inputType="text"
        variant="radio"
        placeholder="Find Type"
      />
      <Space spacing="my-4" />
    </Collapsible>
  );
};

export default TypeFilter;
