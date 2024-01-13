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
import { dummyApiClient } from "../../services/apiClient";
import { cartBaseURL } from "../../services/baseURLs";
import { CartItemType, CartType } from "../../services/cart";
import { getCookie, setCookie } from "../../utils/cookies";
import Spinner from "../Spinner";
import TapEffect from "../TapEffect";

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
    favorite,
    price,
    selling_price,
    images,
    id,
    category_name,
  },
  realProduct,
  isDummy,
  handleFavStatus,
  temId,
  isAdProduct,
  categoryId,
}: Props) => {
  const [isLoadingAddToCart, setIsLoadingAddToCart] = useState(false);
  const queryClient = useQueryClient();

  const { isDarkMode } = useDarkMode();
  // slate-800
  const tempCartColor = isDarkMode ? "#1e293b" : "#FF9900";

  // const cartCreateMutation = useCreateCart();
  const { isAuthenticated, user } = useAuth();

  const invalidateCartUserQuery = () => {
    // Invalidate the cache for ["carts", "user", user?.id]
    queryClient.invalidateQueries({
      queryKey: ["carts", "user", user?.id],
    });
  };

  const handleAddToCart = async (productId: string) => {
    console.log("ProductID", productId);

    setIsLoadingAddToCart(true);

    // Create item
    const item: CartItemType = {
      prod_id: productId,
      // TODO: Check for item variation options
      // item_options: [
      // {
      //   // TODO: Ask is the id field optional?
      //   attribute: "Color",
      //   value: "red",
      // },
      // {
      //   // TODO: Ask is the id field optional?
      //   attribute: "Size",
      //   value: "2XL",
      // },
      // ],
      quantity: 1,
      // is_active: true,
    };

    // Check if user is authenticated
    if (isAuthenticated() && user?.id) {
      console.log("Add to cart user isAuthenticated");
      try {
        // Find user cart with user id
        const foundUserCart = await dummyApiClient.get<CartType>(
          `${cartBaseURL}/carts/user/${user.id}/`
        );
        console.log("Found User's Cart user isAuthenticated", foundUserCart);
        // Check if the user already has a cart
        if (foundUserCart.status === 200) {
          // Add item to the cart
          const addedCartItem = await dummyApiClient.post(
            `${cartBaseURL}/carts/${foundUserCart.data.id}/items/`,
            item
          );

          invalidateCartUserQuery();
          setIsLoadingAddToCart(false);

          console.log("addedCartItem user isAuthenticated", addedCartItem);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (
            error.response?.status === 404 &&
            error.response.data.detail === "Not found."
          ) {
            // No Cart Found - Create a New Cart
            console.log(
              "NO CART FOUND!!! user isAuthenticated",
              error.response
            );
            // Use userId to create new cart
            const newCartForUser = await dummyApiClient.post(
              `${cartBaseURL}/carts/`,
              {
                user_id: user.id,
              }
            );

            // Add item to newCartForUser
            const addedCartItem = await dummyApiClient.post(
              `${cartBaseURL}/carts/${newCartForUser.data.id}/items/`,
              item
            );

            invalidateCartUserQuery();
            setIsLoadingAddToCart(false);

            console.log(
              "addedCartItem user isAuthenticated no cart",
              addedCartItem
            );
          }
        }
      }
    } else {
      // If user is not authenticated
      // Check for cartId in cookie
      const cartIdFromCookie = getCookie("cartId");

      if (cartIdFromCookie) {
        // Use the cartId in cookie to find a cart by it's cartId
        const foundCart = await dummyApiClient.get(
          `${cartBaseURL}/carts/${cartIdFromCookie}/`
        );

        if (foundCart.status === 200) {
          // Add Items to cart
          const addedItem = await dummyApiClient.post(
            `${cartBaseURL}/carts/${cartIdFromCookie}/items/`,
            item
          );

          invalidateCartUserQuery();
          setIsLoadingAddToCart(false);

          console.log(
            "AddedItem to Cart from cookie's cartid is not authenticated",
            addedItem
          );
        }
      } else {
        // There is no cartId in cookie and user is not authenticated
        // Create guest user cart without user_id
        try {
          const createdCart = await dummyApiClient.post<{ id: string }>(
            `${cartBaseURL}/carts/`,
            {
              user_id: null,
            }
          );
          if (createdCart.status === 201) {
            setCookie("cartId", createdCart.data.id, 7);

            // Add item to newCartForUser
            const addedCartItem = await dummyApiClient.post(
              `${cartBaseURL}/carts/${createdCart.data.id}/items/`,
              item
            );

            invalidateCartUserQuery();
            setIsLoadingAddToCart(false);

            console.log(
              "no cookie cartId, createdCart user is not authenticated",
              createdCart.data,
              addedCartItem
            );
          }
        } catch (err) {
          invalidateCartUserQuery();
          setIsLoadingAddToCart(false);

          console.log(
            "ERROR CREATING CART no cookie cartId, user is not authenticated",
            err
          );
        }
      }
    }
  };

  const handleAddToWishList = () => {};

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
          <Button onClick={handleAddToWishList}>
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
          </Button>
        </span>
      </div>
      <div className="p-5 dark:bg-slate-800 bg-white  rounded-b-lg">
        <Link
          // to={`/products/${productName}`}
          to={`${category_name}/product`}
          state={{ categoryId, productId: id }}
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
};

export default Product;
