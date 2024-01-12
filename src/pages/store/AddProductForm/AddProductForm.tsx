import { useEffect, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import { getCookie } from "../../../utils/cookies";
import AlCAtF from "./AlCAtF";
import FeaturesField from "./FeaturesField";
import ProductImageUpload from "./ProductImageUpload";
import ProductInfoFields from "./ProductInfoFields";
import TypeFields from "./TypeFields";
import useAuth from "../../../hooks/useAuth";
import { StoreResponseType } from "../../../entities/store";
import { useNavigate } from "react-router-dom";
import { dummyApiClient } from "../../../services/apiClient";
import { productBaseURL, storeBaseURL } from "../../../services/baseURLs";
import VariantFields from "./VariantFields";
import Spinner from "../../../components/Spinner";
import { ProductType } from "../../../services/product";

type VariantOptionType = {
  image: string[];
  value: string;
  price: string;
  variant: string;
  product: string;
};

type ProductUploadType = {
  name: string;
  description: string;
  price: number | string;
  user_id: string;
  store_id: string;
  type: string;
  category: string;
  selectimage1: File | null;
  selectimage2: File | null;
  selectimage3: File | null;
  selectimage4: File | null;
  variant: string;
  option_value: string;
  option_price: string;
  option_image: File | null;
};

type VarianType = {
  url: string;
  id: string;
  name: string;
  description: string;
};

const AddProductForm = () => {
  const [userId, setUserId] = useState<string | null>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setUserId(getCookie("userId"));
  }, [userId]);

  const methods = useForm<ProductUploadType>({
    defaultValues: {
      description:
        "Introducing the LuminaX Pro, an innovative smart flashlight designed to redefine portable illumination. This cutting-edge device boasts a sleek aluminum alloy body, combining durability with a modern aesthetic. LuminaX Pro features advanced LED technology, delivering a powerful beam with adjustable intensity for various scenarios. Its rechargeable lithium-ion battery ensures long-lasting performance, while a built-in USB port facilitates convenient charging on the go. With a compact and lightweight design, LuminaX Pro is an ideal companion for outdoor adventures, emergency situations, and everyday tasks. Elevate your lighting experience with LuminaX Pro — where functionality meets sophistication.",
      name: "",
      price: "",
      user_id: "",
      store_id: "",
      type: "",
      category: "",
      selectimage1: null,
      selectimage2: null,
      selectimage3: null,
      selectimage4: null,
      variant: "",
      option_value: "",
      option_price: "",
      option_image: null,
    },
  });
  // const productImageMethods = useForm();
  const { handleSubmit, control } = methods;
  const variantValue = useWatch({ control, name: "variant" });

  const validateOptions = (value: string, message: string) => {
    // Validate options field only if variant field is entered
    if (variantValue) {
      return value ? true : message;
    }

    // No variant entered, no need to validate options
    return true;
  };

  const onSubmit = async (newProductData: ProductUploadType) => {
    //TODO: remove below line
    console.log("Entered Product Data", newProductData);

    setIsLoading(true);

    const formData = new FormData();

    if (userId && isAuthenticated()) {
      const getStoreForUserId = await dummyApiClient.get<StoreResponseType[]>(
        `${storeBaseURL}/stores/owner/${userId}/`
      );

      const getLastStoreIndex = getStoreForUserId.data.length - 1;
      // Use the id of last created store of user
      formData.append("store_id", getStoreForUserId.data[getLastStoreIndex].id);

      const images = [
        newProductData.selectimage1,
        newProductData.selectimage2,
        newProductData.selectimage3,
        newProductData.selectimage4,
      ];
      // Now `formData` contains the images in an array-like structure under the "image" key
      images.forEach((image, index) => {
        formData.append(`image[${index}]`, image as File);
      });

      formData.append("user_id", userId);
      formData.append("price", newProductData.price.toString());
      formData.append("type", newProductData.type);
      formData.append("category", newProductData.category);
      formData.append("name", newProductData.name);
      formData.append("description", newProductData.description);

      // formData.forEach((v, k) => console.log(`${k}: ${v}`));

      // Send data to server
      try {
        const createdProduct = await dummyApiClient.post<ProductType>(
          `${productBaseURL}/products/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("createdProduct", createdProduct);

        // Check if Variant is selected
        if (newProductData.variant) {
          try {
            const createdVariant = await dummyApiClient.post<VarianType>(
              `${productBaseURL}/products/variants/`,
              {
                name: newProductData.variant,
                description: " Variant for " + newProductData.variant,
              }
            );

            if (createdVariant.status == 201) {
              // Variant is successfully created.
              console.log("Variant is successfully created.", createdVariant);
              // Create options for variant
              const variantVariables = {
                value: newProductData.option_value,
                price: newProductData.option_price,
                variant: createdVariant.data.id,
                product: createdProduct.data.id,
              };

              const createdOption = await dummyApiClient.post<VarianType>(
                `${productBaseURL}/products/variants/`,
                {
                  name: newProductData.variant,
                  description: " Variant for " + newProductData.variant,
                }
              );

              try {
              } catch (error) {
                // Delete the created product if there was an error creating a option for variant
                await dummyApiClient.delete(
                  `${productBaseURL}/products/${createdProduct.data.id}`
                );
              }
            }
          } catch (error) {
            // Delete the created product if there was an error creating a variant
            await dummyApiClient.delete(
              `${productBaseURL}/products/${createdProduct.data.id}`
            );
          }
        }

        // Find store and use slug to navigate
        navigate(
          `/stores/${getStoreForUserId.data[getLastStoreIndex].slug}/products`
        );
        setIsLoading(false);
      } catch (error) {
        //   console.log(`Error - Failed to create product ${error}`);
        //   console.log(error);
        setIsLoading(false);
      }
    } else {
      console.log("No user/auth: Couldn't create product");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading variant="h3">Add a product</Heading>
        <Space spacing="my-8" />
        <TypeFields />
        <Space spacing="my-8" />
        {/* <CategoryFields /> */}
        <AlCAtF />
        <Space spacing="my-8" />
        <ProductInfoFields />
        {/* <Space spacing="my-8" />
        <FeaturesField /> */}
        <Space spacing="my-8" />
        <ProductImageUpload />
        <Space spacing="my-8" />
        <VariantFields validateOptions={validateOptions} />
        <Space spacing="my-8" />
        <Button
          variant="elevated"
          styles="bg-fyellow text-white font-semibold text-lg pagination-shadow flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : <span>Submit</span>}
        </Button>
      </form>
    </FormProvider>
  );
};

export default AddProductForm;
