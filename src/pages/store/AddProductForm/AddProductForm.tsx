import { Fragment } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import CategoryFields from "./CategoryFields";
import FeaturesField from "./FeaturesField";
import ProductImageUpload from "./ProductImageUpload";
import ProductInfoFields from "./ProductInfoFields";
import TypeFields from "./TypeFields";

const AddProductForm = () => {
  const methods = useForm();
  // const productImageMethods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = () => {};
  return (
    <Fragment>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading variant="h3">Add a product</Heading>
          <Space spacing="my-8" />
          <TypeFields />
          <Space spacing="my-8" />
          <CategoryFields />
          <Space spacing="my-8" />
          <ProductInfoFields />
          <Space spacing="my-8" />
          <FeaturesField /> <Space spacing="my-8" />
          <Space spacing="my-8" />
          <ProductImageUpload />
          <Space spacing="my-8" />
          <Button
            variant="elevated"
            styles="bg-fyellow text-white font-semibold text-lg pagination-shadow"
          >
            Submit
          </Button>
        </form>
        {/* <Space spacing="my-8" />
          <VariantFields /> */}
      </FormProvider>

      {/* <FormProvider {...productImageMethods}>
        <form>
          <Space spacing="my-8" />
          <ProductImageUpload />
          <Space spacing="my-8" />
          <Button
            variant="elevated"
            styles="bg-fyellow text-white font-semibold text-lg pagination-shadow text-xs"
          >
            Add Product Photos
          </Button>
        </form>
      </FormProvider> */}
    </Fragment>
  );
};

export default AddProductForm;
