import Space from "../../../components/Space";
import OrderSummaryCard from "./OrderSummaryCard";

const UserOrderPage = () => {
  return (
    <>
      <OrderSummaryCard />
      <Space spacing="my-6" />
      <OrderSummaryCard />
    </>
  );
};

export default UserOrderPage;
