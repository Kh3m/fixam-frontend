import Preview from "../../components/Preview";
import Container from "../../components/Container";
import Main from "../../components/Main";
import MiniAdBanner from "../../components/MiniAdBanner";
import ProductDetail from "../../components/Products/ProductDetail";
import Space from "../../components/Space";
import ProductBottomSummary from "../../components/Products/ProductBottomSummary";
import ProductDescription from "../../components/Products/ProductDescription";
import SimilarAds from "../../components/Products/SimilarAds";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/products/useProduct";
import useRandomProductsFromCategory from "../../hooks/products/useRandomProductsFromCategory";
import { ProductType } from "../../services/product";
import { getCategoryIdFromURL } from "../../utils/category";
import Reviews from "../../components/Reviews/Reviews";
import MainContent from "../../components/MainContent";
import Spinner from "../../components/Spinner";

const content = {
  left: ["Promoted", "Posted 3 hours", "Lagos, Ikeja"],
  right: ["39 views"],
};

const ProductDetailPage = () => {
  // const { state } = useLocation();
  const { productId } = useParams<{ productId: string }>();

  const { data: foundProduct, isLoading, isSuccess } = useProduct(productId!);

  console.log("productId", productId, foundProduct);

  // Get the categoryId from the category field;
  let categoryId = "";
  if (foundProduct && foundProduct.category) {
    categoryId = getCategoryIdFromURL(foundProduct.category);
  }

  const { data: foundRandomProduct } =
    useRandomProductsFromCategory(categoryId);

  if (isSuccess && foundProduct && foundProduct?.images) {
    return (
      <Main>
        <Container>
          <Space spacing="my-12" />
          {isLoading && <p>Loading...</p>}
          {!isLoading && foundProduct && (
            <section className="flex space-x-8">
              <div className="w-[80%]">
                <Preview
                  // images={[{ alt: "", src: "" }]}
                  images={foundProduct?.images.map((imageURl) => ({
                    alt: foundProduct.name + " Image",
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
          <Space spacing="my-8" />
          <Reviews productId={productId!} />
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
  }

  return (
    <MainContent>
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    </MainContent>
  );
};

export default ProductDetailPage;
