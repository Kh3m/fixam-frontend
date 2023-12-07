import FilterCard from "./FilterCard";
import FilterListItem from "./FilterListItem";
import Space from "../Space";

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
    <FilterCard filterBy="Condition">
      <ul>
        {conditions.map(({ category, count }) => (
          <FilterListItem
            isFor="condition"
            text={category}
            count={count}
            variant="checkbox"
          />
        ))}
      </ul>
      <Space spacing="my-4" />
    </FilterCard>
  );
};

export default ConditionFilter;
