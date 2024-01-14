import { Outlet, useLocation, useParams } from "react-router-dom";
import UserPageContainer from "../UserPageContainer";

const UserOrderLayoutPage = () => {
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
      itemsCount={orderId ? `#${orderId.split("-")[0]}` : ""}
      hasBackArrow={orderId ? true : false}
    >
      <Outlet />
    </UserPageContainer>
  );
};

export default UserOrderLayoutPage;
