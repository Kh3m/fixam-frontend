import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const types = [
  {
    category: "Show all",
    count: "",
    selected: true,
  },
  {
    category: "Chairs",
    count: "• 42 813 ads",
    selected: true,
  },
  {
    category: "Tables",
    count: "• 34 219 ads",
    selected: true,
  },
  {
    category: "Sofas ",
    count: "• 18 257 ads",
    selected: true,
  },
  {
    category: "Beds & Bed Frames",
    count: "• 12 515 ads",
    selected: true,
  },
  {
    category: "TV Stands & Mounts",
    count: "• 7 505 ads",
    selected: true,
  },
];

const TypeFilter = () => {
  return (
    <>
      <FiltersWithInputField
        filters={types}
        filterTitle="Type"
        inputType="text"
        variant="radio"
        placeholder="Find Type"
      />
      <Space spacing="my-4" />
    </>
  );
};

export default TypeFilter;
