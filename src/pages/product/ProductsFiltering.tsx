import BreadcrumbTrail from "../../components/BreadcrumbTrail";
import Center from "../../components/Center";
import Container from "../../components/Container";
import EmptyState from "../../components/EmptyState";
import Filters from "../../components/Filters/Filters";
import SortFilter from "../../components/Filters/SortFilter";
import Main from "../../components/Main";
import MiniAdBanner from "../../components/MiniAdBanner";
import Products from "../../components/Products/Products";
import Space from "../../components/Space";
import Spinner from "../../components/Spinner";
import { useProductFilteringContext } from "../../contexts/product-filtering-context";
import useProducts from "../../hooks/products/useProducts";
import { FetchResponseType } from "../../services/apiClient";
import { ProductType } from "../../services/product";

const ProductsFiltering = () => {
  // Filtering states
  //   const [categoryId, setCategoryId] = useState("");

  const { filteringState } = useProductFilteringContext();

  const { data, isLoading } = useProducts({
    // categoryId: "bbb7b075-1dab-4276-abfb-a03166b561b2",
    categoryId: filteringState.categoryId,
    minPrice: filteringState.minPrice,
    maxPrice: filteringState.maxPrice,
  });

  const products = data as FetchResponseType<ProductType>;

  if (isLoading)
    return (
      <Main>
        <Space spacing="my-14" />
        <Container>
          <MiniAdBanner />
          <Space spacing="my-8" />
          <BreadcrumbTrail />
        </Container>
        <Space spacing="my-8" />
        <Container Aside={<Filters />} twoColLayout>
          <Center>
            <Spinner />
          </Center>
        </Container>
        <Space spacing="my-14" />
      </Main>
    );

  if (products && products.results.length)
    return (
      <Main>
        <Space spacing="my-14" />
        <Container>
          <MiniAdBanner />
          <Space spacing="my-8" />
          <BreadcrumbTrail />
        </Container>
        <Space spacing="my-8" />
        <Container Aside={<Filters />} twoColLayout>
          <SortFilter />
          <Products products={products.results} />
          <Space spacing="my-8" />
        </Container>
        <Space spacing="my-14" />
      </Main>
    );

  // Empty state
  if (products && !products.results.length)
    return (
      <Main>
        <Space spacing="my-14" />
        <Container>
          <MiniAdBanner />
          <Space spacing="my-8" />
          <BreadcrumbTrail />
        </Container>
        <Space spacing="my-8" />
        <Container Aside={<Filters />} twoColLayout>
          <EmptyState />
          <Space spacing="my-8" />
        </Container>
        <Space spacing="my-14" />
      </Main>
    );
};

export default ProductsFiltering;
