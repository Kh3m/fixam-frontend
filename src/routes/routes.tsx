import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./auth-routes";
import indexRoutes from "./index-routes";

const router = createBrowserRouter([indexRoutes, authRoutes]);

export default router;
