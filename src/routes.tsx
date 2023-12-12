import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/product/ProductsPage";
import AppLayout from "./pages/AppLayout";
import ProductDetailPage from "./pages/product/ProductDetailPage";

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
    ],
  },
  { path: "/login", element: <div>Login</div> },
  { path: "/register", element: <div>Register</div> },
  { path: "/admin", element: <div>Admin</div> },
]);

export default router;
