import { useNavigate, useParams } from "react-router-dom";
import ProductBottomSummary from "../../../components/Products/ProductBottomSummary";
import Preview from "../../../components/Preview";
import Space from "../../../components/Space";
import ProductDetail from "../../../components/Products/ProductDetail";
import useProduct from "../../../hooks/products/useProduct";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { dummyApiClient } from "../../../services/apiClient";
import { productBaseURL } from "../../../services/baseURLs";

type ParamsType = {
  productId: string;
};

const content = {
  left: ["Promoted", "Posted 3 hours", "Lagos, Ikeja"],
  right: ["39 views"],
};

const ViewProduct = () => {
  const params = useParams<ParamsType>();
  const navigate = useNavigate();
  const { userStores } = useAuth();
  const [isDeletingProduct, setIsDeletingProduct] = useState(false);

  const {
    data: product,
    isLoading,
    isSuccess,
  } = useProduct(params.productId || "");

  let images = [{ src: "", alt: "" }];

  if (isSuccess && product.images) {
    images = product?.images.map((imageUrl) => ({
      src: imageUrl,
      alt: "Product image",
    }));
  }

  console.log("Productssss", product);

  const handleDelete = () => {
    setIsDeletingProduct(true);
    dummyApiClient
      .delete(`${productBaseURL}/products/${product?.id}/`)
      .then((_) => {
        setIsDeletingProduct(false);
        navigate(
          `/stores/${
            userStores && userStores[userStores?.length - 1].slug
          }/products`
        );
      })
      .catch((err) => {
        setIsDeletingProduct(false);
        console.log("Deletion ERRor", err);
      });
  };

  if (isLoading) return <p>Loading...</p>;

  if (product)
    return (
      <div className="">
        <h2 className="dark:text-white text-3xl">{product.name}</h2>
        <Space spacing="my-12" />
        <section>
          <div>
            <Preview images={images} />
            <Space spacing="my-2" />
            <ProductBottomSummary content={content} />
            <Space spacing="my-4" />
            <p className="text-fgrey text-justify">{product.description}</p>
          </div>
          {/* TODO: fix */}
          <ProductDetail
            isStore
            product={product}
            onDeleteProduct={handleDelete}
            isDeletingProduct={isDeletingProduct}
          />
        </section>
        <Space spacing="my-12" />
        {/* <ProductDescription /> */}
      </div>
    );
};

export default ViewProduct;
