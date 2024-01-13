export type OrderItemType = {
  id: string;
  order_id: string;
  variation_ids: string[];
  product_id: string;
  item_price: number;
  quantity: number;
  is_item_ordered: boolean;
  created_at: string;
  modified_at: string;
};

export type OrderType = {
  id: string;
  user_id: string;
  order_items: OrderItemType[];
  delivery_address_id: string;
  order_delivery_status: string;
  order_total_price: number;
  delivery_charge: number;
  order_payment_status: string;
  created_at: string;
  modified_at: string;
};
