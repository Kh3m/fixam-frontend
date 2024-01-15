import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Hamburger = () => {
  const { authUserDummy } = useAuth();
  const navigate = useNavigate();

  const handleTestAuth = () => {
    // Set login to true or false to perform dummy auth or not
    const login = false;
    if (login) {
      authUserDummy("24ac295f-175f-4909-af44-b3d3a2a4e18f");
      navigate("/");
    }
  };
  return (
    <div onClick={handleTestAuth}>
      <div className="h-1 w-8 rounded-sm bg-white"></div>
      <div className="h-1 w-8 my-[0.4rem] rounded-sm bg-white"></div>
      <div className="h-1 w-8  rounded-sm bg-white"></div>
    </div>
  );
};

export default Hamburger;
