import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Main from "../../components/Main";
import Space from "../../components/Space";

const CheckoutPage = () => {
  return (
    <Main>
      <Space spacing="my-14" />
      <Container>
        <Outlet />
      </Container>
      <Space spacing="my-14" />
    </Main>
  );
};

export default CheckoutPage;
