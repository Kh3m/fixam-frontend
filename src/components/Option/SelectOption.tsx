import { Control, Controller, FieldValues } from "react-hook-form";
import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";

import { customNoOptionMessage } from "./CustomNoOptionMesaage";
import { OptionType } from "../../utils/types";

type OptionsType = {
  value: string;
  label: string;
};

interface Props {
  options: OptionsType[];
  defaultValue?: OptionType;
  placeholder: string;
  name: string;
  control: Control<FieldValues>;
  noOptionsMessage: string;
  onChange?: (
    newValue: SingleValue<OptionType> | MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => void;
}

const styles: StylesConfig<OptionType> = {
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
  defaultValue,
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
          name={name}
          defaultValue={defaultValue}
        />
      )}
    />
  );
};

export default SelectOption;
