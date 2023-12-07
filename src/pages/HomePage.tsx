import Banner from "../components/Banner";
import Categories from "../components/Categories/Categories";
import Container from "../components/Container";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

import NewsLetter from "../components/NewsLetter";
import Partners from "../components/Partners";
import TopAdBanner from "../components/TopAdBannner";

function HomePage() {
  return (
    <Main>
      <TopAdBanner />
      <Header />
      <Banner />
      <Container>
        <div className="md:w-[1220px] m-auto my-[51px] flex space-x-8">
          <div className="basis-[300px] my-8">
            <Categories />
          </div>
          <div>
            <FeaturedProducts title="Flash Deals" />
            <FeaturedProducts title="Similar Searches" />
            <FeaturedProducts title="Smart Homes" />
            <FeaturedProducts title="Find Property" />
            <FeaturedProducts title="Repairs/Services" />
            <FeaturedProducts title="Hire Equipments" />
            <FeaturedProducts title="Flash Deals" />
            <FeaturedProducts title="Flash Deals" />
          </div>
        </div>
      </Container>
      <Partners />
      <NewsLetter />
      <Footer />
      {/* 
          <Button variant="w-icon">
            <IconPlus />
            <span>Fix Ad Here</span>
          </Button>
   */}
    </Main>
  );
}

export default HomePage;
