import { useFormContext } from "react-hook-form";
import SelectOption from "../../../components/Option/SelectOption";
import FormFieldCard from "./FormFieldCard";

const TypeFields = () => {
  const { control } = useFormContext();
  return (
    <FormFieldCard title="Select Type">
      <SelectOption
        name="type"
        control={control}
        options={[
          { value: "Sell", label: "Sell" },
          { value: "Buy", label: "Buy" },
          { value: "Hire", label: "Hire" },
          { value: "Job", label: "Job" },
        ]}
        placeholder="--Select a Type--"
        noOptionsMessage="No type found"
      />
    </FormFieldCard>
  );
};

export default TypeFields;
