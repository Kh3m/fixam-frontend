import DashboardPage from "../pages/dashboard/DashboardPage";
import AddProductForm from "../pages/store/AddProductForm/AddProductForm";
import AddVariantForm from "../pages/store/AddProductForm/AddVariantForm";
import EditProductForm from "../pages/store/AddProductForm/EditProductForm";
import StoreNotifications from "../pages/store/StoreNotifications";
import { StorePage } from "../pages/store/StorePage";
import StoreCustomers from "../pages/store/customers/StoreCustomers";
import StoreMembers from "../pages/store/members/StoreMembers";
import StoreOrderDetail from "../pages/store/orders/StoreOrderDetail";
import StoreOrderHistory from "../pages/store/orders/StoreOrderHistory";
import StoreOrders from "../pages/store/orders/StoreOrders";
import StoreProducts from "../pages/store/products/StoreProducts";
import ViewProduct from "../pages/store/products/ViewProduct";

export default {
  path: "/stores",
  element: <StorePage />,
  children: [
    {
      path: ":slug/dashboard",
      element: <DashboardPage />,
    },
    {
      path: ":slug/products",
      element: <StoreProducts />,
      children: [
        { path: ":productId", element: <ViewProduct /> },
        { path: ":productId/edit", element: <EditProductForm /> },
        { path: ":productId/add-variant", element: <AddVariantForm /> },
        { path: "add-product", element: <AddProductForm /> },
      ],
    },
    {
      path: ":slug/orders",
      element: <StoreOrders />,
      children: [
        { path: "history", element: <StoreOrderHistory /> },
        { path: ":orderId", element: <StoreOrderDetail /> },
      ],
    },
    {
      path: ":slug/customers",
      element: <StoreCustomers />,
    },
    {
      path: ":slug/notification",
      element: <StoreNotifications />,
    },
    {
      path: ":slug/members",
      element: <StoreMembers />,
    },
  ],
};
