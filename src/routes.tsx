import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/product/ProductsPage";
import AppLayout from "./pages/AppLayout";

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
        path: "/products/:feauture",
        element: <ProductsPage />,
      },
      { path: "/login", element: <div>Login</div> },
      { path: "/register", element: <div>Register</div> },
      { path: "/admin", element: <div>Admin</div> },
    ],
  },
]);

export default router;
