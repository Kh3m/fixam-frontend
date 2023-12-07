import linkedIn from "../assets/linkedin.svg";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Icon from "../components/IconHolder";
import IconPlus from "../components/IconPlus";
import Logo from "../components/Logo";
import NewsLetter from "../components/NewsLetter";
import TopAdBanner from "../components/TopAdBannner";

function HomePage() {
  return (
    <main className="max-w-[1440px] m-auto">
      <TopAdBanner />
      <Header />
      <Banner />
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

      <NewsLetter />

      <div className="md:w-[1140px] m-auto">
        <div className="flex space-x-1 items-center flex-wrap">
          <Icon image={{ src: linkedIn, alt: "Fixam LinkedIn Profile" }} />
          <Logo color="yellow" />
          <Button>Buy Now</Button>
          <Button variant="w-icon">
            <IconPlus />
            <span>Fix Ad Here</span>
          </Button>
          <Button variant="outlined">Register</Button>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default HomePage;
