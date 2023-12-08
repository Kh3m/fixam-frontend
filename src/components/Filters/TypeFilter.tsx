import FilterCard from "./FilterCard";
import Space from "../Space";
import FilterListItem from "./FilterListItem";

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
    <FilterCard filterBy="Type">
      <div className="flex space-x-1">
        <input
          className="border border-fgrey outline-1 outline-fgrey w-full p-2 text-sm "
          placeholder="Find Type"
        />
      </div>
      <Space spacing="my-4" />
      <ul>
        {types.map(({ category, count }) => (
          <FilterListItem
            isFor={"type"}
            text={category}
            count={count}
            variant="radio"
          />
        ))}
      </ul>
      <Space spacing="my-4" />
    </FilterCard>
  );
};

export default TypeFilter;
