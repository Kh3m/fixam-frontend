// import { StoreType } from "../entities/store";
// import APIClient from "./apiClient";

import { APIClient } from "./apiClient";

// const apiClient = new APIClient<StoreType | FormData>("/store/");

// export const createStore = (data: FormData) =>
//   apiClient.post(data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

export type StoreOrderType = {
  id: string;
  order: {
    id: string;
    user_id: string;
    order_delivery_status: string;
  };
  variation_ids: string[];
  product_id: string;
  item_price: number;
  quantity: number;
  is_item_cancelled: boolean;
  created_at: string;
  modified_at: string;
};

export const storeOrdersService = (storeId: string) =>
  new APIClient<StoreOrderType>(`/orders/${storeId}/store`);
