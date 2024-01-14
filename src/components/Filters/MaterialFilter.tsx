import Collapsible from "../Collapsibles/Collapsible";
import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const materials = [
  {
    text: "Fabric",
    count: "• 18 880 ads",
    selected: true,
  },
  {
    text: "Leather",
    count: "• 15 379 ads",
    selected: true,
  },
  {
    text: "Marble",
    count: "• 8 896 ads",
    selected: true,
  },
  {
    text: "MDF",
    count: "• 7 413 ads",
    selected: true,
  },
  {
    text: "Wood",
    count: "• 25 894 ads",
    selected: true,
  },
  {
    text: "ABS",
    count: "• 256 ads",
    selected: true,
  },
];

const MaterialFilter = () => {
  return (
    <Collapsible headerName="Material">
      <FiltersWithInputField
        filters={materials}
        filterTitle="Material"
        inputType="text"
        variant="checkbox"
        placeholder="Find Material"
      />
      <Space spacing="my-4" />
    </Collapsible>
  );
};

export default MaterialFilter;
