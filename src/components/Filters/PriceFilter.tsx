import { ChangeEvent, useState } from "react";
import Button from "../Button";
import Space from "../Space";
import FilterListItem from "./FilterListItem";
import Collapsible from "../Collapsibles/Collapsible";
import RadioButton from "../RadioButton";
import { useProductFilteringContext } from "../../contexts/product-filtering-context";

type PriceFilteringType = {
  text: string;
  // | "Under 24 K"
  // | "24 - 80 K"
  // | "80 - 270 K"
  // | "270 - 950 K"
  // | "More than 950 K";
  selected: boolean;
};

const prices: PriceFilteringType[] = [
  {
    text: "Under 24 K",
    // count: "• 10 081 ads",
    selected: true,
  },
  {
    text: "24 - 80 K",
    // count: "• 40 327 ads",
    selected: false,
  },
  {
    text: "80 - 270 K",
    // count: "• 67 212 ads",
    selected: false,
  },
  {
    text: "270 - 950 K",
    // count: "• 42 008 ads",
    selected: false,
  },
  {
    text: "More than 950 K",
    // count: "• 8 401 ads",
    selected: false,
  },
];

interface Props {
  label: string;
  value: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputFilter = ({ label, value, onChange }: Props) => {
  return (
    <label className="border border-fgrey px-4 py-2 block rounded-sm">
      <div className="text-xs mb-1">{label}</div>
      <input
        type="number"
        min={1}
        value={value}
        onChange={onChange}
        className="border border-fgrey outline-1 outline-fgrey w-full p-2 text-sm"
      />
    </label>
  );
};

const PriceFilter = () => {
  const {
    setMaxPrice,
    setMinPrice,
    filteringState: { priceRange, minPrice, maxPrice },
  } = useProductFilteringContext();

  const handleRadioPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    console.log("PRICE FILTERING CHANGED", value);
    switch (value) {
      case "Under 24 K": {
        setMinPrice(0);
        setMaxPrice(24_000);
        break;
      }
      case "24 - 80 K": {
        setMinPrice(24_000);
        setMaxPrice(80_000);
        break;
      }
      case "80 - 270 K": {
        setMinPrice(80_000);
        setMaxPrice(270_000);
        break;
      }
      case "270 - 950 K": {
        setMinPrice(270_000);
        setMaxPrice(950_000);
        break;
      }
      case "More than 950 K": {
        setMinPrice(950_000);
        setMaxPrice(950_000 + 1);
        break;
      }
    }
  };

  const handleNumberInputPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handleNumberInputPriceChange", e.target.value, e.target.name);
    if (e.target.name === "Min") setMinPrice(Number.parseInt(e.target.value));
    if (e.target.name === "Max") setMaxPrice(Number.parseInt(e.target.value));
  };

  return (
    <Collapsible headerName="Price, ₦">
      <div className="flex space-x-1">
        <InputFilter
          label="Min"
          value={minPrice || 0}
          onChange={handleNumberInputPriceChange}
        />
        <InputFilter
          label="Max"
          value={maxPrice || 0}
          onChange={handleNumberInputPriceChange}
        />
      </div>
      <Space spacing="my-4" />
      <ul>
        {prices.map(({ text }) => (
          <li className="text-sm my-2 cursor-pointer dark:text-white">
            <RadioButton
              text={text}
              radioFor="price"
              value={text}
              onChange={handleRadioPriceChange}
            />
            {/* <span className="text-fgrey"> {count}</span> */}
          </li>
          // <FilterListItem
          //   isFor="price"
          //   text={category}
          //   count={count}
          //   variant="radio"
          // />
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
    </Collapsible>
  );
};

export default PriceFilter;
