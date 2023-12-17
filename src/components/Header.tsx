import { Link } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
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
          <div className="flex items-center space-x-5">
            <Button variant="text" styles="text-white text-base ">
              Login
            </Button>
            <Button variant="outlined">Register</Button>
            <Link to="/stores/create">
              <Button
                variant="elevated"
                styles=" bg-white text-fyellow border-2 border-white"
              >
                Be a vendor
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
