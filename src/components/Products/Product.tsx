import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";
import { ProductType as RealProductType } from "../../services/product";
import { formatPrice } from "../../utils/number-formatter";
import Button from "../Button";
// import useCreateCart from "../../hooks/cart/useCreateCart";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import useWishlistForUser from "../../hooks/wishlist/useWishlistForUser";
import { FetchResponseType } from "../../services/apiClient";
import { WishlistType } from "../../services/wishlist";
import Center from "../Center";
import Spinner from "../Spinner";
import TapEffect from "../TapEffect";
import {
  addItemToCart,
  addItemToWishlist,
  removeFromWishlist,
} from "./product-helpers";

// export type ProductType = {
//   image: ImageType;
//   status: "For Sale" | "Sold" | "New";
//   favorite: boolean;
//   title: string;
//   price: number;
//   id: string;
// };

interface Props {
  // product: ProductType;
  product: RealProductType;
  isAdProduct?: boolean;
  // TODO: Remove
  isDummy?: boolean;
  realProduct?: RealProductType;
  categoryId?: string;
}

const Product = ({ product, isAdProduct, categoryId }: Props) => {
  const [isLoadingAddToCart, setIsLoadingAddToCart] = useState(false);
  const [isFavoritingWishlists, setIsFavoritingWishlists] = useState(false);
  const {
    type,
    name: productName,
    selling_price,
    images,
    id,
    category_name,
  } = product;

  const queryClient = useQueryClient();

  const { isDarkMode } = useDarkMode();
  // slate-800
  const tempCartColor = isDarkMode ? "#1e293b" : "#FF9900";

  // const cartCreateMutation = useCreateCart();
  const { isAuthenticated, user } = useAuth();
  const { data: wishlists, isLoading: isLoadingWishlists } = useWishlistForUser(
    user?.id || ""
  );

  const handleAddToCart = async (productId: string) => {
    setIsLoadingAddToCart(true);
    if (user)
      await addItemToCart(productId, user.id, isAuthenticated(), queryClient);
    setIsLoadingAddToCart(false);
  };

  const handleAddToWishList = async (productId: string, wishlistId: string) => {
    setIsFavoritingWishlists(true);
    if (user) {
      try {
        if (wishlistId) {
          await removeFromWishlist(wishlistId, user.id, queryClient);
        } else {
          await addItemToWishlist(productId, user.id, queryClient);
        }

        setIsFavoritingWishlists(false);
      } catch (error) {
        console.log("Something went wrong creating Wishlist", error);
        setIsFavoritingWishlists(false);
      }
    }
  };

  if (isLoadingWishlists)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (wishlists || product) {
    const userWishedLists = wishlists as FetchResponseType<WishlistType>;
    const favorite = wishlists
      ? userWishedLists.results.some((item) => item.product_id === id)
      : false;

    return (
      <article className={`${isAdProduct && "w-[265px]"} fshadow`}>
        <div className="relative">
          <div className="h-[250px]">
            <img
              src={images[0]}
              alt={productName}
              className={`${
                isAdProduct ? " rounded-t-lg" : ""
              } object-cover h-full w-full`}
            />
          </div>
          {!isAdProduct && (
            <span
              className="py-2 absolute w-16 top-10 text-xs font-semibold
            dark:bg-slate-800 bg-fyellow text-white 
            rounded-e-full inline-flex justify-center items-center
            md:px-4 md:w-28 "
            >
              {type}
            </span>
          )}
          {isAuthenticated() && user && (
            <span
              className={`${
                favorite ? "dark:bg-slate-800 bg-fyellow" : "bg-white"
              } absolute -bottom-7 right-7 
          flex justify-center items-center
          cursor-pointer  h-12 w-12 rounded-full fshadow`}
            >
              <Button
                onClick={() =>
                  handleAddToWishList(
                    id,
                    userWishedLists.results.find((w) => w.product_id === id)
                      ?.id || ""
                  )
                }
              >
                {isFavoritingWishlists ? (
                  <Spinner />
                ) : (
                  <TapEffect>
                    <AiOutlineHeart
                      width="50px"
                      size={28}
                      color={`${
                        favorite
                          ? "#FFF"
                          : favorite && isDarkMode
                          ? "#FFF"
                          : favorite && !isDarkMode
                          ? "#FF9900"
                          : tempCartColor
                      }`}
                      // color="#FF9900"
                    />
                  </TapEffect>
                )}
              </Button>
            </span>
          )}
        </div>
        <div className="p-5 dark:bg-slate-800 bg-white  rounded-b-lg">
          <Link
            // to={`/products/${productName}`}
            to={`${category_name}/${id}`}
            state={{ categoryId }}
          >
            <p
              className="text-sm dark:text-white text-fblack my-2 font-bold 
            hover:underline hover:underline-offset-4
            md:text-lg"
            >
              {productName}
            </p>
          </Link>
          <p
            className="dark:text-white text-fyellow text-sm md:text-xl 
          font-bold my-2 flex md:items-center md:space-x-3
          flex-col md:flex-row"
          >
            <span>{formatPrice(selling_price as number)}</span>
            {/* <span className="text-fgrey text-[10px] font-semibold">
              (5 items left)
            </span> */}
          </p>
          {!isAdProduct && (
            <div
              className="flex items-center justify-end text-fyellow-shades-500 space-x-1 my-3
              md:text-white"
            >
              <TapEffect>
                <Button
                  onClick={() => handleAddToCart(id)}
                  variant="elevated"
                  styles="mr-2 font-bold md:bg-fyellow-shades-500 py-[6px] text-[1.3rem] font-bold
                  md:px-3 md:mr-0"
                  noSizingClass
                  disabled={isLoadingAddToCart}
                >
                  {isLoadingAddToCart ? <Spinner /> : <FiShoppingCart />}
                </Button>
              </TapEffect>
              <Button
                variant="elevated"
                styles="dark:bg-slate-600 font-bold
                md:bg-fyellow-shades-500"
              >
                Buy Now
              </Button>
            </div>
          )}
        </div>
      </article>
    );
  }
};

export default Product;
