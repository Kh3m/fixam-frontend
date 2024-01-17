import AppLayout from "../pages/AppLayout";
import ConfirmVerifyEmailPage from "../pages/Email/ConfirmVerifyEmailPage";
import VerifyEmailPage from "../pages/Email/VerifyEmailPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/cart/CartPage";
import ErrorPage from "../pages/error/ErrorPage";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import ProductsPage from "../pages/product/ProductsPage";
import ReviewsPage from "../pages/review/ReviewsPage";
import userRoutes from "./user-routes";

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
      path: "/email/confirm/:tokenKey",

      element: <VerifyEmailPage />,
    },
    {
      path: "/email/verify",
      element: <ConfirmVerifyEmailPage />,
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
