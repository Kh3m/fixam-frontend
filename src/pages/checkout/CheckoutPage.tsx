import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Main from "../../components/Main";
import Space from "../../components/Space";
import FlexWithOrderSummary from "../FlexWithOrderSummary";
import OrderSummary from "../cart/OrderSummary";
import CheckoutInfoWithState from "./CheckoutInfoWithState";
import {
  cartBaseURL,
  orderBaseURL,
  productBaseURL,
} from "../../services/baseURLs";
import { CartItemType, CartType } from "../../services/cart";
import { useLocation } from "react-router-dom";
import { dummyApiClient } from "../../services/apiClient";
import useUserAddresses from "../../hooks/user/useUserAddresses";
import useAuth from "../../hooks/useAuth";
import OrderSuccessful from "./OrderSuccessful";
import { useQueryClient } from "@tanstack/react-query";

type OrderType = {
  id: string;
  user_id: string;
  delivery_address_id: string;
  order_delivery_status: string;
  order_total_price: string;
  delivery_charge: number;
  order_payment_status: string;
};

const CheckoutPage = () => {
  const queryClient = useQueryClient();

  const { state } = useLocation();
  const { user } = useAuth();

  const [subtotal, setSubtotal] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItemType[] | null>(null);
  const [cartId, setCartId] = useState<string>("");

  const fetchProductPrice = async (productId: string): Promise<number> => {
    const response = await fetch(`${productBaseURL}/products/${productId}/`);
    const data = await response.json();
    return data.price;
  };

  console.log("State Cart Data", state.cartData);

  useEffect(() => {
    const calculateSubtotal = async () => {
      if (user) {
        // Get Cart for user
        const userCart = await dummyApiClient.get<CartType>(
          `${cartBaseURL}/carts/user/${user.id}/`
        );

        console.log("UserCart", userCart);
        console.log("CARTTTT", cartId);
        setCartItems(userCart.data.cart_items);
        setCartId(state.cartData);

        let total = 0;
        // Fetch prices for each product in the cart
        for (const item of userCart.data.cart_items) {
          const price = await fetchProductPrice(item.prod_id);
          total += price * item.quantity;
        }
        setSubtotal(total);
      }
    };

    calculateSubtotal();
  }, [cartId]);

  const { data: userAddresses } = useUserAddresses(user?.id || "");

  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const [orderSuccessful, setOrderSuccessful] = useState(false);

  const handleCheckout = async () => {
    setIsCreatingOrder(true);
    try {
      console.log("userAddresses", userAddresses);
      if (userAddresses && user) {
        const userDefaultAddressId = userAddresses[0].id;

        const orderData = {
          user_id: user.id,
          delivery_address_id: userDefaultAddressId,
          order_delivery_status: "Placed",
          delivery_charge: 11.43,
          order_payment_status: "Pending",
        };

        console.log(
          "<><><><><> CART ITEMS <><><><><>",
          state.cartData,
          state.cartData.cart_items,
          subtotal
        );

        const createdOrder = await dummyApiClient.post<OrderType>(
          `${orderBaseURL}/orders/`,
          orderData
        );

        console.log("Created Order", createdOrder);

        // if (cartItems) {
        console.log("WE ENTERED THIS PART", state.cartData.cart_items);
        for (const item of state.cartData.cart_items) {
          const price = await fetchProductPrice(item.prod_id);

          const orderItem = {
            product_id: item.prod_id,
            item_price: price,
            quantity: item.quantity,
          };

          const createOrderItem = await dummyApiClient.post(
            `${orderBaseURL}/orders/${createdOrder.data.id}/orderitems/create`,
            orderItem
          );

          console.log("createOrderItem", createOrderItem);
          console.log("cart", cartId);
        }

        const deleteCart = await dummyApiClient.delete(
          `${cartBaseURL}/carts/${state.cartData.id}/`
        );
        console.log("deleteCart", deleteCart);
        // }

        // Invalidate the cache for ["carts", "user", user?.id]
        queryClient.invalidateQueries({
          queryKey: ["carts", "user", user?.id],
        });
      }

      setIsCreatingOrder(false);
      setOrderSuccessful(true);
    } catch (error) {
      console.log("Error Creating Order", error);
      setIsCreatingOrder(false);
    }

    // console.log("userAddresses", userAddresses[0]);
    // const userDefaultAddressId = await dummyApiClient.get(``);
  };

  return (
    <Main>
      {orderSuccessful && <OrderSuccessful />}
      <Space spacing="my-14" />
      <Container>
        <FlexWithOrderSummary
          OrderSummary={
            <OrderSummary
              subtotal={state.subtotal}
              handleCheckout={handleCheckout}
              isCreatingOrder={isCreatingOrder}
            />
          }
        >
          <section className="grow">
            <CheckoutInfoWithState heading="DELIVERY ADDRESS" />
            <Space spacing="my-14" />
            <CheckoutInfoWithState heading="PAYMENT METHOD" isPaymentMethod />
          </section>
        </FlexWithOrderSummary>

        <Space spacing="my-14" />
      </Container>
      <Space spacing="my-14" />
    </Main>
  );
};

export default CheckoutPage;
