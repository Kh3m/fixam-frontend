import { useState } from "react";
import Button from "../Button";
import Space from "../Space";
import FilterCard from "./FilterCard";
import FilterListItem from "./FilterListItem";

const prices = [
  {
    category: "Under 24 K",
    count: "• 10 081 ads",
    selected: true,
  },
  {
    category: "24 - 80 K",
    count: "• 40 327 ads",
    selected: false,
  },
  {
    category: "80 - 270 K",
    count: "• 67 212 ads",
    selected: false,
  },
  {
    category: "270 - 950 K",
    count: "• 42 008 ads",
    selected: false,
  },
  {
    category: "More than 950 K",
    count: "• 8 401 ads",
    selected: false,
  },
];

interface Props {
  label: string;
  defaultValue: string;
}

const InputFilter = ({ label, defaultValue }: Props) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <label className="border border-fgrey px-4 py-2 block rounded-sm">
      <div className="text-xs mb-1">{label}</div>
      <input
        type="number"
        min={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-fgrey outline-1 outline-fgrey w-full p-2 text-sm"
      />
    </label>
  );
};

const PriceFilter = () => {
  return (
    <FilterCard filterTitle="Price, ₦">
      <div className="flex space-x-1">
        <InputFilter label="Min" defaultValue="" />
        <InputFilter label="Max" defaultValue="" />
      </div>
      <Space spacing="my-4" />
      <ul>
        {prices.map(({ category, count }) => (
          <FilterListItem
            isFor="price"
            text={category}
            count={count}
            variant="radio"
          />
        ))}
      </ul>
      <Space spacing="my-4" />
      <div className="flex justify-between">
        <Button variant="text" styles="text-fgrey text-xs">
          Clear
        </Button>
        <Button variant="text" styles="text-fyellow text-xs">
          Save
        </Button>
      </div>
    </FilterCard>
  );
};

export default PriceFilter;
