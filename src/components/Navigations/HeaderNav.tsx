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
import { getCookie } from "../../utils/cookies";

const HeaderNav = () => {
  const { isAuthenticated, userStores, isLoadingUserStore, user } = useAuth();
  const { data, isLoading: isLoadingUserCart } = useCartForUser(
    user?.id
  ).withUserId();

  const {
    data: userCartWithCartIdData,
    isLoading: isLoadingUserCartWithCartId,
  } = useCartForUser(getCookie("cartId") || "").withCartId();

  const userData = useUser(user?.id || "");

  const userCartData = data as CartType;
  const userCartWithCartId = userCartWithCartIdData as CartType;

  if (isAuthenticated() && user)
    return (
      <nav
        className="flex items-center
      md:space-x-8"
      >
        <CircledLink to="" styles="text-lg mr-6 md:mr-0">
          <MdHelpCenter />
        </CircledLink>
        {isLoadingUserCart ||
          (isLoadingUserCartWithCartId && (
            <div className="mr-8">
              <Spinner />
            </div>
          ))}

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

        {/* {!isLoadingUserCartWithCartId && userCartWithCartId && (
          <Link
            state={{ userCart: userCartWithCartId }}
            to={`/cart/userCartWithCartId`}
            className="text-white text-2xl mr-8"
          >
            <ShoppingCart
              itemCount={Number.parseInt(
                userCartWithCartId.total_quantity || "0"
              )}
            />
          </Link>
        )} */}

        {!isLoadingUserCart && !userCartData && (
          <Link
            state={{ userCart: userCartData }}
            to={`/cart`}
            className="text-white text-2xl mr-8"
          >
            <ShoppingCart itemCount={0} />
          </Link>
        )}

        {/* {!isLoadingUserCartWithCartId && !userCartWithCartId && (
          <Link
            state={{ userCart: userCartWithCartId }}
            to={`/cart`}
            className="text-white text-2xl mr-8"
          >
            <ShoppingCart itemCount={0} />
          </Link>
        )} */}

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
        {isAuthenticated() && isLoadingUserStore ? (
          <div
            className="hidden md:block bg-gray-50/50 text-fyellow 
         h-10 w-28 rounded-md animate-pulse"
          ></div>
        ) : (
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
              {isAuthenticated() && userStores?.length && "Store"}
              {isAuthenticated() && !userStores?.length && "Own a Store"}
              {!isAuthenticated() && "Be a vendor"}
            </Button>
          </Link>
        )}
      </nav>
    );

  if (getCookie("cartId"))
    return (
      <nav
        className="flex items-center
    md:space-x-8"
      >
        <CircledLink to="" styles="text-lg mr-6 md:mr-0">
          <MdHelpCenter />
        </CircledLink>
        {isLoadingUserCart ||
          (isLoadingUserCartWithCartId && (
            <div className="mr-8">
              <Spinner />
            </div>
          ))}

        {/* {!isLoadingUserCart && userCartData && (
          <Link
            state={{ userCart: userCartData }}
            to={`/cart`}
            className="text-white text-2xl mr-8"
          >
            <ShoppingCart
              itemCount={Number.parseInt(userCartData.total_quantity || "0")}
            />
          </Link>
        )} */}

        {!isLoadingUserCartWithCartId && userCartWithCartId && (
          <Link
            state={{ userCart: userCartWithCartId }}
            to={`/cart`}
            className="text-white text-2xl mr-8"
          >
            <ShoppingCart
              itemCount={Number.parseInt(
                userCartWithCartId.total_quantity || "0"
              )}
            />
          </Link>
        )}

        {/* {!isLoadingUserCart && !userCartData && (
          <Link
            state={{ userCart: userCartData }}
            to={`/cart`}
            className="text-white text-2xl mr-8"
          >
            <ShoppingCart itemCount={0} />
          </Link>
        )} */}

        {!isLoadingUserCartWithCartId && !userCartWithCartId && (
          <Link
            state={{ userCart: userCartWithCartId }}
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
        {isAuthenticated() && isLoadingUserStore ? (
          <div
            className="hidden md:block bg-gray-50/50 text-fyellow 
         h-10 w-28 rounded-md animate-pulse"
          ></div>
        ) : (
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
              {isAuthenticated() && userStores?.length && "Store"}
              {isAuthenticated() && !userStores?.length && "Own a Store"}
              {!isAuthenticated() && "Be a vendor"}
            </Button>
          </Link>
        )}
      </nav>
    );
};

export default HeaderNav;
