import { useState } from "react";
import Button from "../Button";
import Collapsible from "../Collapsibles/Collapsible";
import FilterListItem from "./FilterListItem";

const CategoryFilter = () => {
  const [categories, _] = useState([
    {
      category: "Furniture",
      count: "| 168016",
      selected: true,
    },
    {
      category: "Garden Supplies",
      count: "| 12700",
      selected: false,
    },
    {
      category: "Home Accessories",
      count: "| 108071",
      selected: false,
    },
    {
      category: "Home Appliances",
      count: "| 48804",
      selected: false,
    },
    {
      category: "Furniture",
      count: "| 168016",
      selected: false,
    },
    {
      category: "Home Appliances",
      count: "| 48804",
      selected: false,
    },
    {
      category: "Furniture",
      count: "| 168016",
      selected: false,
    },
    {
      category: "Garden Supplies",
      count: "| 12700",
      selected: false,
    },
    {
      category: "Furniture",
      count: "| 168016",
      selected: false,
    },
  ]);

  const [sliceLen, setSliceLen] = useState(4);

  return (
    <Collapsible headerName="Categories">
      <h3 className="text-sm">Home, Furniture & Appliances</h3>
      <ul className="ml-4">
        {categories.slice(0, sliceLen).map(({ category, count, selected }) => (
          <FilterListItem
            isFor="categories"
            text={category}
            count={count}
            selected={selected}
          />
        ))}
        <Button
          onClick={() => {
            if (sliceLen === categories.length) {
              setSliceLen(4);
            } else {
              setSliceLen(categories.length);
            }
          }}
          styles="border-b-2 border-dotted border-fyellow text-fyellow text-sm"
        >
          {sliceLen === categories.length
            ? "Show less"
            : "Show all " + (categories.length - 4)}
        </Button>
      </ul>
    </Collapsible>
  );
};

export default CategoryFilter;
