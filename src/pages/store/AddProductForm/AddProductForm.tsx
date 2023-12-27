import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
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
import apiClient from "../../../services/apiClient";
import { StoreResponseType } from "../../../entities/store";

type ProductUploadType = {
  name: string;
  description: string;
  price: number;
  user_id: string;
  store_id: string;
  type: string;
  category: string;
  selectimage1: File;
  selectimage2: File;
  selectimage3: File;
  selectimage4: File;
};

const AddProductForm = () => {
  const [userId, setUserId] = useState<string | null>();
  const [isLoading, setIsLoading] = useState(false);

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setUserId(getCookie("userId"));
  }, []);

  const methods = useForm<ProductUploadType>({
    defaultValues: {
      description:
        "Introducing the LuminaX Pro, an innovative smart flashlight designed to redefine portable illumination. This cutting-edge device boasts a sleek aluminum alloy body, combining durability with a modern aesthetic. LuminaX Pro features advanced LED technology, delivering a powerful beam with adjustable intensity for various scenarios. Its rechargeable lithium-ion battery ensures long-lasting performance, while a built-in USB port facilitates convenient charging on the go. With a compact and lightweight design, LuminaX Pro is an ideal companion for outdoor adventures, emergency situations, and everyday tasks. Elevate your lighting experience with LuminaX Pro — where functionality meets sophistication.",
    },
  });
  // const productImageMethods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = async (newProductData: ProductUploadType) => {
    //TODO: remove below line
    console.log("Entered Product Data", newProductData);

    setIsLoading(true);

    const formData = new FormData();
    if (userId && isAuthenticated()) {
      const getStoreForUserId = await apiClient.get<StoreResponseType[]>(
        `/stores/owner/${userId}/`
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
        formData.append(`image[${index}]`, image);
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
        const createdProduct = await apiClient.post("/products/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("createdProduct", createdProduct);
        setIsLoading(false);
      } catch (error) {
        console.log(`Error - Failed to create product ${error}`);
        console.log(error);
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
        <Space spacing="my-8" />
        <FeaturesField />
        <Space spacing="my-8" />
        <ProductImageUpload />
        <Space spacing="my-8" />
        <Button
          variant="elevated"
          styles="bg-fyellow text-white font-semibold text-lg pagination-shadow"
        >
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
      {/* <Space spacing="my-8" />
          <VariantFields /> */}
    </FormProvider>
  );
};

export default AddProductForm;
