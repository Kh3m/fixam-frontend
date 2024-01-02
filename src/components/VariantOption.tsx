import { useState } from "react";
import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";
import { OptionType } from "../utils/types";

const customStyles: StylesConfig<OptionType> = {
  control: (base) => ({
    ...base,
    height: "24px",
    minHeight: "20px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#616161",
    width: "fit-content",
    border: "0",
    borderRadius: "6px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    paddingRight: "5px",
  }),

  indicatorsContainer: (base) => ({
    ...base,
    padding: 0,
    margin: 0,
  }),

  dropdownIndicator: (base) => ({
    ...base,
    padding: 0,
    margin: 0,
    color: "#616161",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  menu: (base) => ({
    ...base,
    width: "100%",
    fontSize: "12px",
    top: "16px",
  }),

  menuList: (base) => ({
    ...base,
    fontSize: "12px",
  }),

  option: (base, props) => ({
    ...base,
    backgroundColor: props.isSelected ? "#FF9900" : "",
    ":hover": {
      background: props.isSelected ? "#FF9900" : "#ffe685",
      color: props.isSelected ? "white" : "black",
    },
  }),
};

interface Props {
  variant: string;
  options: OptionType[];
  defaultSelectValue: OptionType;
}
const VariantOption = ({ variant, options, defaultSelectValue }: Props) => {
  const [selectedOption, setSelectedOption] = useState<OptionType>({
    value: defaultSelectValue.value,
    label: `${variant}: ${defaultSelectValue.value}`,
  });

  const handleChange = (
    newValue: MultiValue<OptionType> | SingleValue<OptionType>,
    _: ActionMeta<OptionType>
  ) => {
    console.log(newValue);
    setSelectedOption({
      value: (newValue as OptionType).value,
      label: `${variant}: ${(newValue as OptionType).label}`,
    });
  };
  return (
    <Select
      styles={customStyles}
      className="no-scrollbar"
      onChange={handleChange}
      value={selectedOption}
      defaultValue={defaultSelectValue}
      options={options}
      isSearchable
    />
  );
};

export default VariantOption;
