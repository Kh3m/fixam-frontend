import { Controller, useFormContext } from "react-hook-form";
import Input from "../../../components/Input";
import Space from "../../../components/Space";
import FormFieldCard from "./FormFieldCard";
import { wordCountValidation } from "../../../utils/validationRules";

const ProductInfoFields = () => {
  const { control } = useFormContext();

  return (
    <FormFieldCard title="Product Information">
      <Controller
        control={control}
        rules={{
          required: "Product name is required",
          minLength: { value: 3, message: "Should be atleast 3 characters" },
        }}
        name="name"
        render={({ fieldState, field }) => (
          <Input
            {...field}
            placeholder="Enter product name"
            fieldState={fieldState}
          />
        )}
      />
      <Space spacing="my-4" />
      <Controller
        control={control}
        rules={{
          required: "Product price is required",
          min: { value: 0, message: "Should not be less than 0" },
        }}
        name="price"
        render={({ fieldState, field }) => (
          <Input
            {...field}
            fieldState={fieldState}
            placeholder="Enter product price"
            type="number"
          />
        )}
      />
      <Space spacing="my-4" />
      <Controller
        control={control}
        rules={{
          required: "Product name is required",
          validate: wordCountValidation,
        }}
        name="description"
        render={({ fieldState, field }) => (
          <Input
            {...field}
            fieldState={fieldState}
            placeholder="In 50-250 words tell us about the product"
            isTextArea
            hint="Word limit 50-250"
          />
        )}
      />
    </FormFieldCard>
  );
};

export default ProductInfoFields;
