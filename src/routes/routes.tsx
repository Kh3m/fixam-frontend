import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./auth-routes";
import indexRoutes from "./index-routes";
import StoreCreationProcessPage from "../pages/store/StoreCreationProcessPage";
import PrivateRoutes from "../pages/PrivateRoutes";
import storeRoutes from "./store-routes";

const router = createBrowserRouter([
  indexRoutes,
  authRoutes,
  {
    element: <PrivateRoutes />,
    children: [
      { path: "create-store", element: <StoreCreationProcessPage /> },
      storeRoutes,
    ],
  },
]);

export default router;
