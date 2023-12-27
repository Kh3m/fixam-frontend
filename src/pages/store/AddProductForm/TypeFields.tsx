import { useFormContext } from "react-hook-form";
import SelectOption from "../../../components/Option/SelectOption";
import FormFieldCard from "./FormFieldCard";
import { ActionMeta, MultiValue, SingleValue } from "react-select";
import { OptionType } from "./CategoryFields";

const TypeFields = () => {
  const { control, setValue } = useFormContext();

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
        options={[
          { value: "sale", label: "Sale" },
          { value: "rent", label: "Rent" },
          { value: "Hire", label: "Hire" },
          { value: "Job", label: "Job" },
        ]}
        placeholder="--Select a Type--"
        noOptionsMessage="No type found"
        onChange={handleCatSelect}
      />
    </FormFieldCard>
  );
};

export default TypeFields;
