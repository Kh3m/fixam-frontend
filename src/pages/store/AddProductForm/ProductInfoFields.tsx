import { useFormContext } from "react-hook-form";
import Input from "../../../components/Input";
import Space from "../../../components/Space";
import FormFieldCard from "./FormFieldCard";
import { wordCountValidation } from "../../../utils/validationRules";

const ProductInfoFields = () => {
  const { control } = useFormContext();

  return (
    <FormFieldCard title="Product Information">
      <Input
        rules={{
          required: "Product name is required",
          minLength: { value: 3, message: "Should be atleast 3 characters" },
        }}
        control={control}
        name="name"
        placeholder="Enter product name"
      />
      <Space spacing="my-4" />
      <Input
        rules={{
          required: "Product price is required",
          min: { value: 0, message: "Should not be less than 0" },
        }}
        name="price"
        control={control}
        placeholder="Enter product price"
        type="number"
        min="0"
      />
      <Space spacing="my-4" />
      <Input
        name="description"
        control={control}
        rules={{
          required: "Product name is required",
          validate: wordCountValidation,
        }}
        placeholder="In 50-250 words tell us about the product"
        hint="Word limit 50-250"
        isTextArea
      />
    </FormFieldCard>
  );
};

export default ProductInfoFields;
