import { Fragment } from "react";
import useProductsFromCategory from "../hooks/products/useProductsFromCategory";
import { FetchResponseType } from "../services/apiClient";
import { ProductType } from "../services/product";
import FeaturedBar from "./FeaturedBar";
import MiniAdBanner from "./MiniAdBanner";
import Products from "./Products/Products";
import Space from "./Space";
import { getRandomUniqueElements } from "../utils/randomValues";

interface Props {
  title: string;
  to: string;
  categoryId: string;
}

const FeaturedProducts = ({ title, to, categoryId }: Props) => {
  const { data, isLoading } = useProductsFromCategory(categoryId);
  const products = data as FetchResponseType<ProductType>;

  // Get 6 random unique products
  const randomProducts = getRandomUniqueElements<ProductType>(
    products.results as ProductType[],
    6
  );

  return (
    <>
      <MiniAdBanner />
      {isLoading && <p>Loading...</p>}
      {!isLoading && products.results && (
        <Fragment>
          <FeaturedBar title={title} to={to} />
          <Products products={randomProducts} />
          <Space spacing="my-8" />
        </Fragment>
      )}
    </>
  );
};

export default FeaturedProducts;
