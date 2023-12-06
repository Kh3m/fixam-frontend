import linkedIn from "./assets/linkedin.svg";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Categories from "./components/Categories/Categories";
import FeaturedBar from "./components/FeaturedBar";
import Header from "./components/Header";
import Icon from "./components/IconHolder";
import IconPlus from "./components/IconPlus";
import Logo from "./components/Logo";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products/Products";
import SearchInput from "./components/SearchInput/SearchInput";
import TopAdBanner from "./components/TopAdBannner";

function App() {
  return (
    <main className="w-[1920px] m-auto">
      <TopAdBanner />
      <Header />
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
        <Banner color="yellow" rounded>
          <SearchInput />
        </Banner>
        <Categories />
        <FeaturedBar />
        <Products />
        <NewsLetter />
      </div>
    </main>
  );
}

export default App;
