import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/product/ProductsPage";
import AppLayout from "./pages/AppLayout";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import StorePage from "./pages/store/StorePage";
import StoreProducts from "./pages/store/StoreProducts";
import StoreSettings from "./pages/store/StoreSettings";
import StoreMessages from "./pages/store/StoreMessages";
import StoreCustomers from "./pages/store/StoreCustomers";
import StoreOrders from "./pages/store/StoreOrders";
import StoreCreationProcessPage from "./pages/store/StoreCreationProcessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products/featured/:featuredName",
        element: <ProductsPage />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "/stores/:storeId",
        element: <StorePage />,
        children: [
          {
            path: "products",
            element: <StoreProducts />,
          },
          {
            path: "orders",
            element: <StoreOrders />,
          },
          {
            path: "customers",
            element: <StoreCustomers />,
          },
          {
            path: "messages",
            element: <StoreMessages />,
          },
          {
            path: "settings",
            element: <StoreSettings />,
          },
        ],
      },
    ],
  },
  { path: "/login", element: <div>Login</div> },
  { path: "/register", element: <div>Register</div> },
  { path: "/stores/create", element: <StoreCreationProcessPage /> },
  { path: "/admin", element: <div>Admin</div> },
]);

export default router;
