import Card from "../../components/Card";
import Container from "../../components/Container";
import HR from "../../components/HR";
import Heading from "../../components/Heading";
import Main from "../../components/Main";
import SimilarAds from "../../components/Products/SimilarAds";
import Space from "../../components/Space";
import FlexWithOrderSummary from "../FlexWithOrderSummary";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

const CartPage = () => {
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
              <span className="text-lg">3 Items</span>
            </div>
            <HR styles="mt-4 mb-8" />
            <CartItems />
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
