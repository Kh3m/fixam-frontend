import { QueryClient } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import { CartItemType } from "../../services/cart";
import { OrderType } from "../../services/order";
import { UserType } from "../../services/user";
import { isAxiosError } from "axios";

type AuthorizationURLType = {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
};

const fetchProductPrice = async (productId: string): Promise<number> => {
  const response = await apiClient.get(`/products/${productId}/`);
  return response.data.selling_price;
};

type OrderItem = {
  product_id: string;
  item_price: number;
  quantity: number;
};

export const placeOrder = async (
  paymentMethod: string,
  userId: string,
  queryClient: QueryClient,
  subtotal: number,
  addressId?: string,
  cartId?: string,
  cartItems?: CartItemType[],
  orderItem?: OrderItem
) => {
  // setIsCreatingOrder(true);
  try {
    if (userId) {
      const orderData = {
        user_id: userId,
        delivery_address_id: addressId,
        order_delivery_status: "Placed",
        delivery_charge: 11.43,
        order_payment_status: "Pending",
      };

      const createdOrder = await apiClient.post<OrderType>(
        `/orders/`,
        orderData
      );

      if (cartItems) {
        for (const item of cartItems) {
          console.log("ITEM", item);
          const price = await fetchProductPrice(item.prod_id);
          console.log("ITEM PRICE", price);
          const orderItem = {
            product_id: item.prod_id,
            item_price: price,
            quantity: item.quantity,
          };

          console.log("OrderItem", orderItem, paymentMethod);

          const createOrderItem = await apiClient.post(
            `/orders/${createdOrder.data.id}/orderitems/create/`,
            orderItem
          );

          console.log("createOrderItem", createOrderItem);
        }
        // if (cartId) {
        const deleteCart = await apiClient.delete(`/carts/${cartId}/`);
        console.log("deleteCart", deleteCart);
        // }
      }

      if (orderItem) {
        console.log("BUY NOW OrderItem", orderItem);
        const createOrderItem = await apiClient.post(
          `/orders/${createdOrder.data.id}/orderitems/create/`,
          orderItem
        );
        console.log("BUY NOW CreateOrderItem", createOrderItem);
      }

      // Invalidate the cache for ["carts", "user", user?.id]
      queryClient.invalidateQueries({
        queryKey: ["carts", "user", userId],
      });

      console.log("invalidateQueries CreateOrderItem", paymentMethod);

      if (paymentMethod === "CardPayment") {
        const userData = await apiClient.get<UserType>(`/users/${userId}/`);
        console.log(
          "Inside CardPayment PaymentMethod userData",
          paymentMethod,
          userData
        );
        const newPayment = {
          amount: subtotal * 100,
          customer_email: userData.data.email,
          order_id: createdOrder.data.id,
          user_id: userId,
          payment_method: "CardPayment",
          payment_status: "Pending",
          currency: "NGN",
        };

        const createdPayment = await apiClient.post<AuthorizationURLType>(
          `/payments/paystack/make/`,
          newPayment
        );

        return (location.href = createdPayment.data.data.authorization_url);
      }
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("Error Creating Order", error);
    }
  }
};
