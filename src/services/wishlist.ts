import { DummyAPIClient } from "./apiClient";
import { cartBaseURL } from "./baseURLs";

export type WishlistType = {
  id: string;
  user_id: string;
  product_id: string;
};

export const userWishlistService = (userId?: string) => {
  return new DummyAPIClient<WishlistType>(
    `${cartBaseURL}/carts/wishlist/user/${userId}/`
  );
};
