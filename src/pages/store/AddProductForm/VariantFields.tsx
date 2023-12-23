import { useFormContext, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import FormFieldCard from "./FormFieldCard";
import Button from "../../../components/Button";
import Space from "../../../components/Space";
import Input from "../../../components/Input";

const VariantFields = () => {
  const { control, setValue } = useFormContext();

  const handleAddVariant = () => {};

  const handleVariantChange = () => {};

  const handleOptionsAdded = () => {};

  return (
    <FormFieldCard title="Product Variant (optional)">
      <Space spacing="my-4" />
      <div>A variant...</div>
      <Space spacing="my-4" />
      <Space spacing="my-4" />
      <section>
        <Controller
          name="variant"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Name of Variant" />
          )}
        />

        <Space spacing="my-4" />
        <Controller
          name="options"
          control={control}
          render={({ field }) => (
            <CreatableSelect
              isMulti
              {...field}
              name="variants"
              options={[
                { value: "Khem", label: "Khem" },
                { value: "Love's", label: "Love's" },
                { value: "To", label: "To" },
                { value: "Code", label: "Code" },
              ]}
              placeholder="Add Options for Variant"
            />
          )}
        />
      </section>
      <Space spacing="my-4" />
      <Button variant="text" styles="text-fyellow">
        Add Variant
      </Button>
    </FormFieldCard>
  );
};

export default VariantFields;
