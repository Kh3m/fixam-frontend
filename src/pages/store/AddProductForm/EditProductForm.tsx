import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from "../../../components/BackArrow";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import { StoreResponseType } from "../../../entities/store";
import useProduct from "../../../hooks/products/useProduct";
import useAuth from "../../../hooks/useAuth";
import apiClient from "../../../services/apiClient";
import { getCategoryIdFromURL } from "../../../utils/category";
import { getCookie } from "../../../utils/cookies";
import AlCAtF from "./AlCAtF";
import ProductImageUpload from "./ProductImageUpload";
import ProductInfoFields from "./ProductInfoFields";
import TypeFields from "./TypeFields";

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
};

type ParamsType = {
  productId: string;
  slug: string;
};

const EditProductForm = () => {
  const params = useParams<ParamsType>();
  const [userId, setUserId] = useState<string | null>();
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();
  const { data: product, isLoading: isLoadingProduct } = useProduct(
    params.productId || ""
  );

  useEffect(() => {
    setUserId(getCookie("userId"));
  }, [userId]);

  const methods = useForm<ProductUploadType>({
    defaultValues: {
      user_id: "",
      store_id: "",
      selectimage1: null,
      selectimage2: null,
      selectimage3: null,
      selectimage4: null,
    },
  });

  const fetchImagesAsFile = async () => {
    if (product) {
      const filePromises = product.images.map(async (imageUrl, index) => {
        const response = await fetch(imageUrl);
        const contentType = response.headers.get("Content-Type");
        const blob = await response.blob();

        // Use the contentType to set the appropriate file extension
        const fileExtension = contentType?.split("/")[1];
        const fileName = `image${index + 1}.${fileExtension}`;

        return new File([blob], fileName, { type: contentType || "image" });
      });
      const imageFiles = await Promise.all(filePromises);
      // Now 'imageFiles' is an array of File objects
      console.log(imageFiles);
    }
  };

  console.log("fetchImagesAsFile", fetchImagesAsFile());

  // const productImageMethods = useForm();
  const { handleSubmit } = methods;

  // const handleEdit = () => {
  //   if(product) {
  //         // Convert each base64 image string to a File object
  //   const imageFiles = product.images.map((base64String, index) =>
  //     base64StringToFile(base64String, image_${index + 1}.jpg, 'image/jpeg'));

  //   // Now 'imageFiles' is an array of File objects that you can use as needed
  //   console.log(imageFiles);

  //   // Perform other edit actions...
  //   }
  // };
  const navigate = useNavigate();
  const onSubmit = async (newProductData: ProductUploadType) => {
    //TODO: remove below line
    console.log("Entered Product Data", newProductData);
    setIsLoading(true);

    const formData = new FormData();
    if (userId && isAuthenticated()) {
      // TODO: Use the custom effect useAuth to retrieve user's store
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
        formData.append(`image[${index}]`, image as File);
      });

      formData.append("user_id", userId);
      formData.append("price", newProductData.price.toString());
      formData.append("type", newProductData.type);
      formData.append("category", newProductData.category);
      formData.append("name", newProductData.name);
      formData.append("description", newProductData.description);

      formData.forEach((v, k) => console.log(`${k}: ${v}`));

      // Send data to server
      try {
        // TODO: Consider using useMutation
        const createdProduct = await apiClient.put(
          `/products/${product?.id}/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("createdProduct", createdProduct);

        // Find store and use slug to navigate
        navigate(
          `/stores/${getStoreForUserId.data[getLastStoreIndex].slug}/products`
        );

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

  if (isLoadingProduct) return <p>Loading...</p>;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BackArrow>
          <Heading variant="h3">
            Edit Product: <span className="font-semibold">{product?.name}</span>
          </Heading>
        </BackArrow>

        <Space spacing="my-8" />
        <TypeFields defaultTypeValue={product?.type} />
        <Space spacing="my-8" />
        {/* <CategoryFields /> */}
        <AlCAtF
          defaultCategory={{
            label: product?.category_name || "",
            value: getCategoryIdFromURL(product?.category || ""),
          }}
        />
        <Space spacing="my-8" />
        <ProductInfoFields
          defaultProductInfo={{
            name: product?.name || "",
            price: (product?.selling_price || "") as string,
            description: product?.description || "",
          }}
        />
        {/* <Space spacing="my-8" /> */}
        {/* <FeaturesField defaultFeatures={[{ label: "Love", value: "Love" }]} /> */}
        <Space spacing="my-8" />
        <ProductImageUpload />
        <Space spacing="my-8" />
        <Button
          variant="elevated"
          styles="bg-fyellow text-white font-semibold text-lg pagination-shadow"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
      {/* <Space spacing="my-8" />
          <VariantFields /> */}
    </FormProvider>
  );
};

export default EditProductForm;
