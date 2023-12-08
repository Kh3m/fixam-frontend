import FilterCard from "./FilterCard";
import FilterListItem from "./FilterListItem";
import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const conditions = [
  {
    category: "Brand New",
    count: "• 157 905 ads",
    selected: true,
  },
  {
    category: "Used",
    count: "• 8 858 ads",
    selected: true,
  },
];

const ConditionFilter = () => {
  return (
    <>
      <FiltersWithInputField
        filters={conditions}
        filterTitle="Conditions"
        variant="checkbox"
      />
      <Space spacing="my-4" />
    </>
  );
};

export default ConditionFilter;
