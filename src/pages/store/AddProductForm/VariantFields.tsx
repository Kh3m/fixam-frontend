import { Controller, useFormContext } from "react-hook-form";
import FixamSelect from "../../../components/FixamSelect";
import Input from "../../../components/Input";
import Space from "../../../components/Space";
import FormFieldCard from "./FormFieldCard";

interface Props {
  validateOptions: (value: string, message: string) => void;
}

const VariantFields = ({ validateOptions }: Props) => {
  const { control } = useFormContext();

  return (
    <FormFieldCard title="Product Variant (optional)">
      <Space spacing="my-4" />
      <FixamSelect
        name="variant"
        options={[
          { value: "", label: "None" },
          { value: "Size", label: "Size" },
          { value: "Color", label: "Color" },
          { value: "Material", label: "Material" },
        ]}
        placeholder="Select a Variant"
        shouldRemoveShadow
      />
      <Space spacing="my-4" />
      <section className="flex justify-between">
        <span className="w-1/3">
          <Input
            name="option_value"
            rules={{
              validate: (value: string) =>
                validateOptions(
                  value,
                  "Value is required when a variant is selected"
                ),
            }}
            control={control}
            placeholder="Enter Value"
          />
        </span>
        <span className="w-1/3 ml-4">
          <Input
            name="option_price"
            rules={{
              validate: (value: string) =>
                validateOptions(
                  value,
                  "Price is required when a variant is selected"
                ),
            }}
            control={control}
            placeholder="Enter Price"
          />
        </span>
        <span className="w-1/3 ml-4">
          <Controller
            name="option_image"
            control={control}
            render={({}) => <input type="file" placeholder="Name of Variant" />}
          />
        </span>
      </section>
      <Space spacing="my-4" />
      {/* <Button variant="text" styles="text-fyellow">
        Add Variant
      </Button> */}
    </FormFieldCard>
  );
};

export default VariantFields;
