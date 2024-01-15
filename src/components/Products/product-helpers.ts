import { QueryClient } from "@tanstack/react-query";
import { WishlistType } from "../../services/wishlist";
import { CartItemType, CartType } from "../../services/cart";
import { getCookie, setCookie } from "../../utils/cookies";
import axios from "axios";
import apiClient from "../../services/apiClient";

export const removeFromWishlist = async (
  wishlistId: string,
  userId: string,
  queryClient: QueryClient
) => {
  const deletedWishList = await apiClient.delete<WishlistType>(
    `/carts/carts/wishlist/${wishlistId}/`
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
  const createdWishList = await apiClient.post<WishlistType>(
    `/carts/carts/wishlist/`,
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
      const foundUserCart = await apiClient.get<CartType>(
        `/carts/user/${userId}/`
      );
      console.log("Found User's Cart user isAuthenticated", foundUserCart);
      // Check if the user already has a cart
      if (foundUserCart.status === 200) {
        // Add item to the cart
        const addedCartItem = await apiClient.post(
          `/carts/${foundUserCart.data.id}/items/`,
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
          const newCartForUser = await apiClient.post(`/carts/`, {
            user_id: userId,
          });

          // Add item to newCartForUser
          const addedCartItem = await apiClient.post(
            `/carts/${newCartForUser.data.id}/items/`,
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
      const foundCart = await apiClient.get(`/carts/${cartIdFromCookie}/`);

      if (foundCart.status === 200) {
        // Add Items to cart
        const addedItem = await apiClient.post(
          `/carts/${cartIdFromCookie}/items/`,
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
        const createdCart = await apiClient.post<{ id: string }>(`/carts/`, {
          user_id: null,
        });
        if (createdCart.status === 201) {
          setCookie("cartId", createdCart.data.id, 7);

          // Add item to newCartForUser
          const addedCartItem = await apiClient.post(
            `/carts/${createdCart.data.id}/items/`,
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
