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
  return (
    <Main>
      <Container>
        <Space spacing="my-12" />
        <section className="flex space-x-8">
          <div className="w-[60%]">
            <Preview images={images} />
            <Space spacing="my-2" />
            <ProductBottomSummary content={content} />
          </div>
          <ProductDetail />
        </section>
        <Space spacing="my-12" />
        <ProductDescription />
      </Container>
      <Space spacing="my-12" />
      <MiniAdBanner />
      <Space spacing="my-12" />
      <Container>
        <SimilarAds />
        <Space spacing="my-12" />
      </Container>
    </Main>
  );
};

export default ProductDetailPage;
