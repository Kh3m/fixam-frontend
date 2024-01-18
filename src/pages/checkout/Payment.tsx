import { useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Center from "../../components/Center";
import Container from "../../components/Container";
import Main from "../../components/Main";
import Space from "../../components/Space";
import Spinner from "../../components/Spinner";
import ToastMessage from "../../components/ToastMessage";
import { useCheckoutContext } from "../../contexts/checkout-context";
import useCartForUser from "../../hooks/cart/useCartForUser";
import useAuth from "../../hooks/useAuth";
import useResponsive from "../../hooks/useResponsive";
import useUserAddresses from "../../hooks/user/useUserAddresses";
import { CartType } from "../../services/cart";
import FlexWithOrderSummary from "../FlexWithOrderSummary";
import CartItem from "../cart/CartItem";
import OrderSummary from "../cart/OrderSummary";
import CheckoutDeliveryAddress from "./CheckoutDeliveryAddress";
import CheckoutPaymentInfo from "./CheckoutPaymentInfo";

import product1 from "../../assets/product_1.png";
import { placeOrder } from "./checkout-helpers";
import useProduct from "../../hooks/products/useProduct";

// type PaymentType = {
//   id: string;
//   tx_ref: string;
//   amount: number;
//   customer_email: string;
//   order_id: string;
//   user_id: string;
//   payment_method: string;
//   payment_status: string;
//   currency: string;
// };

const Payment = () => {
  const queryClient = useQueryClient();

  const {
    state: { subtotal },
  } = useLocation();

  const [searchParams] = useSearchParams();
  const buyNowProductId = searchParams.get("buy");

  //   const navigate = useNavigate();
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const [orderSuccessful, setOrderSuccessful] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const isMd = useResponsive("md");
  const { userInfo } = useAuth();
  const { data: userAddresses } = useUserAddresses(userInfo?.user?.id || "");
  const { data: cartForUser, isLoading: isLoadingUserCart } = useCartForUser(
    undefined,
    userInfo?.user?.id || ""
  ).withUserId();
  const { data: buyNowProduct } = useProduct(buyNowProductId || "");

  const { checkoutState } = useCheckoutContext();

  // Set checkout addressId to default user's address
  const defautlUserAddressId = userAddresses?.find(
    (address) => address.is_default
  )?.id;

  console.log("defautlUserAddressId", defautlUserAddressId, userAddresses);
  // useEffect(() => {
  //   if (orderSuccessful) {
  //     location.href = `/checkout/payment/success`;
  //   }
  // }, [orderSuccessful]);

  const handleCheckout = async () => {
    setIsCreatingOrder(true);
    const cartData = cartForUser as CartType;

    if (
      checkoutState.paymentMethod &&
      (checkoutState.addressId || defautlUserAddressId)
    ) {
      console.log(
        "checkoutState.paymentMethod && (checkoutState.addressId || defautlUserAddressId)",
        defautlUserAddressId
      );

      console.log(
        "userAddresses && user && subtotal",
        userAddresses,
        userInfo,
        subtotal
      );

      if (userAddresses && userInfo && subtotal) {
        console.log("ENTERED HERER", userAddresses, userInfo, subtotal);
        try {
          if (buyNowProductId && buyNowProduct) {
            await placeOrder(
              checkoutState.paymentMethod,
              userInfo?.user.id,
              queryClient,
              subtotal,
              checkoutState.addressId || defautlUserAddressId,
              undefined,
              undefined,
              {
                product_id: buyNowProduct.id,
                item_price: buyNowProduct.selling_price as number,
                quantity: 1,
              }
            );
          } else {
            await placeOrder(
              checkoutState.paymentMethod,
              userInfo?.user?.id,
              queryClient,
              subtotal,
              checkoutState.addressId || defautlUserAddressId,
              cartData.id,
              cartData.cart_items
            );
          }
          setOrderSuccessful(true);
        } catch (error) {
          if (isAxiosError(error)) {
            setToastMessage(error.message);
            setIsCreatingOrder(false);
          }
        }
      } else {
        setToastMessage("Please ensure you select address and payment method");
        setIsCreatingOrder(false);
      }
    }
  };

  return (
    <Main>
      {!orderSuccessful && (
        <>
          <Space spacing="my-14" />
          <Container>
            <div
              className="text-center w-full mb-4 dark:text-gray-200
             dark:bg-slate-500 bg-fyellow-shades-500 py-2
            text-white font-semibold pagination-shadow md:hidden"
            >
              Order Confirmation
            </div>
            {toastMessage && (
              <div>
                <ToastMessage message={toastMessage} type="error" />
                <Space spacing="my-6" />
              </div>
            )}

            <FlexWithOrderSummary
              OrderSummary={
                <OrderSummary
                  subtotal={subtotal || buyNowProduct?.selling_price}
                  handleCheckout={handleCheckout}
                  isCreatingOrder={isCreatingOrder}
                />
              }
            >
              <section className="grow">
                <CheckoutDeliveryAddress />
                <Space spacing="my-6" />
                <CheckoutPaymentInfo />
              </section>
            </FlexWithOrderSummary>
            <Space spacing="my-6" />
            <section>
              {isLoadingUserCart ? (
                <Center>
                  <Spinner />
                </Center>
              ) : cartForUser && !buyNowProductId ? (
                cartForUser.cart_items.map((cartItem) => (
                  <CartItem
                    key={cartItem.id}
                    quantity={cartItem.quantity}
                    imageURL={product1}
                    productId={cartItem.prod_id}
                    cartId={cartForUser.id!}
                    itemId={cartItem.id!}
                    isCheckingOut
                  />
                ))
              ) : (
                <CartItem
                  quantity={1}
                  imageURL={buyNowProduct?.images[0] || ""}
                  productId={buyNowProduct?.id || ""}
                  isCheckingOut
                />
              )}
            </section>
            <Space spacing="my-6" />
            {!isMd && (
              <OrderSummary
                subtotal={subtotal || buyNowProduct?.selling_price}
                handleCheckout={handleCheckout}
                isCreatingOrder={isCreatingOrder}
              />
            )}
            <Space spacing="my-8" />
            {/* <Link to={"/checkout"}>
              <Button
                styles="text-center w-full mb-4 dark:text-gray-200
             dark:bg-slate-500 bg-fyellow-shades-500 py-2
            text-white font-semibold pagination-shadow md:hidden"
              >
                Place order
              </Button>
            </Link> */}
          </Container>
          <Space spacing="my-14" />
        </>
      )}
    </Main>
  );
};

export default Payment;
