import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const LogoutPage = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, []);
  return <div>LogoutPage</div>;
};

export default LogoutPage;
