import Space from "../Space";
import CategoryFilter from "./CategoryFilter";
import ConditionFilter from "./ConditionFilter";
import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import TypeFilter from "./TypeFilter";

const Filters = () => {
  return (
    <div>
      <CategoryFilter />
      <Space spacing="my-4" />
      <LocationFilter />
      <Space spacing="my-4" />
      <PriceFilter />
      <Space spacing="my-4" />
      <TypeFilter />
      <Space spacing="my-4" />
      <ConditionFilter />
      <Space spacing="my-4" />
    </div>
  );
};

export default Filters;
