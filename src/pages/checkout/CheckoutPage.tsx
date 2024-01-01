import Container from "../../components/Container";
import Main from "../../components/Main";
import Space from "../../components/Space";
import FlexWithOrderSummary from "../FlexWithOrderSummary";
import OrderSummary from "../cart/OrderSummary";
import CheckoutInfoWithState from "./CheckoutInfoWithState";

const CheckoutPage = () => {
  return (
    <Main>
      <Space spacing="my-14" />
      <Container>
        <FlexWithOrderSummary OrderSummary={<OrderSummary />}>
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
