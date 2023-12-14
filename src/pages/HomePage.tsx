import Banner from "../components/Banner";
import Categories from "../components/Categories/Categories";
import Container from "../components/Container";
import FeaturedProducts from "../components/FeaturedProducts";
import Main from "../components/Main";

import Partners from "../components/Partners";
import Space from "../components/Space";

function HomePage() {
  return (
    <Main>
      <Banner />
      <Space spacing="my-14" />
      <Container Aside={<Categories />} twoColLayout>
        <FeaturedProducts
          title="Flash Deals"
          to="/products/featured/flash-sales"
        />
        <FeaturedProducts
          title="Similar Searches"
          to="/products/featured/flash-sales"
        />
        <FeaturedProducts
          title="Smart Homes"
          to="/products/featured/flash-sales"
        />
        <FeaturedProducts
          title="Find Property"
          to="/products/featured/flash-sales"
        />
        <FeaturedProducts
          title="Repairs/Services"
          to="/products/featured/flash-sales"
        />
        <FeaturedProducts
          title="Hire Equipments"
          to="/products/featured/flash-sales"
        />
        <FeaturedProducts
          title="Flash Deals"
          to="/products/featured/flash-sales"
        />
        <FeaturedProducts
          title="Flash Deals"
          to="/products/featured/flash-sales"
        />
      </Container>
      <Space spacing="my-14" />
      <Partners />
    </Main>
  );
}

export default HomePage;
