import { useFormContext } from "react-hook-form";
import SelectOption from "../../../components/Option/SelectOption";
import FormFieldCard from "./FormFieldCard";
import { ActionMeta, MultiValue, SingleValue } from "react-select";
import capitalize from "../../../utils/capitalize";
import { OptionType } from "../../../utils/types";

interface Props {
  defaultTypeValue?: string;
}

const TypeFields = ({ defaultTypeValue }: Props) => {
  const { control, setValue } = useFormContext();

  const options = [
    { value: "sale", label: "Sale" },
    { value: "rent", label: "Rent" },
  ];

  if (defaultTypeValue) {
    setValue("type", defaultTypeValue);
  }

  const handleCatSelect = async (
    selected: SingleValue<OptionType> | MultiValue<OptionType>,
    _: ActionMeta<OptionType>
  ) => {
    setValue("type", (selected as OptionType).value);
  };

  return (
    <FormFieldCard title="Select Type">
      <SelectOption
        name="type"
        control={control}
        options={options}
        defaultValue={{
          label: defaultTypeValue
            ? capitalize(defaultTypeValue)
            : "--Select a Type--",
          value: defaultTypeValue || "",
        }}
        placeholder="--Select a Type--"
        noOptionsMessage="No type found"
        onChange={handleCatSelect}
      />
    </FormFieldCard>
  );
};

export default TypeFields;
