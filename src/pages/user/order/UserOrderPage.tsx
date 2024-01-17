import EmptyStateUser from "../../../components/EmptyStateUser";
import Space from "../../../components/Space";
import Spinner from "../../../components/Spinner";
import useOrders from "../../../hooks/order/useOrders";
import useAuth from "../../../hooks/useAuth";
import OrderSummaryCard from "./OrderSummaryCard";

const UserOrderPage = () => {
  const { userInfo } = useAuth();

  const { data: userOrders, isLoading } = useOrders(userInfo?.user?.id || "");

  if (isLoading)
    return (
      <div className="my-4 flex justify-center">
        <Spinner />
      </div>
    );

  console.log("userOrders?.results", userOrders?.results);

  // if (!userOrders) return <EmptyStateUser heading="No Order Placed" />;

  if (userOrders && !userOrders.results.length)
    return (
      <EmptyStateUser
        heading="You don’t have any order yet"
        callToActionText="Continue Shopping"
      />
    );

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
