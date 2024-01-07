import { Fragment, useEffect, useState } from "react";
import useProductsFromCategory from "../hooks/products/useProductsFromCategory";
import { FetchResponseType, dummyApiClient } from "../services/apiClient";
import { ProductType } from "../services/product";
import FeaturedBar from "./FeaturedBar";
import MiniAdBanner from "./MiniAdBanner";
import Products from "./Products/Products";
import Space from "./Space";
import { getRandomUniqueElements } from "../utils/randomValues";
import { productBaseURL } from "../services/baseURLs";

interface Props {
  title: string;
  to: string;
  categoryId: string;
}

const FeaturedProducts = ({ title, to, categoryId }: Props) => {
  // const { data, isLoading } = useProductsFromCategory(categoryId);
  // const products = data as FetchResponseType<ProductType>;
  const [products, setProducts] = useState<FetchResponseType<ProductType>>();
  const [isLoading, setIsLoading] = useState(false);

  // Get 6 random unique products
  // const randomProducts = getRandomUniqueElements<ProductType>(
  //   (products?.results as ProductType[]) || [],
  //   6
  // );

  useEffect(() => {
    setIsLoading(true);
    dummyApiClient
      .get(
        `${productBaseURL}/products/categories/${categoryId}/products/?levels_deep=all`
      )
      .then((res) => {
        console.log("PRODUCTS<===>", res.data);
        setIsLoading(false);
        setProducts(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("ERROR<===>", error);
      });

    console.log(
      "FeaturedProducts",
      "products",
      products,
      "categoryId",
      categoryId
    );
  }, []);

  return (
    <>
      <MiniAdBanner />
      {isLoading && <p>Loading...</p>}
      {!isLoading && products && products.results && (
        <Fragment>
          <FeaturedBar title={title} to={to} />
          <Products products={products.results} />
          <Space spacing="my-8" />
        </Fragment>
      )}
    </>
  );
};

export default FeaturedProducts;
