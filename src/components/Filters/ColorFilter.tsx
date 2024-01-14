import Collapsible from "../Collapsibles/Collapsible";
import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const colors = [
  {
    text: "Black",
    count: "• 24 445 ads",
    selected: true,
  },
  {
    text: "Blue",
    count: "• 4 035 ads",
    selected: true,
  },
  {
    text: "Brown",
    count: "• 13 356 ads",
    selected: true,
  },
  {
    text: "Gold",
    count: "• 8 411 ads",
    selected: true,
  },
  {
    text: "Gray",
    count: "• 6 431 ads",
    selected: true,
  },
  {
    text: "Green",
    count: "• 1 823 ads",
    selected: true,
  },
];

const ColorFilter = () => {
  return (
    <Collapsible headerName="Color">
      <FiltersWithInputField
        filters={colors}
        filterTitle="Color"
        inputType="text"
        variant="checkbox"
        placeholder="Find Color"
      />
      <Space spacing="my-4" />
    </Collapsible>
  );
};

export default ColorFilter;
