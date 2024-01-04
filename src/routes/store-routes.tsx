import DashboardPage from "../pages/dashboard/DashboardPage";
import AddProductForm from "../pages/store/AddProductForm/AddProductForm";
import EditProductForm from "../pages/store/AddProductForm/EditProductForm";
import StoreCustomers from "../pages/store/StoreCustomers";
import StoreMessages from "../pages/store/StoreMessages";
import StorePage from "../pages/store/StorePage";
import StoreSettings from "../pages/store/StoreSettings";
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
        { path: "add-product", element: <AddProductForm /> },
      ],
    },
    {
      path: ":slug/orders",
      element: <StoreOrders />,
    },
    {
      path: ":slug/customers",
      element: <StoreCustomers />,
    },
    {
      path: ":slug/messages",
      element: <StoreMessages />,
    },
    {
      path: ":slug/settings",
      element: <StoreSettings />,
    },
  ],
};
