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

  const onSubmit = async (data: ProductUploadType) => {
    console.log("Entered Product Data", data);

    const formData = new FormData();
    if (userId && isAuthenticated()) {
      formData.append("user_id", userId);
      formData.append("store_id", "21ee7c8a-e42c-4e7d-bf3e-8f1ed9c756f2");
      formData.append("price", data.price.toString());
      formData.append("type", data.type);
      formData.append("category", data.category);
      formData.append("name", data.name);
      formData.append("description", data.description);
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
          Submit
        </Button>
      </form>
      {/* <Space spacing="my-8" />
          <VariantFields /> */}
    </FormProvider>
  );
};

export default AddProductForm;
