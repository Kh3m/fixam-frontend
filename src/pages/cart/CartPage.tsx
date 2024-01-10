import { Link, useLocation } from "react-router-dom";
import Card from "../../components/Card";
import Container from "../../components/Container";
import HR from "../../components/HR";
import Heading from "../../components/Heading";
import Main from "../../components/Main";
import SimilarAds from "../../components/Products/SimilarAds";
import Space from "../../components/Space";
import { CartType } from "../../services/cart";
import FlexWithOrderSummary from "../FlexWithOrderSummary";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";
import { useEffect, useState } from "react";
import { productBaseURL } from "../../services/baseURLs";

const CartPage = () => {
  const { state } = useLocation();
  const userCart = state.userCart as CartType;
  const [subtotal, setSubtotal] = useState<number | null>(null);

  const fetchProductPrice = async (productId: string): Promise<number> => {
    const response = await fetch(`${productBaseURL}/products/${productId}`);
    const data = await response.json();
    return data.price;
  };
  useEffect(() => {
    const calculateSubtotal = async () => {
      let total = 0;
      // Fetch prices for each product in the cart
      for (const item of userCart.cart_items) {
        const price = await fetchProductPrice(item.prod_id);
        total += price * item.quantity;
      }
      setSubtotal(total);
    };
    if (userCart) {
      calculateSubtotal();
    }
  }, [userCart]);

  return (
    <Main>
      <Space spacing="my-14" />
      <Container>
        <FlexWithOrderSummary
          OrderSummary={<OrderSummary subtotal={subtotal || 0} />}
        >
          <Card styles="px-12">
            <div className="flex justify-between font-semibold text-2xl">
              <Heading variant="h2" styles="text-2xl">
                Shopping Cart
              </Heading>
              <span className="text-lg">{userCart.total_quantity} Items</span>
            </div>
            <HR styles="mt-4 mb-8" />
            {!userCart ||
            (userCart &&
              Number.parseInt(userCart.total_quantity as string) === 0) ? (
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
};

export default CartPage;
