import { useLocation } from "react-router-dom";
import LogoFormSplitLayout from "../../components/LogoFormSplitLayout";
import MainContent from "../../components/MainContent";
import LoginForm from "./LoginForm";
import RegistrationPage from "./RegistrationForm";

const AuthPage = () => {
  const { pathname } = useLocation();
  const isLogin = pathname.includes("login");
  return (
    <MainContent>
      <LogoFormSplitLayout>
        {isLogin ? <LoginForm /> : <RegistrationPage />}
      </LogoFormSplitLayout>
    </MainContent>
  );
};

export default AuthPage;
