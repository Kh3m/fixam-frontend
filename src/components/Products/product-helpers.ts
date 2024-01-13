import { QueryClient } from "@tanstack/react-query";
import { dummyApiClient } from "../../services/apiClient";
import { cartBaseURL } from "../../services/baseURLs";
import { WishlistType } from "../../services/wishlist";
import { CartItemType, CartType } from "../../services/cart";
import { getCookie, setCookie } from "../../utils/cookies";
import axios from "axios";

export const removeFromWishlist = async (
  wishlistId: string,
  userId: string,
  queryClient: QueryClient
) => {
  const deletedWishList = await dummyApiClient.delete<WishlistType>(
    `${cartBaseURL}/carts/wishlist/${wishlistId}/`
  );
  console.log("Deleting from wishlist successfully", deletedWishList);
  queryClient.invalidateQueries({
    queryKey: ["carts", "wishlist", "user", userId],
  });
};

export const addItemToWishlist = async (
  productId: string,
  userId: string,
  queryClient: QueryClient
) => {
  const createdWishList = await dummyApiClient.post<WishlistType>(
    `${cartBaseURL}/carts/wishlist/`,
    {
      user_id: userId,
      product_id: productId,
    }
  );
  console.log("Adding to wishlist successfully", createdWishList);
  queryClient.invalidateQueries({
    queryKey: ["carts", "wishlist", "user", userId],
  });
};

const invalidateCartUserQuery = (userId: string, queryClient: QueryClient) => {
  // Invalidate the cache for ["carts", "user", user?.id]
  queryClient.invalidateQueries({
    queryKey: ["carts", "user", userId],
  });
};

export const addItemToCart = async (
  productId: string,
  userId: string,
  isAuthenticated: boolean,
  queryClient: QueryClient
) => {
  // setIsLoadingAddToCart(true);

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
  if (isAuthenticated && userId) {
    try {
      // Find user cart with user id
      const foundUserCart = await dummyApiClient.get<CartType>(
        `${cartBaseURL}/carts/user/${userId}/`
      );
      console.log("Found User's Cart user isAuthenticated", foundUserCart);
      // Check if the user already has a cart
      if (foundUserCart.status === 200) {
        // Add item to the cart
        const addedCartItem = await dummyApiClient.post(
          `${cartBaseURL}/carts/${foundUserCart.data.id}/items/`,
          item
        );

        invalidateCartUserQuery(userId, queryClient);
        // setIsLoadingAddToCart(false);

        console.log("addedCartItem user isAuthenticated", addedCartItem);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response?.status === 404 &&
          error.response.data.detail === "Not found."
        ) {
          // No Cart Found - Create a New Cart
          console.log("NO CART FOUND!!! user isAuthenticated", error.response);
          // Use userId to create new cart
          const newCartForUser = await dummyApiClient.post(
            `${cartBaseURL}/carts/`,
            {
              user_id: userId,
            }
          );

          // Add item to newCartForUser
          const addedCartItem = await dummyApiClient.post(
            `${cartBaseURL}/carts/${newCartForUser.data.id}/items/`,
            item
          );

          invalidateCartUserQuery(userId, queryClient);
          // setIsLoadingAddToCart(false);

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

        invalidateCartUserQuery(userId, queryClient);
        // setIsLoadingAddToCart(false);

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

          invalidateCartUserQuery(userId, queryClient);
          // setIsLoadingAddToCart(false);

          console.log(
            "no cookie cartId, createdCart user is not authenticated",
            createdCart.data,
            addedCartItem
          );
        }
      } catch (err) {
        invalidateCartUserQuery(userId, queryClient);
        // setIsLoadingAddToCart(false);

        console.log(
          "ERROR CREATING CART no cookie cartId, user is not authenticated",
          err
        );
      }
    }
  }
};
