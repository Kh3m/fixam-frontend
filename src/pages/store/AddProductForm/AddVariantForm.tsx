import { FieldValues, FormProvider, useForm } from "react-hook-form";
import FormFieldCard from "./FormFieldCard";
import VariantFields from "./VariantFields";
import Button from "../../../components/Button";
import { useState } from "react";
import useProductVariants from "../../../hooks/products/useProductVariants";
import { FetchResponseType, dummyApiClient } from "../../../services/apiClient";
import { ProductVariantType } from "../../../services/product";
import { productBaseURL } from "../../../services/baseURLs";
import { useLocation, useNavigate } from "react-router-dom";
import useVariantsForProduct from "../../../hooks/products/useVariantsForProduct";
import Heading from "../../../components/Heading";
import { formatPrice } from "../../../utils/number-formatter";
import Spinner from "../../../components/Spinner";
import Space from "../../../components/Space";
import { useQueryClient } from "@tanstack/react-query";

type VariantOptionType = {
  image: string[];
  value: string;
  price: string;
  variant: string;
  product: string;
};

type VarianType = {
  url: string;
  id: string;
  name: string;
  description: string;
};

interface Props {
  defaultStoreSlug: string;
  productId: string;
  productName: string;
  storeId: string;
}
const AddVariantForm = ({
  defaultStoreSlug,
  productId,
  productName,
  storeId,
}: Props) => {
  const navigate = useNavigate();

  const methods = useForm({});
  const [variantFields, setVariantFields] = useState<number>(1);

  const { data: productV, isLoading: isLoadingProductVariants } =
    useProductVariants();
  const { data: variantsForProduct, isLoading: isLoadingVariantsForProduct } =
    useVariantsForProduct(productId);

  const productVariants = productV as FetchResponseType<ProductVariantType>;

  const queryClient = useQueryClient();

  // const productImageMethods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = async (newVariantData: FieldValues) => {
    // Check if Variant is selected
    if (newVariantData.variant) {
      try {
        // TODO: Create variant only if is not available on the select option
        // const createdVariant = await dummyApiClient.post<VarianType>(
        //   `${productBaseURL}/products/variants/`,
        //   {
        //     name: newVariantData.variant,
        //     description: " Variant for " + newVariantData.variant,
        //   }
        // );

        // if (createdVariant.status == 201) {
        //   // Variant is successfully created.
        //   console.log("Variant is successfully created.", createdVariant);
        //   // Create options for variant
        //   const variantVariables = {
        //     value: newVariantData.option_value,
        //     price: newVariantData.option_price,
        //     variant: createdVariant.data.id,
        //     product: productId,
        //   };

        //   const createdOption = await dummyApiClient.post(
        //     `${productBaseURL}/products/variants/`,
        //     {
        //       name: newVariantData.variant,
        //       description: " Variant for " + newVariantData.variant,
        //     }
        //   );
        // }

        console.log("newVariantData.variant", newVariantData.variant);
        // Create options for variant
        const optionVariables = {
          value: newVariantData.option_value,
          price: newVariantData.option_price,
          variant: newVariantData.variant,
          product: productId,
        };

        const createdOption = await dummyApiClient.post<VariantOptionType>(
          `${productBaseURL}/products/options/`,
          optionVariables
        );

        console.log("createdOption", createdOption);
        queryClient.invalidateQueries({
          queryKey: ["products", "store", storeId],
        });
        navigate(`/stores/${defaultStoreSlug}/products`);
      } catch (error) {
        console.log("Something went wrong creating variant/option", error);
      } // Find store and use slug to navigate
    }
  };

  if (isLoadingVariantsForProduct) return <Spinner />;

  return (
    <>
      <Heading variant="h3">
        Add a variant for
        <span className="font-semibold">{productName}</span>
      </Heading>
      <Space spacing="my-8" />
      <FormFieldCard title="Product Variant (optional)">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VariantFields />
            <Button
              variant="text"
              styles="text-fyellow border-2 border-fyellow-shades-200 px-2"
              onClick={() => setVariantFields(variantFields + 1)}
            >
              Add a Variant
            </Button>
            <Button
              variant="text"
              styles="text-gray-600 ml-4 border-2 border-gray-200 px-2"
              onClick={() => setVariantFields(variantFields + 1)}
            >
              Skip
            </Button>
          </form>
        </FormProvider>

        {isLoadingVariantsForProduct && <Spinner />}

        {/* TODO: List the variants */}
        {/* {!isLoadingProductVariants &&
          variantsForProduct &&
          variantsForProduct.map((variant) => (
            <ul className="my-4">
              <li className="font-semibold">Variant: Size</li>
              <ul className="ml-2">
                <li>Option Value: XL</li>
                <li>Option Price: {formatPrice(3434.34)}</li>
              </ul>
            </ul>
          ))} */}
      </FormFieldCard>
    </>
  );
};

export default AddVariantForm;
