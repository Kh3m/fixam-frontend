import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import HeaderNav from "./Navigations/HeaderNav";
import SearchInput from "./SearchInput/SearchInput";

const Header = () => {
  return (
    <header className="dark:bg-slate-800 bg-fyellow">
      <Container>
        <div className=" h-24  flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[95px] h-[78px] cursor-pointer">
              <Link to={"/"}>
                <Logo color="white" />
              </Link>
            </div>
            <SearchInput />
          </div>
          <HeaderNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
