import { Controller, useFormContext, useWatch } from "react-hook-form";
import FixamSelect from "../../../components/FixamSelect";
import Input from "../../../components/Input";
import Space from "../../../components/Space";
import FormFieldCard from "./FormFieldCard";
import useProductVariants from "../../../hooks/products/useProductVariants";
import Spinner from "../../../components/Spinner";
import Center from "../../../components/Center";
import { FetchResponseType } from "../../../services/apiClient";
import { ProductVariantType } from "../../../services/product";

interface Props {
  // validateOptions: (value: string, message: string, index: number) => void;
}

const VariantFields = ({}: Props) => {
  const { control } = useFormContext();
  const variantValue = useWatch({ control, name: "variant" });

  const { data: productVariants, isLoading: isLoadingProductVariants } =
    useProductVariants();

  const validateOptions = (value: string, message: string) => {
    // Validate options field only if variant field is entered
    if (variantValue) {
      return value ? true : message;
    }
    // No variant entered, no need to validate options
    return true;
  };
  if (isLoadingProductVariants)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (productVariants)
    return (
      <>
        <Space spacing="my-4" />
        <FixamSelect
          type="creatable"
          name={"variant"}
          options={[
            { label: "None", value: "" },
            ...(
              productVariants as FetchResponseType<ProductVariantType>
            ).results.map((variant) => ({
              label: variant.name,
              value: variant.id,
            })),
          ]}
          placeholder="Select a Variant"
          shouldRemoveShadow
        />
        <Space spacing="my-4" />
        <section className="flex justify-between">
          <span className="w-1/2">
            <Input
              name={"option_value"}
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
          <span className="w-1/2 ml-4">
            <Input
              name={"option_price"}
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
          {/* <span className="w-1/3 ml-4">
          <Controller
            name={"option_image_" + index}
            control={control}
            render={({}) => <input type="file" placeholder="Name of Variant" />}
          />
        </span> */}
        </section>
        <Space spacing="my-4" />
      </>
    );
};

export default VariantFields;
