import Preview from "../../components/Preview";

import product1 from "../../assets/product_1.png";
import product2 from "../../assets/product_2.png";
import product3 from "../../assets/product_3.png";
import tabpanel from "../../assets/tabpanel.webp.png";
import Container from "../../components/Container";
import Main from "../../components/Main";
import MiniAdBanner from "../../components/MiniAdBanner";
import ProductDetail from "../../components/Products/ProductDetail";
import Space from "../../components/Space";
import ProductBottomSummary from "../../components/Products/ProductBottomSummary";
import ProductDescription from "../../components/Products/ProductDescription";
import SimilarAds from "../../components/Products/SimilarAds";
import { useLocation } from "react-router-dom";
import useProduct from "../../hooks/products/useProduct";
import { useEffect } from "react";
import useRandomProductsFromCategory from "../../hooks/products/useRandomProductsFromCategory";
import { ProductType } from "../../services/product";
import { getCategoryIdFromURL } from "../../utils/category";

const images = [
  { src: product1, alt: "Product 1" },
  { src: tabpanel, alt: "Product tabpanel" },
  { src: product2, alt: "Product 2" },
  { src: product3, alt: "Product 3" },
];

const content = {
  left: ["Promoted", "Posted 3 hours", "Lagos, Ikeja"],
  right: ["39 views"],
};

const ProductDetailPage = () => {
  const { state } = useLocation();

  let categoryId = "";
  let productId = "";
  if (state && state.productId) productId = state.productId;

  const { data: foundProduct, isLoading, isSuccess } = useProduct(productId);
  // Get the categoryId from the category field;
  if (foundProduct && foundProduct.category) {
    categoryId = getCategoryIdFromURL(foundProduct.category);
  }

  const { data: foundRandomProduct } =
    useRandomProductsFromCategory(categoryId);

  console.log("foundRandomProduct", foundRandomProduct);
  if (isSuccess && foundProduct && foundProduct?.images)
    return (
      <Main>
        <Container>
          <Space spacing="my-12" />
          {isLoading && <p>Loading...</p>}
          {!isLoading && foundProduct && (
            <section className="flex space-x-8">
              <div className="w-[80%]">
                <Preview
                  images={foundProduct?.images.map((imageURl) => ({
                    alt: "",
                    src: imageURl,
                  }))}
                />
                <Space spacing="my-2" />
                <ProductBottomSummary content={content} />
              </div>
              <ProductDetail product={foundProduct} />
            </section>
          )}
          <Space spacing="my-6" />
          <ProductDescription product={foundProduct} />
        </Container>
        <Space spacing="my-12" />
        <MiniAdBanner />
        <Space spacing="my-12" />
        <Container>
          <SimilarAds
            heading="Similar Advert"
            products={foundRandomProduct as ProductType[]}
          />
          <Space spacing="my-12" />
        </Container>
      </Main>
    );

  return <p>None</p>;
};

export default ProductDetailPage;
