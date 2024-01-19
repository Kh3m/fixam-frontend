import AuthPage from "../pages/auth/AuthPage";
import LoginForm from "../pages/auth/LoginForm";
import RegistrationForm from "../pages/auth/RegistrationForm";

export default {
  path: "/auth",
  element: <AuthPage />,
  children: [
    { path: "login", element: <LoginForm /> },
    { path: "register", element: <RegistrationForm /> },
  ],
};
