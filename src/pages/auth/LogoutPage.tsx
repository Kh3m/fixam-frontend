import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const LogoutPage = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();
  // alert("CALLEDDD useAuth useNavigate");
  useEffect(() => {
    logout();
    navigate("/");
  }, []);

  return (
    <div>
      <Navigate to={"/"} />
    </div>
  );
};

export default LogoutPage;
