import Collapsible from "../Collapsibles/Collapsible";
import Space from "../Space";
import FiltersWithInputField from "./FiltersWithInputField";

const conditions = [
  {
    text: "Brand New",
    count: "• 157 905 ads",
    selected: true,
  },
  {
    text: "Used",
    count: "• 8 858 ads",
    selected: true,
  },
];

const ConditionFilter = () => {
  return (
    <Collapsible headerName="Condition">
      <FiltersWithInputField
        filters={conditions}
        filterTitle="Conditions"
        variant="checkbox"
      />
      <Space spacing="my-4" />
    </Collapsible>
  );
};

export default ConditionFilter;
