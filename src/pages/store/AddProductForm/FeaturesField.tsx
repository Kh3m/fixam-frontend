import { Controller, useFormContext } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { customNoOptionMessage } from "../../../components/Option/CustomNoOptionMesaage";
import FormFieldCard from "./FormFieldCard";
import { OptionType } from "../../../utils/types";

interface Props {
  defaultFeatures?: OptionType[];
}
const FeaturesField = ({ defaultFeatures }: Props) => {
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
            defaultValue={defaultFeatures}
          />
        )}
      />
    </FormFieldCard>
  );
};

export default FeaturesField;
