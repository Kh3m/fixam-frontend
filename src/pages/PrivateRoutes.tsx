import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { isAuthenticated, user } = useAuth();
  if (isAuthenticated() && !user) return <Navigate to="/auth/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
