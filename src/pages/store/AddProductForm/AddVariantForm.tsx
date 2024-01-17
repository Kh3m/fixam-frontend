import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import Spinner from "../../../components/Spinner";
import useProductVariants from "../../../hooks/products/useProductVariants";
import useVariantsForProduct from "../../../hooks/products/useVariantsForProduct";
import FormFieldCard from "./FormFieldCard";
import VariantFields from "./VariantFields";
import apiClient from "../../../services/apiClient";
import useAuth from "../../../hooks/useAuth";
import useProduct from "../../../hooks/products/useProduct";

type VariantOptionType = {
  image: string[];
  value: string;
  price: string;
  variant: string;
  product: string;
};

// type VarianType = {
//   url: string;
//   id: string;
//   name: string;
//   description: string;
// };

interface Props {}
const AddVariantForm = ({}: Props) => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const methods = useForm({});
  const [variantFields, setVariantFields] = useState<number>(1);

  const { userInfo, isAuthenticated, userStores } = useAuth();
  const { data: product, isLoading: isLoadingProduct } = useProduct(
    productId || ""
  );

  // const { data: productV, isLoading: isLoadingProductVariants } =
  useProductVariants();
  const { data: _, isLoading: isLoadingVariantsForProduct } =
    useVariantsForProduct(productId || "");

  const queryClient = useQueryClient();

  // const productImageMethods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = async (newVariantData: FieldValues) => {
    if (userStores) {
      const getLastStoreIndex = userStores.length - 1;
      const defaultStoreSlug = userStores[getLastStoreIndex].slug;
      const defaultStoreId = userStores[getLastStoreIndex].id;

      if (userInfo?.user?.id && isAuthenticated()) {
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

            const createdOption = await apiClient.post<VariantOptionType>(
              `/products/options/`,
              optionVariables
            );

            console.log("createdOption", createdOption);
            queryClient.invalidateQueries({
              queryKey: ["products", "store", defaultStoreId],
            });
            navigate(`/stores/${defaultStoreSlug}/products`);
          } catch (error) {
            console.log("Something went wrong creating variant/option", error);
          } // Find store and use slug to navigate
        }
      }
    }
  };

  if (isLoadingVariantsForProduct) return <Spinner />;

  return (
    <>
      <Heading variant="h3">
        Add a variant for
        <span className="font-semibold">
          {isLoadingProduct ? "..." : product?.name}
        </span>
      </Heading>
      <Space spacing="my-8" />
      <FormFieldCard title="Product Variant (optional)">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Space spacing="my-8" />
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
              onClick={() => {
                if (userStores) {
                  const getLastStoreIndex = userStores.length - 1;
                  const defaultStoreSlug = userStores[getLastStoreIndex].slug;
                  navigate(`/stores/${defaultStoreSlug}/products/`);
                }
              }}
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
