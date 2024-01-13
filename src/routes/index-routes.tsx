import HomePage from "../pages/HomePage";
import CartPage from "../pages/cart/CartPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import ProductsPage from "../pages/product/ProductsPage";
import AppLayout from "../pages/AppLayout";
import userRoutes from "./user-routes";
import ReviewsPage from "../pages/review/ReviewsPage";
import ErrorPage from "../pages/error/ErrorPage";

export default {
  path: "/",
  element: <AppLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "checkout",
      element: <CheckoutPage />,
    },
    {
      path: "cart",
      element: <CartPage />,
    },
    { path: "admin", element: <div>Admin</div> },

    {
      path: ":categoryName",
      element: <ProductsPage />,
    },
    {
      path: ":categoryName/:productId",
      element: <ProductDetailPage />,
    },
    {
      path: ":categoryName/:productId/reviews",
      element: <ReviewsPage />,
    },
    userRoutes,
  ],
};
