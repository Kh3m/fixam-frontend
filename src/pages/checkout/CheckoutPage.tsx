import { FormProvider, useForm } from "react-hook-form";
import Container from "../../components/Container";
import Main from "../../components/Main";
import Space from "../../components/Space";
import CustomerAddressField from "./CustomerAddressField";
import OrderSummary from "../cart/OrderSummary";
import FlexWithOrderSummary from "../FlexWithOrderSummary";
import CustomerDeliveryAddressFields from "./CustomerDeliveryAddressFields";
import PaymentMethodFields from "./PaymentMethodFields";

const CheckoutPage = () => {
  const methods = useForm();

  return (
    <Main>
      <Space spacing="my-14" />
      <Container>
        <FlexWithOrderSummary OrderSummary={<OrderSummary />}>
          <FormProvider {...methods}>
            <form className="w-full">
              <CustomerAddressField />
              <Space spacing="my-14" />
              <CustomerDeliveryAddressFields />
              <Space spacing="my-14" />
              <PaymentMethodFields />
            </form>
          </FormProvider>
        </FlexWithOrderSummary>

        <Space spacing="my-14" />
      </Container>
      <Space spacing="my-14" />
    </Main>
  );
};

export default CheckoutPage;
