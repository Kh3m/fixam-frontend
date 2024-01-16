import FilterListItem from "./FilterListItem";
import Space from "../Space";
import { ChangeEvent } from "react";

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
  onRadioChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputType?: "number" | "text";
  variant?: "radio" | "checkbox";
  readOnly?: boolean;
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
  onRadioChange,
}: Props) => {
  let Input =
    inputType === "number" ? (
      <label className="border border-fgrey px-4 py-2 block rounded-sm">
        <div className="text-xs mb-1">{label}</div>
        <input
          // readOnly={readOnly}
          type="number"
          min={1}
          value={defaultValue}
          placeholder={placeholder}
          // onChange={onChange}
          className="border border-fgrey outline-1 outline-fgrey w-full p-2 text-sm"
        />
      </label>
    ) : inputType === "text" ? (
      <div className="flex space-x-1">
        <input
          // readOnly={readOnly}
          value={defaultValue}
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
            radioValue={defaultValue}
            onRadioChange={onRadioChange}
          />
        ))}
      </ul>
      <Space spacing="my-4" />
    </>
  );
};

export default FiltersWithInputField;
