import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./auth-routes";
import indexRoutes from "./index-routes";
import StoreCreationProcessPage from "../pages/store/StoreCreationProcessPage";
import PrivateRoutes from "../pages/PrivateRoutes";
import storeRoutes from "./store-routes";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import Payment from "../pages/checkout/Payment";
import PaymentSuccess from "../pages/checkout/PaymentSuccess";

const router = createBrowserRouter([
  indexRoutes,
  authRoutes,
  {
    element: <PrivateRoutes />,
    children: [
      { path: "create-store", element: <StoreCreationProcessPage /> },
      {
        path: "checkout",
        element: <CheckoutPage />,
        children: [
          { path: "payment", element: <Payment /> },
          { path: "payment/success", element: <PaymentSuccess /> },
        ],
      },
      storeRoutes,
    ],
  },
]);

export default router;
