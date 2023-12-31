import HomePage from "../pages/HomePage";
import CartPage from "../pages/cart/CartPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import ProductsPage from "../pages/product/ProductsPage";
import AppLayout from "../pages/AppLayout";
import userRoutes from "./user-routes";
import ReviewsPage from "../pages/review/ReviewsPage";

export default {
  path: "/",
  element: <AppLayout />,
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
      path: ":categoryName/:productName",
      element: <ProductDetailPage />,
    },
    {
      path: "reviews",
      element: <ReviewsPage />,
    },
    userRoutes,
  ],
};
