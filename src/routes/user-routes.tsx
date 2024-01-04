import UserPage from "../pages/user/UserPage";
import AccountPage from "../pages/user/account/AccountPage";
import UserNotificationPage from "../pages/user/notification/UserNotificationPage";
import OrderConfirmCancel from "../pages/user/order/OrderConfirmCancel";
import OrderDetail from "../pages/user/order/OrderDetail";
import OrderDetailLayout from "../pages/user/order/OrderDetailLayout";
import OrderTrack from "../pages/user/order/OrderTrack";
import UserOrderLayoutPage from "../pages/user/order/UserOrderLayoutPage";
import UserOrderPage from "../pages/user/order/UserOrderPage";
import WishListPage from "../pages/user/wishlist/WishListPage";

export default {
  path: "/users",
  element: <UserPage />,
  children: [
    {
      path: "account",
      element: <AccountPage />,
    },
    {
      path: "orders",
      element: <UserOrderLayoutPage />,
      children: [
        {
          index: true,
          element: <UserOrderPage />,
        },
        {
          path: ":orderId",
          element: <OrderDetailLayout />,
          children: [
            {
              index: true,
              element: <OrderDetail />,
            },
            {
              path: "track",
              element: <OrderTrack />,
            },
            {
              path: "confirm-cancel",
              element: <OrderConfirmCancel />,
            },
          ],
        },
      ],
    },
    {
      path: "notification",
      element: <UserNotificationPage />,
    },
    {
      path: "wishlist",
      element: <WishListPage />,
    },
  ],
};
