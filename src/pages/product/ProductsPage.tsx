import Card from "../../components/Card";
import Container from "../../components/Container";
import Filters from "../../components/Filters/Filters";
import QuickFilter from "../../components/Filters/QuickFilter";
import SortFilter from "../../components/Filters/SortFilter";
import Main from "../../components/Main";
import MiniAdBanner from "../../components/MiniAdBanner";
import Products from "../../components/Products/Products";
import Space from "../../components/Space";

const ProductsPage = () => {
  return (
    <Main>
      <Space spacing="my-14" />
      <Container>
        <MiniAdBanner />
      </Container>
      <Space spacing="my-8" />
      <Container Aside={<Filters />} twoColLayout>
        <Card>
          <QuickFilter />
        </Card>
        <Space spacing="my-8" />
        <SortFilter />
        <Products />
        <Space spacing="my-8" />
        <Products />
        <Space spacing="my-8" />
        <Products />
        <Space spacing="my-8" />
      </Container>
      <Space spacing="my-14" />
    </Main>
  );
};

export default ProductsPage;
