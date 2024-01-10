import { useEffect, useState } from "react";
import Space from "../../../components/Space";
import OrderSummaryCard from "./OrderSummaryCard";
import { dummyApiClient } from "../../../services/apiClient";
import { orderBaseURL } from "../../../services/baseURLs";
import useAuth from "../../../hooks/useAuth";
import useOrders from "../../../hooks/order/useOrders";
import Spinner from "../../../components/Spinner";

const UserOrderPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState();

  const { data: userOrders, isLoading } = useOrders(user?.id || "");

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await dummyApiClient.get(
        `${orderBaseURL}/orders/user/${user?.id}/`
      );
      setOrders(orders.data);
    };

    if (user) {
      fetchOrders();
    }
  }, []);

  if (isLoading)
    return (
      <div className="my-4 flex justify-center">
        <Spinner />
      </div>
    );
  console.log("userOrders?.results", userOrders?.results);

  return (
    <>
      {userOrders?.results.map((order) => (
        <>
          <OrderSummaryCard />
          <Space spacing="my-6" />
          <OrderSummaryCard />
        </>
      ))}
      {/* <OrderSummaryCard />
      <Space spacing="my-6" />
      <OrderSummaryCard /> */}
    </>
  );
};

export default UserOrderPage;
