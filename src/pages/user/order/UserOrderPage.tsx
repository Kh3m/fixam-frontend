import { useEffect, useState } from "react";
import Space from "../../../components/Space";
import OrderSummaryCard from "./OrderSummaryCard";
import { dummyApiClient } from "../../../services/apiClient";
import { orderBaseURL } from "../../../services/baseURLs";
import useAuth from "../../../hooks/useAuth";
import useOrders from "../../../hooks/order/useOrders";
import Spinner from "../../../components/Spinner";
import EmptyStateUser from "../../../components/EmptyStateUser";

const UserOrderPage = () => {
  const { user } = useAuth();

  const { data: userOrders, isLoading } = useOrders(user?.id || "");

  if (isLoading)
    return (
      <div className="my-4 flex justify-center">
        <Spinner />
      </div>
    );

  console.log("userOrders?.results", userOrders?.results);

  if (userOrders && !userOrders.results.length)
    return <EmptyStateUser heading="No Order Placed" />;
  if (userOrders)
    return (
      <>
        {userOrders?.results.map((order) => (
          <>
            {order.order_items.map((orderitem) => (
              <OrderSummaryCard orderitem={orderitem} />
            ))}
            <Space spacing="my-6" />
          </>
        ))}
      </>
    );
};

export default UserOrderPage;
