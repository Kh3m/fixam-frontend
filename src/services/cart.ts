import { DummyAPIClient } from "./apiClient";
import { cartBaseURL } from "./baseURLs";

export type CartItemOptionType = {
  id?: number;
  attribute: string;
  value: string;
};

export type CartItemType = {
  id?: number;
  prod_id: string;
  item_options: CartItemOptionType[];
  quantity: number;
  is_active: boolean;
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

export const dummyUserCartService = (userId?: string) => {
  console.log(`/carts/user/${userId}/`);
  return new DummyAPIClient<CartType>(`${cartBaseURL}/carts/user/${userId}/`);
};

// MAIN IMPLEMENTATION STARTS HERE
const apiClient = new DummyAPIClient<CartType>("/carts/");

const cartService = apiClient;

export const userCartService = (userId?: string) => {
  console.log(`${cartService}/carts/user/${userId}/`);
  return new DummyAPIClient<CartType>(`${cartBaseURL}/carts/user/${userId}/`);
};

export default cartService;
