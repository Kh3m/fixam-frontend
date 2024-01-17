import { useEffect } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import LogoFormSplitLayout from "../../components/LogoFormSplitLayout";
import MainContent from "../../components/MainContent";
import GoogleSVG from "../../components/SVGs/GoogleSVG";
import Space from "../../components/Space";
import useAuth from "../../hooks/useAuth";

const AuthPage = () => {
  const methods = useForm();
  const { pathname } = useLocation();
  const isLogin = pathname.includes("login");
  // const href = useHref("/email/confirm/");

  const {
    register,
    login,
    isLoginSuccessful,
    isRegistrationSuccessful,
    isAuthenticating,
    // authErrorMessage,
  } = useAuth();

  const { handleSubmit } = methods;

  const onSubmit = async (credentials: FieldValues) => {
    if (isLogin) {
      await login(credentials);
    } else {
      console.log("Credentials", credentials);
      await register(credentials);
    }
  };

  useEffect(() => {
    if (isRegistrationSuccessful) {
      location.href = "/email/verify";
    }
    if (isLoginSuccessful) location.href = "/";
  }, [isRegistrationSuccessful, isLoginSuccessful]);

  return (
    <MainContent>
      <LogoFormSplitLayout>
        <FormProvider {...methods}>
          {/* {authErrorMessage && (
            <ToastMessage message={authErrorMessage} type={"error"} />
          )} */}
          <form onSubmit={handleSubmit(onSubmit)} className="my-6">
            <div className="text-center md:px-28">
              <div className="md:w-[50%] m-auto">
                <Heading
                  variant="h1"
                  styles="text-xl md:text-5xl text-fyellow-shades-500 font-bold 
                md:font-normal md:text-black dark:text-gray-300"
                >
                  Welcome!
                </Heading>
                {/* <p>
                Please enter your email and password to login or create an account
              </p> */}
              </div>
              <Space spacing="my-4" />
              <Button
                variant="text"
                styles="w-full font-bold text-lg pagination-shadow flex justify-center
                items-center p-2 space-x-4"
              >
                <GoogleSVG />
                <span>
                  {isLogin ? "Sign in with Google" : "Sign up with Google"}
                </span>
              </Button>
              <Space spacing="my-8" />

              <Outlet />

              <Space spacing="my-8" />
            </div>
            <div className="w-[80%] m-auto md:px-28">
              <Button
                disabled={isAuthenticating}
                variant="elevated"
                styles="w-full bg-fyellow text-white font-bold text-lg fshadow"
              >
                {isLogin ? "Login" : "Create Account"}
              </Button>
              <Space spacing="my-4" />
              <div className="text-center">
                <span>
                  {isLogin
                    ? "Don’t have an account?"
                    : "Already have an account?"}
                </span>
                <Link
                  className="text-fyellow ml-2 font-semibold cursor-pointer"
                  to={isLogin ? "/auth/register" : "/auth/login"}
                >
                  {isLogin ? "Sign Up" : "Log in"}
                </Link>
              </div>
            </div>
          </form>
        </FormProvider>
      </LogoFormSplitLayout>
    </MainContent>
  );
};

export default AuthPage;
