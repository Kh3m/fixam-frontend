import { Controller, useFormContext } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { customNoOptionMessage } from "../../../components/Option/CustomNoOptionMesaage";
import FormFieldCard from "./FormFieldCard";

const FeaturesField = () => {
  const { control } = useFormContext();

  return (
    <FormFieldCard title="Feature List (optional)">
      <Controller
        name="features"
        control={control}
        render={({ field }) => (
          <CreatableSelect
            noOptionsMessage={() =>
              customNoOptionMessage("Enter Features and Create ")
            }
            isMulti
            {...field}
            name="features"
            placeholder="Add features for product"
          />
        )}
      />
    </FormFieldCard>
  );
};

export default FeaturesField;
