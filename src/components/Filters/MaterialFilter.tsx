import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const materials = [
  {
    category: "Fabric",
    count: "• 18 880 ads",
    selected: true,
  },
  {
    category: "Leather",
    count: "• 15 379 ads",
    selected: true,
  },
  {
    category: "Marble",
    count: "• 8 896 ads",
    selected: true,
  },
  {
    category: "MDF",
    count: "• 7 413 ads",
    selected: true,
  },
  {
    category: "Wood",
    count: "• 25 894 ads",
    selected: true,
  },
  {
    category: "ABS",
    count: "• 256 ads",
    selected: true,
  },
];

const MaterialFilter = () => {
  return (
    <>
      <FiltersWithInputField
        filters={materials}
        filterTitle="Material"
        inputType="text"
        variant="checkbox"
        placeholder="Find Material"
      />
      <Space spacing="my-4" />
    </>
  );
};

export default MaterialFilter;
