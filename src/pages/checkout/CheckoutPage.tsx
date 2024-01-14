import { ChangeEvent, useEffect, useState } from "react";
import Container from "../../components/Container";
import Main from "../../components/Main";
import Space from "../../components/Space";
import FlexWithOrderSummary from "../FlexWithOrderSummary";
import OrderSummary from "../cart/OrderSummary";
import CheckoutInfoWithState from "./CheckoutDeliveryAddress";
import {
  cartBaseURL,
  orderBaseURL,
  paymentBaseURL,
  productBaseURL,
  userBaseURL,
} from "../../services/baseURLs";
import { CartItemType, CartType } from "../../services/cart";
import { redirect, useLocation, useHref } from "react-router-dom";
import { dummyApiClient } from "../../services/apiClient";
import useUserAddresses from "../../hooks/user/useUserAddresses";
import useAuth from "../../hooks/useAuth";
import OrderSuccessful from "./OrderSuccessful";
import { useQueryClient } from "@tanstack/react-query";
import CheckoutPaymentInfo from "./CheckoutPaymentInfo";
import CheckoutDeliveryAddress from "./CheckoutDeliveryAddress";
import { useCheckoutContext } from "../../contexts/checkout-context";
import useCartForUser from "../../hooks/cart/useCartForUser";
import ToastMessage from "../../components/ToastMessage";
import { UserType } from "../../services/user";
import { AxiosError, isAxiosError } from "axios";

type OrderType = {
  id: string;
  user_id: string;
  delivery_address_id: string;
  order_delivery_status: string;
  order_total_price: string;
  delivery_charge: number;
  order_payment_status: string;
};

type PaymentType = {
  id: string;
  tx_ref: string;
  amount: number;
  customer_email: string;
  order_id: string;
  user_id: string;
  payment_method: string;
  payment_status: string;
  currency: string;
};

type AuthorizationURLType = {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
};
const CheckoutPage = () => {
  const queryClient = useQueryClient();

  const {
    state: { subtotal },
  } = useLocation();

  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const [orderSuccessful, setOrderSuccessful] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { user } = useAuth();
  const { data: userAddresses } = useUserAddresses(user?.id || "");
  const { data: cartForUser } = useCartForUser(user?.id || "");
  const { checkoutState, setAddressId, setPaymentMethod } =
    useCheckoutContext();

  const fetchProductPrice = async (productId: string): Promise<number> => {
    const response = await fetch(`${productBaseURL}/products/${productId}/`);
    const data = await response.json();
    return data.selling_price;
  };

  // Set checkout addressId to default user's address
  const defautlUserAddressId = userAddresses?.find(
    (address) => address.is_default
  )?.id;

  const handleCheckout = async () => {
    // setIsCreatingOrder(true);
    const cartData = cartForUser as CartType;

    if (
      checkoutState.paymentMethod &&
      (checkoutState.addressId || defautlUserAddressId)
    ) {
      try {
        console.log("userAddresses", userAddresses);
        if (userAddresses && user) {
          // const userDefaultAddressId = userAddresses[0].id;

          const orderData = {
            user_id: user.id,
            delivery_address_id:
              checkoutState.addressId || defautlUserAddressId,
            order_delivery_status: "Placed",
            delivery_charge: 11.43,
            order_payment_status: "Pending",
          };

          const createdOrder = await dummyApiClient.post<OrderType>(
            `${orderBaseURL}/orders/`,
            orderData
          );

          console.log("Created Order", createdOrder);

          // if (cartItems) {
          console.log("WE ENTERED THIS PART", cartData.cart_items);
          for (const item of cartData.cart_items) {
            console.log("ITEM", item);
            const price = await fetchProductPrice(item.prod_id);

            const orderItem = {
              product_id: item.prod_id,
              item_price: price,
              quantity: item.quantity,
            };

            console.log("OrderItem", orderItem);

            const createOrderItem = await dummyApiClient.post(
              `${orderBaseURL}/orders/${createdOrder.data.id}/orderitems/create/`,
              orderItem
            );

            console.log("createOrderItem", createOrderItem);
          }

          const deleteCart = await dummyApiClient.delete(
            `${cartBaseURL}/carts/${cartData.id}/`
          );
          console.log("deleteCart", deleteCart);
          // }

          // Invalidate the cache for ["carts", "user", user?.id]
          queryClient.invalidateQueries({
            queryKey: ["carts", "user", user?.id],
          });

          if (checkoutState.paymentMethod === "CardPayment") {
            const userData = await dummyApiClient.get<UserType>(
              `${userBaseURL}/users/${user.id}/`
            );
            const newPayment = {
              amount: subtotal * 100,
              customer_email: userData.data.email,
              order_id: createdOrder.data.id,
              user_id: user.id,
              payment_method: "CardPayment",
              payment_status: "Pending",
              currency: "NGN",
            };

            const createdPayment =
              await dummyApiClient.post<AuthorizationURLType>(
                `${paymentBaseURL}/payments/paystack/make/`,
                newPayment
              );

            return (location.href = createdPayment.data.data.authorization_url);
          }
        }

        setIsCreatingOrder(false);
        setOrderSuccessful(true);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log("Error Creating Order", error);
          setToastMessage(error.message);
        }
        setIsCreatingOrder(false);
      }
    } else {
      setToastMessage("Please ensure you select address and payment method");
      setIsCreatingOrder(false);
    }
  };

  return (
    <Main>
      {orderSuccessful && <OrderSuccessful />}
      {!orderSuccessful && (
        <>
          <Space spacing="my-14" />
          <Container>
            {toastMessage && (
              <div>
                <ToastMessage message={toastMessage} type="error" />
                <Space spacing="my-6" />
              </div>
            )}

            <FlexWithOrderSummary
              OrderSummary={
                <OrderSummary
                  subtotal={subtotal}
                  handleCheckout={handleCheckout}
                  isCreatingOrder={isCreatingOrder}
                />
              }
            >
              <section className="grow">
                <CheckoutDeliveryAddress />
                <Space spacing="my-14" />
                <CheckoutPaymentInfo />
              </section>
            </FlexWithOrderSummary>
            <Space spacing="my-14" />
          </Container>
          <Space spacing="my-14" />
        </>
      )}
    </Main>
  );
};

export default CheckoutPage;
