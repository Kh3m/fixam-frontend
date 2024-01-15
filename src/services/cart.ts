import { APIClient } from "./apiClient";
import { cartBaseURL } from "./baseURLs";

export type CartItemOptionType = {
  id?: number;
  attribute: string;
  value: string;
};

export type CartItemType = {
  id?: number;
  prod_id: string;
  item_options?: CartItemOptionType[];
  quantity: number;
  is_active?: boolean;
  created_at?: Date;
  modified_at?: Date;
};

export type CartType = {
  id?: string;
  user_id: string;
  cart_items: CartItemType[];
  total_quantity?: string;
  created_at?: Date;
  modified_at?: Date;
};

export const userCartService = (userId?: string) => {
  return new APIClient<CartType>(`${cartBaseURL}/carts/user/${userId}/`);
};

// Service for /carts/:{cartId}/items/
export const cartItemService = (cartId: string) => {
  return new APIClient<CartItemType, CartItemType>(`/carts/${cartId}/items/`);
};

// MAIN IMPLEMENTATION STARTS HERE
export default new APIClient<CartType>("/carts/");
