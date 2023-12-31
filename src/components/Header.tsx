import { Link } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput/SearchInput";
import { FaCartShopping } from "react-icons/fa6";
import { IoListSharp } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Header = () => {
  const { isAuthenticated, userStores } = useAuth();

  useEffect;
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
            <Link to={`/wishlist`} className="text-white text-lg">
              <IoListSharp />
            </Link>
            <Link to={`/cart`} className="text-white text-lg">
              <FaCartShopping />
            </Link>

            <Link to={`/auth/login`}>
              <Button variant="text" styles="text-white text-base ">
                Login
              </Button>
            </Link>
            <Link to={`/auth/register`}>
              <Button variant="outlined">Register</Button>
            </Link>
            <Link
              to={`${
                isAuthenticated() && userStores?.length
                  ? `/stores/${
                      userStores[userStores.length - 1].slug
                    }/dashboard`
                  : "/stores/create"
              } `}
            >
              <Button
                variant="elevated"
                styles=" bg-white text-fyellow border-2 border-white"
              >
                {/* TODO: Check to ensure this checks succeeds */}
                {isAuthenticated() && userStores ? "Store" : "Be a vendor"}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
