import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";
import { OptionType } from "../utils/types";
import { Controller, useFormContext } from "react-hook-form";

const customStyles: StylesConfig<OptionType> = {
  control: (base) => ({
    ...base,
    minHeight: "100%",
    // fontSize: "12px",
    fontWeight: "600",
    color: "#616161",
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
  }),

  menuList: (base) => ({
    ...base,
    // fontSize: "12px",
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
  options: OptionType[];
  placeholder?: string;
  name: string;
}

const FixamSelect = ({ options, name, placeholder }: Props) => {
  const { setValue } = useFormContext();

  const handleOptionSelect = (
    selected: SingleValue<OptionType> | MultiValue<OptionType>
  ) => {
    setValue(name, (selected as OptionType).value);
  };

  return (
    <Controller
      name={name}
      render={() => (
        <Select
          styles={customStyles}
          options={options}
          className="w-full"
          placeholder={placeholder}
          name={name}
          onChange={(
            newValue: SingleValue<OptionType> | MultiValue<OptionType>,
            _: ActionMeta<OptionType>
          ) => {
            handleOptionSelect(newValue);
          }}
        />
      )}
    />
  );
};

export default FixamSelect;
