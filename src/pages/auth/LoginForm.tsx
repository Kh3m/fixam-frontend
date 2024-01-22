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
              to="/forget-password"
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

// {
//   "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1OTI3MTcxLCJpYXQiOjE3MDU5MjY1NzEsImp0aSI6IjgwMGFmODYxNzBlYTQ3ODM4MDYzYjdmN2Q1MGZhMjk1IiwidXNlcl9pZCI6IjBmYTIxMzZlLTljNDUtNDJlMC05ZWFhLTMyODUxOGM1MjIwOSJ9.3owFIFElwIaDk7vnlt6oSIyObpGGLZNdm4-1b6_kZi4",
//   "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwNTkyNzc3MSwiaWF0IjoxNzA1OTI2NTcxLCJqdGkiOiIxZDQwMGJlNDE5YWI0ODY5ODMxYTFhMjE0OTAzZGIzMyIsInVzZXJfaWQiOiIwZmEyMTM2ZS05YzQ1LTQyZTAtOWVhYS0zMjg1MThjNTIyMDkifQ.PmLhc0vlCrWcX2cwyUUa1mL9tXyCs4DDPI3Sdw7v-CM",
//   "user": {
//       "id": "0fa2136e-9c45-42e0-9eaa-328518c52209",
//       "last_login": "2024-01-22T12:29:31.450450Z",
//       "is_superuser": false,
//       "first_name": "Sir",
//       "last_name": "IKE",
//       "is_active": true,
//       "date_joined": "2024-01-17T13:52:10.839266Z",
//       "is_vendor": false,
//       "phone": "+2347062528242",
//       "email": "imchukwu@gmail.com",
//       "profile": null,
//       "addresses": [
//           "1c9d7bb9-1058-4f75-bde5-726a8baba489"
//       ]
//   },
//   "access_expiration": "2024-01-22T12:39:31.452909Z",
//   "refresh_expiration": "2024-01-22T12:49:31.452914Z"
// }

// cartId=a1de70e4-f4f8-45e6-86c5-202157f1caec;
// userId=0fa2136e-9c45-42e0-9eaa-328518c52209;
// accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1OTI3MTcxLCJpYXQiOjE3MDU5MjY1NzEsImp0aSI6IjgwMGFmODYxNzBlYTQ3ODM4MDYzYjdmN2Q1MGZhMjk1IiwidXNlcl9pZCI6IjBmYTIxMzZlLTljNDUtNDJlMC05ZWFhLTMyODUxOGM1MjIwOSJ9.3owFIFElwIaDk7vnlt6oSIyObpGGLZNdm4-1b6_kZi4;
// refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwNTkyNzc3MSwiaWF0IjoxNzA1OTI2NTcxLCJqdGkiOiIxZDQwMGJlNDE5YWI0ODY5ODMxYTFhMjE0OTAzZGIzMyIsInVzZXJfaWQiOiIwZmEyMTM2ZS05YzQ1LTQyZTAtOWVhYS0zMjg1MThjNTIyMDkifQ.PmLhc0vlCrWcX2cwyUUa1mL9tXyCs4DDPI3Sdw7v-CM'

// g_state={"i_l":0}; cartId=a1de70e4-f4f8-45e6-86c5-202157f1caec;
// userId=0fa2136e-9c45-42e0-9eaa-328518c52209;
// accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1OTI3ODQ0LCJpYXQiOjE3MDU5MjcyNDMsImp0aSI6ImI4NDkxYzBlOGU5ZjQ0MzRiYjBhMWEzZTk3MGRhZjY0IiwidXNlcl9pZCI6IjBmYTIxMzZlLTljNDUtNDJlMC05ZWFhLTMyODUxOGM1MjIwOSJ9.diseZgO1sP9XkqUSKOqwsWqqLVKPU9QybimdcC-ppE8;
// refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwNTkyODQ0NCwiaWF0IjoxNzA1OTI3MjQ0LCJqdGkiOiJjZTZhMTI1NDU0NGM0OTkxYTdiMWM3OTkwY2Y2OWZhZCIsInVzZXJfaWQiOiIwZmEyMTM2ZS05YzQ1LTQyZTAtOWVhYS0zMjg1MThjNTIyMDkifQ.P15sDmZTszPNSO9D-RPBgB0R6okbfcz__60NHU7EUQM
