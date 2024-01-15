import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import LogoFormSplitLayout from "../../components/LogoFormSplitLayout";
import MainContent from "../../components/MainContent";
import GoogleSVG from "../../components/SVGs/GoogleSVG";
import Heading from "../../components/Heading";
import Space from "../../components/Space";
import { FormProvider, useForm } from "react-hook-form";

const AuthPage = () => {
  const methods = useForm();
  const { pathname } = useLocation();

  const isLogin = pathname.includes("login");

  return (
    <MainContent>
      <LogoFormSplitLayout>
        <div className="text-center">
          <div className="w-[50%] m-auto">
            <Heading variant="h1">Welcome!</Heading>
            <p>
              Please enter your email and password to login or create an account
            </p>
          </div>
          <Space spacing="my-8" />
          <FormProvider {...methods}>
            <Outlet />
          </FormProvider>

          <Space spacing="my-8" />
        </div>
        <div className="w-[80%] m-auto">
          <Button
            variant="elevated"
            styles="w-full bg-fyellow text-white font-bold text-lg fshadow"
          >
            {isLogin ? "Login" : "Create Account"}
          </Button>
          <Space spacing="my-4" />
          <Button
            variant="text"
            styles="w-full font-bold text-lg fshadow flex justify-center 
            items-center p-2 space-x-4"
          >
            <GoogleSVG />
            <span>Sign in with Google</span>
          </Button>
          <Space spacing="my-4" />
          <div className="text-center">
            <span>
              {isLogin ? "Don’t have an account?" : "Already have an account?"}
            </span>
            <Link
              className="text-fyellow ml-2 font-semibold cursor-pointer"
              to={isLogin ? "/auth/register" : "/auth/login"}
            >
              {isLogin ? "Sign Up" : "Log in"}
            </Link>
          </div>
        </div>
      </LogoFormSplitLayout>
    </MainContent>
  );
};

export default AuthPage;
