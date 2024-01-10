import { Outlet, useLocation, useParams } from "react-router-dom";
import UserPageContainer from "../UserPageContainer";
import useAuth from "../../../hooks/useAuth";
import useOrders from "../../../hooks/order/useOrders";

const UserOrderLayoutPage = () => {
  const { user } = useAuth();

  // const { data, isLoa } = useOrders(user?.id || "");

  const { orderId } = useParams();
  const { pathname } = useLocation();
  return (
    <UserPageContainer
      heading={
        pathname.endsWith("orders")
          ? "Orders"
          : pathname.endsWith("track")
          ? "Order Progress"
          : pathname.endsWith("confirm-cancel")
          ? "Cancel Order"
          : "Order Details"
      }
      itemsCount={orderId ? `#${orderId}` : ""}
      hasBackArrow={orderId ? true : false}
    >
      <Outlet />
    </UserPageContainer>
  );
};

export default UserOrderLayoutPage;
