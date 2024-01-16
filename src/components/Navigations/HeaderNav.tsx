import { MdHelpCenter } from "react-icons/md";
import { Link } from "react-router-dom";
import useCartForUser from "../../hooks/cart/useCartForUser";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/user/useUser";
import { CartType } from "../../services/cart";
import Button from "../Button";
import ShoppingCart from "../ShoppingCart";
import Spinner from "../Spinner";
import AccountNav from "./AccountNav";
import CircledLink from "./CircledLink";

const HeaderNav = () => {
  const { isAuthenticated, userStores, user } = useAuth();

  const { data, isLoading: isLoadingUserCart } = useCartForUser(user?.id || "");

  const userData = useUser(user?.id || "");

  const userCartData = data as CartType;

  console.log("UserCart", userCartData);

  return (
    <nav
      className="flex items-center
    md:space-x-8"
    >
      <CircledLink to="" styles="text-lg mr-6">
        <MdHelpCenter />
      </CircledLink>
      {isLoadingUserCart && (
        <div className="mr-8">
          <Spinner />
        </div>
      )}
      {!isLoadingUserCart && userCartData && (
        <Link
          state={{ userCart: userCartData }}
          to={`/cart`}
          className="text-white text-2xl mr-8"
        >
          <ShoppingCart
            itemCount={Number.parseInt(userCartData.total_quantity || "0")}
          />
        </Link>
      )}

      {!isLoadingUserCart && !userCartData && (
        <Link
          state={{ userCart: userCartData }}
          to={`/cart`}
          className="text-white text-2xl mr-8"
        >
          <ShoppingCart itemCount={0} />
        </Link>
      )}

      {isAuthenticated() && <AccountNav userData={userData.data} />}

      {!isAuthenticated() && (
        <Link to={`/auth/login`}>
          <Button variant="text" styles="text-white text-base ">
            Login
          </Button>
        </Link>
      )}
      {/* <Link to={`/auth/register`}>
              <Button variant="outlined">Register</Button>
            </Link> */}
      <Link
        to={`${
          isAuthenticated() && userStores?.length
            ? `/stores/${userStores[userStores.length - 1].slug}/dashboard`
            : "/create-store"
        } `}
      >
        <Button
          variant="elevated"
          styles="hidden md:block bg-white text-fyellow border-2 border-white"
        >
          {isAuthenticated() && userStores?.length
            ? "Store"
            : isAuthenticated()
            ? "Own a Store"
            : "Be a vendor"}
        </Button>
      </Link>
    </nav>
  );
};

export default HeaderNav;
