import { Fragment } from "react";
import useProducts from "../hooks/products/useProducts";
import useProductsFromCategory from "../hooks/products/useProductsFromCategory";
import { FetchResponseType } from "../services/apiClient";
import { ProductType } from "../services/product";
import FeaturedBar from "./FeaturedBar";
import MiniAdBanner from "./MiniAdBanner";
import Products from "./Products/Products";
import Space from "./Space";

interface Props {
  title: string;
  to: string;
  categoryId: string;
}

const FeaturedProducts = ({ title, to, categoryId }: Props) => {
  const { data, isLoading } = useProductsFromCategory(categoryId);
  const products = data as FetchResponseType<ProductType>;

  return (
    <>
      <MiniAdBanner />
      {isLoading && <p>Loading...</p>}
      {!isLoading && products.results && (
        <Fragment>
          <FeaturedBar title={title} to={to} />
          <Products products={products.results as ProductType[]} />
          <Space spacing="my-8" />
        </Fragment>
      )}
    </>
  );
};

export default FeaturedProducts;
