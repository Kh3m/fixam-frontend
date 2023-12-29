import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/product/ProductsPage";
import AppLayout from "./pages/AppLayout";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import StorePage from "./pages/store/StorePage";
import StoreProducts from "./pages/store/products/StoreProducts";
import StoreSettings from "./pages/store/StoreSettings";
import StoreMessages from "./pages/store/StoreMessages";
import StoreCustomers from "./pages/store/StoreCustomers";
import StoreOrders from "./pages/store/orders/StoreOrders";
import StoreCreationProcessPage from "./pages/store/StoreCreationProcessPage";
import AddProductForm from "./pages/store/AddProductForm/AddProductForm";
import DashboardPage from "./pages/dashboard/DashboardPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import WishListPage from "./pages/wishlist/WishListPage";
import LoginPage from "./pages/auth/LoginForm";
import RegistrationPage from "./pages/auth/RegistrationForm";
import AuthPage from "./pages/auth/AuthPage";
import ViewProduct from "./pages/store/products/ViewProduct";
import LogoutPage from "./pages/auth/LogoutPage";

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
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/wishlist",
        element: <WishListPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
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
              { path: "add-product", element: <AddProductForm /> },
              { path: ":productId", element: <ViewProduct /> },
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
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegistrationPage /> },
      { path: "logout", element: <LogoutPage /> },
    ],
  },

  { path: "/stores/create", element: <StoreCreationProcessPage /> },
  { path: "/admin", element: <div>Admin</div> },
]);

export default router;
