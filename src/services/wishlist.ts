import { APIClient } from "./apiClient";

export type WishlistType = {
  id: string;
  user_id: string;
  product_id: string;
};

export const userWishlistService = (userId?: string) => {
  return new APIClient<WishlistType>(`/carts/wishlist/user/${userId}/`);
};
