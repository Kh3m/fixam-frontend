import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import Spinner from "../../../components/Spinner";
import { StoreResponseType } from "../../../entities/store";
import useAuth from "../../../hooks/useAuth";
import { ProductType } from "../../../services/product";
import AddVariantForm from "./AddVariantForm";
import AlCAtF from "./AlCAtF";
import ProductImageUpload from "./ProductImageUpload";
import ProductInfoFields from "./ProductInfoFields";
import TypeFields from "./TypeFields";
import apiClient from "../../../services/apiClient";
import { useNavigate } from "react-router-dom";

// type ProductUploadType = {
//   name: string;
//   description: string;
//   price: number | string;
//   user_id: string;
//   store_id: string;
//   type: string;
//   category: string;
//   selectimage1: File | null;
//   selectimage2: File | null;
//   selectimage3: File | null;
//   selectimage4: File | null;
//   variant: string;
//   option_value: string;
//   option_price: string;
//   option_image: File | null;
// };

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const methods = useForm({});
  // const productImageMethods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = async (newProductData: FieldValues) => {
    setIsLoading(true);

    const formData = new FormData();

    if (user?.id && isAuthenticated()) {
      const getStoreForUserId = await apiClient.get<StoreResponseType[]>(
        `/stores/owner/${user.id}/`
      );

      const getLastStoreIndex = getStoreForUserId.data.length - 1;
      const defaultStoreSlug = getStoreForUserId.data[getLastStoreIndex].slug;

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

      formData.append("user_id", user.id);
      formData.append("price", newProductData.price.toString());
      formData.append("type", newProductData.type);
      formData.append("category", newProductData.category);
      formData.append("name", newProductData.name);
      formData.append("description", newProductData.description);

      // formData.forEach((v, k) => console.log(`${k}: ${v}`));

      // Send data to server
      try {
        const createdProduct = await apiClient.post<ProductType>(
          `/products/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("createdProduct", createdProduct);
        setIsLoading(false);
        navigate(
          `/stores/${defaultStoreSlug}/products/${createdProduct.data.id}/add-variant`
        );
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
    <>
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
          <Space spacing="my-8" />
          <ProductImageUpload />

          {/* <VariantFields validateOptions={validateOptions} /> */}
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
    </>
  );
};

export default AddProductForm;
