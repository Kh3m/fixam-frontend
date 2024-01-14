import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import HeaderNav from "./Navigations/HeaderNav";
import SearchInput from "./SearchInput/SearchInput";

const Header = () => {
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
            <SearchInput />
          </div>
          <div className="flex justify-between">
            <div
              className="w-16 md:hidden -ml-4
              md:w-[95px] md:h-[78px] cursor-pointer"
            >
              <Link to={"/"}>
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
