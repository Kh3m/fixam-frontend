import { Link } from "react-router-dom";
import Button from "../Button";
import useAuth from "../../hooks/useAuth";
import useCartForUser from "../../hooks/cart/useCartForUser";
import useUser from "../../hooks/user/useUser";
import { CartType } from "../../services/cart";
import CircledLink from "./CircledLink";
import { MdHelpCenter } from "react-icons/md";
import Spinner from "../Spinner";
import ShoppingCart from "../ShoppingCart";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";
import AccountNav from "./AccountNav";

const HeaderNav = () => {
  const { isAuthenticated, userStores, user } = useAuth();

  const { data, isLoading: isLoadingDummyUserCart } = useCartForUser(
    user?.id || ""
  );

  const userData = useUser(user?.id || "");

  const dummyUserCart = data as CartType;

  return (
    <nav className="flex items-center space-x-8">
      <CircledLink to="" styles="text-lg">
        <MdHelpCenter />
      </CircledLink>
      {isLoadingDummyUserCart && (
        <div>
          <Spinner />
        </div>
      )}
      {!isLoadingDummyUserCart && dummyUserCart && (
        <Link
          state={{ userCart: dummyUserCart }}
          to={`/cart`}
          className="text-white text-2xl"
        >
          <ShoppingCart
            itemCount={Number.parseInt(dummyUserCart.total_quantity || "0")}
          />
        </Link>
      )}

      {!isLoadingDummyUserCart && !dummyUserCart && (
        <Link
          state={{ userCart: dummyUserCart }}
          to={`/cart`}
          className="text-white text-2xl"
        >
          <ShoppingCart itemCount={0} />
        </Link>
      )}

      <AccountNav userData={userData.data} />

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
          styles=" bg-white text-fyellow border-2 border-white"
        >
          {isAuthenticated() && userStores ? "Store" : "Be a vendor"}
        </Button>
      </Link>
    </nav>
  );
};

export default HeaderNav;
