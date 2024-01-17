import { Link, useLocation } from "react-router-dom";
import { MenuSliderContextProvider } from "../contexts/menu-slider-context";
import Container from "./Container";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import MenuSlider from "./Menu/MenuSlider";
import HeaderNav from "./Navigations/HeaderNav";
import SearchInput from "./SearchInput/SearchInput";

const Header = () => {
  const { pathname } = useLocation();
  const pathHasStores = pathname.includes("stores");

  return (
    <header className="dark:bg-slate-800 bg-fyellow-shades-500 py-2 md:py-0">
      <Container>
        <div
          className="flex flex-col-reverse 
          md:items-center md:justify-between 
          md:flex-row md:h-24"
        >
          <div className="md:flex items-center my-2 md:my-0">
            <div
              className="hidden cursor-pointer
              md:w-[95px] md:h-[78px] md:block"
            >
              <Link to={"/"}>
                <Logo color="white" />
              </Link>
            </div>
            {!pathHasStores && <SearchInput />}
          </div>
          <div className="flex justify-between">
            <div
              className="w-16 md:hidden flex-grow flex items-center
              md:w-[95px] md:h-[78px] cursor-pointer"
            >
              <MenuSliderContextProvider>
                <MenuSlider />
                <Hamburger />
              </MenuSliderContextProvider>
              <Link to={"/"} className="w-16">
                <Logo color="white" />
              </Link>
            </div>
            <HeaderNav />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
