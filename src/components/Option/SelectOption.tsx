import { Control, Controller, FieldValues } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
import { customNoOptionMessage } from "./CustomNoOptionMesaage";

type OptionsType = {
  value: string;
  label: string;
};

interface Props {
  options: OptionsType[];
  placeholder: string;
  name: string;
  control: Control<FieldValues>;
  noOptionsMessage: string;
  onChange?: (seleted: OptionsType) => void;
}

const styles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? "1px solid #FF9900" : "1px solid #c1c1c1",
    outline: state.isFocused ? "1px solid #FF9900" : "0",
    "&:hover": {
      border: "1px solid #FF9900",
      cursor: "pointer",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#4054B2" : provided.backgroundColor,
    borderRadius: state.isSelected ? "4px" : "4px",
    "&:hover": {
      border: "1px solid #FF9900",
      backgroundColor: "#FF9900",
      color: "#FFF",
      borderRadius: "4px",
      cursor: "pointer",
    },
  }),
};

const SelectOption = ({
  options,
  name,
  control,
  noOptionsMessage,
  placeholder,
  onChange,
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <Select
          options={options}
          styles={styles}
          placeholder={placeholder}
          noOptionsMessage={() => customNoOptionMessage(noOptionsMessage)}
          // TODO: Fix later
          onChange={onChange}
        />
      )}
    />
  );
};

export default SelectOption;
