import AuthPage from "../pages/auth/AuthPage";
import RegistrationForm from "../pages/auth/RegistrationForm";
import LoginForm from "../pages/auth/LoginForm";
import LogoutPage from "../pages/auth/LogoutPage";

export default {
  path: "/auth",
  element: <AuthPage />,
  children: [
    { path: "login", element: <LoginForm /> },
    { path: "register", element: <RegistrationForm /> },
    { path: "logout", element: <LogoutPage /> },
  ],
};
