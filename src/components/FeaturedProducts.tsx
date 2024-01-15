import { Fragment } from "react";
import useProductsFromCategory from "../hooks/products/useProductsFromCategory";
import { FetchResponseType } from "../services/apiClient";
import { ProductType } from "../services/product";
import FeaturedBar from "./FeaturedBar";
import MiniAdBanner from "./MiniAdBanner";
import Products from "./Products/Products";
import Space from "./Space";
import Center from "./Center";
import Spinner from "./Spinner";

interface Props {
  title: string;
  to: string;
  categoryId: string;
}

const FeaturedProducts = ({ title, to, categoryId }: Props) => {
  const { data, isLoading: isLoadingProductsFromCategory } =
    useProductsFromCategory(categoryId);
  const products = data as FetchResponseType<ProductType>;
  // const [products, setProducts] = useState<FetchResponseType<ProductType>>();
  // const [isLoading, setIsLoading] = useState(false);

  // Get 6 random unique products
  // const randomProducts = getRandomUniqueElements<ProductType>(
  //   (products?.results as ProductType[]) || [],
  //   6
  // );

  // useEffect(() => {
  //   setIsLoading(true);
  //   dummyApiClient
  //     .get(
  //       `${productBaseURL}/products/categories/${categoryId}/products/?levels_deep=all`
  //     )
  //     .then((res) => {
  //       console.log("PRODUCTS<===>", res.data);
  //       setIsLoading(false);
  //       setProducts(res.data);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       console.log("ERROR<===>", error);
  //     });

  //   console.log(
  //     "FeaturedProducts",
  //     "products",
  //     products,
  //     "categoryId",
  //     categoryId
  //   );
  // }, []);

  return (
    <>
      <MiniAdBanner />
      {isLoadingProductsFromCategory && (
        <Center>
          <Spinner />
        </Center>
      )}
      {!isLoadingProductsFromCategory && products && products.results && (
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
