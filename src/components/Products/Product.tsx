import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";
import { ProductType as RealProductType } from "../../services/product";
import { formatPrice } from "../../utils/number-formatter";
import Button from "../Button";
// import useCreateCart from "../../hooks/cart/useCreateCart";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { FetchResponseType, dummyApiClient } from "../../services/apiClient";
import { cartBaseURL } from "../../services/baseURLs";
import { CartItemType, CartType } from "../../services/cart";
import { getCookie, setCookie } from "../../utils/cookies";
import Spinner from "../Spinner";
import TapEffect from "../TapEffect";
import { WishlistType } from "../../services/wishlist";
import useWishlistForUser from "../../hooks/wishlist/useWishlistForUser";
import Center from "../Center";
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
  handleFavStatus: (index: number) => void;
  temId: number;
  isAdProduct?: boolean;
  // TODO: Remove
  isDummy?: boolean;
  realProduct?: RealProductType;
  categoryId?: string;
}

const Product = ({
  product: {
    type,
    name: productName,
    selling_price,
    images,
    id,
    category_name,
  },
  handleFavStatus,
  temId,
  isAdProduct,
  categoryId,
}: Props) => {
  const [isLoadingAddToCart, setIsLoadingAddToCart] = useState(false);
  const [isFavoritingWishlists, setIsFavoritingWishlists] = useState(false);

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

  if (wishlists) {
    const userWishedLists = wishlists as FetchResponseType<WishlistType>;
    const favorite = userWishedLists.results.some(
      (item) => item.product_id === id
    );

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
              className="py-2 px-4 absolute top-10 text-xs font-semibold
            dark:bg-slate-800 bg-fyellow text-white rounded-e-full w-28 inline-flex justify-center items-center"
            >
              {type}
            </span>
          )}
          <span
            onClick={() => handleFavStatus(temId)}
            className={`${
              favorite ? "dark:bg-slate-800 bg-fyellow" : "bg-white"
            } absolute -bottom-7 right-7 
          flex justify-center items-center
          cursor-pointer  h-12 w-12 rounded-full fshadow`}
          >
            {isAuthenticated() && user && (
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
            )}
          </span>
        </div>
        <div className="p-5 dark:bg-slate-800 bg-white  rounded-b-lg">
          <Link
            // to={`/products/${productName}`}
            to={`${category_name}/${id}`}
            state={{ categoryId }}
          >
            <p className="dark:text-white text-fblack my-2 text-lg font-bold hover:underline hover:underline-offset-4">
              {productName}
            </p>
          </Link>
          <p className="dark:text-white text-fyellow text-xl font-bold my-2 flex items-center space-x-3">
            <span>{formatPrice(selling_price as number)}</span>
            <span className="text-fgrey text-[10px] font-semibold">
              (5 items left)
            </span>
          </p>
          {!isAdProduct && (
            <div className="flex justify-end items-center space-x-1 my-3">
              <TapEffect>
                <Button
                  onClick={() => handleAddToCart(id)}
                  variant="elevated"
                  styles="text-white font-bold bg-fyellow-shades-500 py-[6px] px-3 text-[1.3rem] font-bold"
                  noSizingClass
                  disabled={isLoadingAddToCart}
                >
                  {isLoadingAddToCart ? <Spinner /> : <FiShoppingCart />}
                </Button>
              </TapEffect>
              <Button
                variant="elevated"
                styles="dark:bg-slate-600 bg-fyellow text-white font-bold"
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
