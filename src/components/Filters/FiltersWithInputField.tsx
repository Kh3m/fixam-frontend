import FilterListItem from "./FilterListItem";
import Space from "../Space";
import { useState } from "react";

type FilterType = {
  text: string;
  count: string | number;
  selected: boolean;
};

interface Props {
  filters: FilterType[];
  filterTitle: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  inputType?: "number" | "text";
  variant?: "radio" | "checkbox";
}

/**
 *
 * @param inputType - the type of input field to create if filter has one
 * @returns Component
 */

const FiltersWithInputField = ({
  filters,
  filterTitle,
  label,
  defaultValue,
  inputType,
  placeholder,
  variant,
}: Props) => {
  const [value, setValue] = useState(defaultValue);
  let Input =
    inputType === "number" ? (
      <label className="border border-fgrey px-4 py-2 block rounded-sm">
        <div className="text-xs mb-1">{label}</div>
        <input
          type="number"
          min={1}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className="border border-fgrey outline-1 outline-fgrey w-full p-2 text-sm"
        />
      </label>
    ) : inputType === "text" ? (
      <div className="flex space-x-1">
        <input
          className="border border-fgrey outline-1 outline-fgrey w-full p-2 text-sm "
          placeholder={placeholder}
        />
      </div>
    ) : null;

  return (
    <>
      {Input}
      <Space spacing="my-4" />
      <ul>
        {filters.map(({ text, count }) => (
          <FilterListItem
            isFor={filterTitle}
            text={text}
            count={count}
            variant={variant}
          />
        ))}
      </ul>
      <Space spacing="my-4" />
    </>
  );
};

export default FiltersWithInputField;
