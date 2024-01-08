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
import MainContent from "../../components/MainContent";

const CartPage = () => {
  const { state } = useLocation();
  const userCart = state.userCart as CartType;

  if (
    !userCart ||
    (userCart && Number.parseInt(userCart.total_quantity as string) === 0)
  ) {
    return (
      <MainContent>
        <div className="flex justify-center items-center my-8 flex-col space-y-3">
          <Heading variant="h3">Your Cart is Empty</Heading>
          <Link to="/" className="text-fyellow-shades-500">
            Shop Now
          </Link>
        </div>
      </MainContent>
    );
  }

  return (
    <Main>
      <Space spacing="my-14" />
      <Container>
        <FlexWithOrderSummary OrderSummary={<OrderSummary />}>
          <Card styles="px-12">
            <div className="flex justify-between font-semibold text-2xl">
              <Heading variant="h2" styles="text-2xl">
                Shopping Cart
              </Heading>
              <span className="text-lg">{userCart.total_quantity} Items</span>
            </div>
            <HR styles="mt-4 mb-8" />
            <CartItems cartItems={userCart.cart_items} />
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
