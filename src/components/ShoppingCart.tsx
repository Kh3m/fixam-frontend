import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import apiClient from "../services/apiClient";
import { getCookie } from "../utils/cookies";

type DateType = {
  created_at: Date;
  modified_at: Date;
};

type CartItems = {
  id: 0;
  prod_id: string;
  item_options: [
    {
      id: 0;
      attribute: string;
      value: string;
    }
  ];
  quantity: 0;
  is_active: true;
  date: DateType;
};

type CartType = {
  id: string;
  user_id?: string;
  cart_items: CartItems[];
  date: DateType;
};

const ShoppingCart = () => {
  const [cart, setCart] = useState<CartType | null>(null);

  useEffect(() => {
    const cartIdFromCookie = getCookie("cartId");

    if (cartIdFromCookie) {
      apiClient.get<CartType>(`/carts/${cartIdFromCookie}/`).then((res) => {
        setCart(res.data);
      });
    }
  }, []);

  return (
    <div className="relative">
      <FaCartShopping />
      <span
        className="absolute bottom-[55%] left-[50%] text-[12px] inline-flex items-center
      border border-fyellow-shades-500 
      justify-center bg-white text-fyellow-shades-500 rounded-[3px] h-4 w-5 font-semibold"
      >
        {cart?.cart_items.length || 29}
      </span>
    </div>
  );
};

export default ShoppingCart;
