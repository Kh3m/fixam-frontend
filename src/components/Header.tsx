import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput/SearchInput";
import { IoListSharp } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import ShoppingCart from "./ShoppingCart";
import { CartType } from "../services/cart";
import useCartForUser from "../hooks/cart/useCartForUser";

const Header = () => {
  const { isAuthenticated, userStores, user } = useAuth();
  const { data, isLoading: isLoadingDummyUserCart } = useCartForUser(
    user?.id || ""
  );

  const dummyUserCart = data as CartType;

  console.log("Cart Data", dummyUserCart);
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
            <Link to={`/users/wishlist`} className="text-white text-lg">
              <IoListSharp />
            </Link>

            {!isLoadingDummyUserCart && dummyUserCart && (
              <Link
                state={{ userCart: dummyUserCart }}
                to={`/cart`}
                className="text-white text-2xl"
              >
                <ShoppingCart
                  itemCount={Number.parseInt(
                    dummyUserCart.total_quantity || "0"
                  )}
                />
              </Link>
            )}

            {/* TODO: REMOVE AFTER DEMO */}
            {/* <Link
              state={{ userCart: dummyUserCart }}
              to={`/cart`}
              className="text-white text-2xl"
            >
              <ShoppingCart itemCount={4} />
            </Link> */}

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
                  : "/create-store"
              } `}
            >
              <Button
                variant="elevated"
                styles=" bg-white text-fyellow border-2 border-white"
              >
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
