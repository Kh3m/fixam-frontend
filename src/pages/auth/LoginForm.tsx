import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import GoogleAuthButton from "../../components/Logins/GoogleAuthButton";
import PasswordInput from "../../components/PasswordInput";
import Space from "../../components/Space";
import ToastMessage from "../../components/ToastMessage";
import useAuth, { UserCredentialLoginType } from "../../hooks/useAuth";
import { ErrorMessagesType } from "../../utils/types";

interface Props {
  authErrorMessages: ErrorMessagesType;
  axiosErrorMessage?: string;
}
export const ErrorMessage = ({
  authErrorMessages,
}: // axiosErrorMessage,
Props) => {
  return (
    <>
      {authErrorMessages && Object.values(authErrorMessages).length > 0 && (
        <ToastMessage
          message={Object.values(authErrorMessages)
            .toString()
            .replace(",", "\n")}
          type={"error"}
          shoudlShowToast={!!Object.values(authErrorMessages).length}
        />
      )}
    </>
  );
};

const LoginForm = () => {
  const clientId = import.meta.env.VITE_G_CLIENT_ID;
  const methods = useForm();
  // const { state } = useLocation();
  const {
    login,
    isLoginSuccessful,
    isAuthenticating,
    authErrorMessages,
    axiosErrorMessage,
  } = useAuth();

  const { handleSubmit, control } = methods;

  const onSubmit = async (credentials: FieldValues) => {
    await login(credentials as UserCredentialLoginType);
  };

  useEffect(() => {
    // console.log("LOGIN SUCCESS", state, state.from);
    if (isLoginSuccessful) {
      // console.log("LOGIN SUCCESS", state, state.from);
      // if (state && state.from && state.from.includes("/checkout/payment")) {
      //   location.href = "/checkout/payment";
      // } else {
      if (isLoginSuccessful) location.href = "/";
      // }
    }
  }, [isLoginSuccessful]);

  console.log("authErrorMessages from LoginForm", authErrorMessages);
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="my-6">
          <div className="md:px-28">
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

            <Space spacing="my-8" />
            {/* <Button
                variant="text"
                styles="w-full font-bold text-lg pagination-shadow flex justify-center
                items-center p-2 space-x-4"
              >
                <GoogleSVG />
                <span>
                  {isLogin ? "Sign in with Google" : "Sign up with Google"}
                </span>
              </Button> */}

            <GoogleOAuthProvider clientId={clientId}>
              <GoogleAuthButton />
            </GoogleOAuthProvider>

            <Space spacing="my-8" />
            {axiosErrorMessage ? (
              <ToastMessage
                message={axiosErrorMessage}
                type={"error"}
                shoudlShowToast={!!axiosErrorMessage}
              />
            ) : (
              <ErrorMessage authErrorMessages={authErrorMessages} />
            )}
            <Space spacing="my-4" />
            <Input
              rules={{
                required: { value: true, message: "Enter your email" },
              }}
              control={control}
              defaultInputValue=""
              name="email"
              placeholder="Email"
              type="email"
            />
            <Space spacing="my-4" />
            <PasswordInput
              defaultInputValue=""
              control={control}
              name="password"
              placeholder="Password"
            />
            <Space spacing="my-4" />
            <Link
              to="/auth/reset-password"
              className="text-left block text-fyellow  font-semibold"
            >
              Forgot Password?
            </Link>

            <Space spacing="my-8" />
          </div>
          <div className="w-[80%] m-auto md:px-28">
            <Button
              disabled={isAuthenticating}
              variant="elevated"
              styles="w-full bg-fyellow text-white font-bold text-lg fshadow"
            >
              Login
            </Button>
            <Space spacing="my-4" />
            <div className="text-center">
              <span>Don’t have an account?</span>
              <Link
                className="text-fyellow ml-2 font-semibold cursor-pointer"
                to="/auth/register"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default LoginForm;
