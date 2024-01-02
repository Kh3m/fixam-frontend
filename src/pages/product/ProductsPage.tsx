import { useLocation } from "react-router-dom";
import BreadcrumbTrail from "../../components/BreadcrumbTrail";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Filters from "../../components/Filters/Filters";
import QuickFilter from "../../components/Filters/QuickFilter";
import SortFilter from "../../components/Filters/SortFilter";
import Main from "../../components/Main";
import MiniAdBanner from "../../components/MiniAdBanner";
import Products from "../../components/Products/Products";
import Space from "../../components/Space";
import useProductsFromCategory from "../../hooks/products/useProductsFromCategory";
import { FetchResponseType } from "../../services/apiClient";
import { ProductType } from "../../services/product";

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
