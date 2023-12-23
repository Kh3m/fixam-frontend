import { Link } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput/SearchInput";
import { FaCartShopping } from "react-icons/fa6";
import { getCookie } from "../utils/cookies";
import { IoListSharp } from "react-icons/io5";

const Header = () => {
  const userId = getCookie("userId");

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
            <Link to={`/wishlist/${userId}`} className="text-white text-lg">
              <IoListSharp />
            </Link>
            <Link to={`/cart/${userId}`} className="text-white text-lg">
              <FaCartShopping />
            </Link>

            <Link to={`/stores/khem-store/dashboard`}>
              <Button variant="text" styles="text-white text-base ">
                Login
              </Button>
            </Link>
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
