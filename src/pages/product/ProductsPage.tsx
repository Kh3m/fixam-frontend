import BreadcrumbTrail from "../../components/BreadcrumbTrail";
import Container from "../../components/Container";
import Filters from "../../components/Filters/Filters";
import SortFilter from "../../components/Filters/SortFilter";
import Main from "../../components/Main";
import MiniAdBanner from "../../components/MiniAdBanner";
import Products from "../../components/Products/Products";
import Space from "../../components/Space";

const ProductsPage = () => {
  // const {
  //   state: { categoryId },
  // } = useLocation();

  // const { data, isLoading } = useProductsFromCategory(categoryId);
  // const products = data as FetchResponseType<ProductType>;

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
        <Products />
        <Space spacing="my-8" />
      </Container>
      <Space spacing="my-14" />
    </Main>
  );
};

export default ProductsPage;
