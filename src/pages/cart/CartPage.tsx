import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Container from "../../components/Container";
import HR from "../../components/HR";
import Heading from "../../components/Heading";
import Main from "../../components/Main";
import SimilarAds from "../../components/Products/SimilarAds";
import Space from "../../components/Space";
import Spinner from "../../components/Spinner";
import useCartForUser from "../../hooks/cart/useCartForUser";
import useAuth from "../../hooks/useAuth";
import FlexWithOrderSummary from "../FlexWithOrderSummary";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";
import apiClient from "../../services/apiClient";
import Button from "../../components/Button";
import { formatPrice } from "../../utils/number-formatter";
import { getCookie } from "../../utils/cookies";
import { CartType } from "../../services/cart";

const CartPage = () => {
  const { user } = useAuth();

  // const { data: userCart, isLoading: isLoadingUserCart } = useCartForUser(
  //   user?.id || ""
  // );

  const { data, isLoading: isLoadingUserCart } = useCartForUser(
    user?.id
  ).withUserId();

  const {
    data: userCartWithCartIdData,
    isLoading: isLoadingUserCartWithCartId,
  } = useCartForUser(getCookie("cartId") || "").withCartId();

  const userCart = data as CartType;
  const userCartWithCartId = userCartWithCartIdData as CartType;

  const [subtotal, setSubtotal] = useState<number | null>(null);
  const fetchProductPrice = async (productId: string): Promise<number> => {
    const response = await apiClient.get(`/products/${productId}/`);
    return response.data.selling_price;
  };

  useEffect(() => {
    if (userCart) {
      const calculateSubtotal = async () => {
        let total = 0;
        // Fetch prices for each product in the cart
        for (const item of userCart.cart_items) {
          const price = await fetchProductPrice(item.prod_id);
          total += price * item.quantity;
        }
        setSubtotal(total);
      };
      calculateSubtotal();
    }

    if (userCartWithCartId) {
      const calculateSubtotal = async () => {
        let total = 0;
        // Fetch prices for each product in the cart
        for (const item of userCartWithCartId.cart_items) {
          const price = await fetchProductPrice(item.prod_id);
          total += price * item.quantity;
        }
        setSubtotal(total);
      };
      calculateSubtotal();
    }
  }, [userCart, userCartWithCartId]);

  if (isLoadingUserCart || isLoadingUserCartWithCartId)
    return (
      <div className="flex my-4 justify-center items-center">
        <Spinner />
      </div>
    );
  console.log("UserCart", userCart);
  console.log("userCartWithCartId", userCartWithCartId);

  if (!userCart && !userCartWithCartId)
    return (
      <Main>
        <Space spacing="my-14" />
        <Container>
          <FlexWithOrderSummary OrderSummary={<OrderSummary subtotal={0} />}>
            <Card styles="px-12">
              <div className="flex justify-between font-semibold text-2xl">
                <Heading variant="h2" styles="text-lg md:text-2xl">
                  Shopping Cart
                </Heading>
                <span className="text-sm md:text-lg">0 Items</span>
              </div>
              <HR styles="mt-4 mb-8" />

              <div className="flex justify-center items-center my-8 flex-col space-y-3">
                <Heading variant="h3">Your Cart is Empty</Heading>
                <Link to="/" className="text-fyellow-shades-500">
                  Shop Now
                </Link>
              </div>

              <Space spacing="my-8" />
            </Card>
          </FlexWithOrderSummary>
          <Space spacing="my-14" />
          <SimilarAds heading="Wishlists" />

          <Space spacing="my-14" />
          <SimilarAds heading="Recommended" />
        </Container>
        <Space spacing="my-14" />
      </Main>
    );

  if (userCart)
    return (
      <Main>
        <Space spacing="my-14" />
        <Container>
          <Link to={"/checkout"} state={{ userCart, subtotal }}>
            <Button
              styles="text-center w-full mb-4 bg-fyellow-shades-500 py-2
            text-white font-semibold pagination-shadow md:hidden"
              disabled={!subtotal}
            >
              Proceed to checkout ({formatPrice(subtotal as number)})
            </Button>
          </Link>
          <FlexWithOrderSummary
            OrderSummary={
              <OrderSummary cartData={userCart} subtotal={subtotal || 0} />
            }
          >
            <Card styles="px-12">
              <div className="flex justify-between font-semibold text-2xl">
                <Heading variant="h2" styles="text-lg md:text-2xl">
                  Shopping Cart
                </Heading>
                <span className="text-sm md:text-lg">
                  {userCart.total_quantity} Items
                </span>
              </div>
              <HR styles="mt-4 mb-4" />
              {!userCart ||
              (userCart &&
                Number.parseInt(userCart.total_quantity as string) == 0) ? (
                <div className="flex justify-center items-center my-8 flex-col space-y-3">
                  <Heading variant="h3">Your Cart is Empty</Heading>
                  <Link to="/" className="text-fyellow-shades-500">
                    Shop Now
                  </Link>
                </div>
              ) : (
                <CartItems
                  cartItems={userCart.cart_items}
                  cartId={userCart.id!}
                />
              )}
              <Space spacing="my-8" />
            </Card>
          </FlexWithOrderSummary>
          <Space spacing="my-14" />
          <SimilarAds heading="Wishlists" />

          <Space spacing="my-14" />
          <SimilarAds heading="Recommended" />
        </Container>
        <Space spacing="my-14" />
      </Main>
    );

  // if (!userCartWithCartId)
  //   return (
  //     <Main>
  //       <Space spacing="my-14" />
  //       <Container>
  //         <FlexWithOrderSummary OrderSummary={<OrderSummary subtotal={0} />}>
  //           <Card styles="px-12">
  //             <div className="flex justify-between font-semibold text-2xl">
  //               <Heading variant="h2" styles="text-lg md:text-2xl">
  //                 Shopping Cart
  //               </Heading>
  //               <span className="text-sm md:text-lg">0 Items</span>
  //             </div>
  //             <HR styles="mt-4 mb-8" />

  //             <div className="flex justify-center items-center my-8 flex-col space-y-3">
  //               <Heading variant="h3">Your Cart is Empty</Heading>
  //               <Link to="/" className="text-fyellow-shades-500">
  //                 Shop Now
  //               </Link>
  //             </div>

  //             <Space spacing="my-8" />
  //           </Card>
  //         </FlexWithOrderSummary>
  //         <Space spacing="my-14" />
  //         <SimilarAds heading="Wishlists" />

  //         <Space spacing="my-14" />
  //         <SimilarAds heading="Recommended" />
  //       </Container>
  //       <Space spacing="my-14" />
  //     </Main>
  //   );

  if (userCartWithCartId)
    return (
      <Main>
        <Space spacing="my-14" />
        <Container>
          <Link to={"/checkout"} state={{ userCartWithCartId, subtotal }}>
            <Button
              styles="text-center w-full mb-4 bg-fyellow-shades-500 py-2
            text-white font-semibold pagination-shadow md:hidden"
              disabled={!subtotal}
            >
              Proceed to checkout ({formatPrice(subtotal as number)})
            </Button>
          </Link>
          <FlexWithOrderSummary
            OrderSummary={
              <OrderSummary
                cartData={userCartWithCartId}
                subtotal={subtotal || 0}
              />
            }
          >
            <Card styles="px-12">
              <div className="flex justify-between font-semibold text-2xl">
                <Heading variant="h2" styles="text-lg md:text-2xl">
                  Shopping Cart
                </Heading>
                <span className="text-sm md:text-lg">
                  {userCartWithCartId.total_quantity} Items
                </span>
              </div>
              <HR styles="mt-4 mb-4" />
              {!userCartWithCartId ||
              (userCartWithCartId &&
                Number.parseInt(userCartWithCartId.total_quantity as string) ==
                  0) ? (
                <div className="flex justify-center items-center my-8 flex-col space-y-3">
                  <Heading variant="h3">Your Cart is Empty</Heading>
                  <Link to="/" className="text-fyellow-shades-500">
                    Shop Now
                  </Link>
                </div>
              ) : (
                <CartItems
                  cartItems={userCartWithCartId.cart_items}
                  cartId={userCartWithCartId.id!}
                />
              )}
              <Space spacing="my-8" />
            </Card>
          </FlexWithOrderSummary>
          <Space spacing="my-14" />
          <SimilarAds heading="Wishlists" />

          <Space spacing="my-14" />
          <SimilarAds heading="Recommended" />
        </Container>
        <Space spacing="my-14" />
      </Main>
    );
};

export default CartPage;
