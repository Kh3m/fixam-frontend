import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import {
  Controller,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import GoogleAuthButton from "../../components/Logins/GoogleAuthButton";
import PasswordInput from "../../components/PasswordInput";
import Space from "../../components/Space";
import useAuth, { UserCredentialRegType } from "../../hooks/useAuth";
import {
  validateConfirmPassword,
  validateEmail,
} from "../../utils/validationRules";
import { ErrorMessage } from "./LoginForm";

const RegistrationForm = () => {
  const methods = useForm();
  // const { state } = useLocation();

  // const { logout } = useAuth();

  // const navigate = useNavigate();
  // console.log("CALLEDDD useAuth useNavigate in RegistrationForm");
  // useEffect(() => {
  //   logout();
  //   navigate("/");
  // }, []);

  const clientId = import.meta.env.VITE_G_CLIENT_ID;

  const {
    register,
    isRegistrationSuccessful,
    isAuthenticating,
    authErrorMessages,
  } = useAuth();

  const { handleSubmit, watch, control } = methods;

  const onSubmit = async (credentials: FieldValues) => {
    await register(credentials as UserCredentialRegType);
  };

  useEffect(() => {
    // console.log("LOGIN SUCCESS", state, state.from);
    if (isRegistrationSuccessful) {
      // console.log("LOGIN SUCCESS", state, state.from);
      // if (state && state.from && state.from.includes("/checkout/payment")) {
      //   location.href = "/checkout/payment";
      // } else {

      location.href = "/email/verify";
      // }
      // }
    }
  }, [isRegistrationSuccessful]);

  // const {user}
  const password1 = watch("password1"); // Get the value of the "password" field

  // const username = watch("username");
  const email = watch("email");

  const isPasswordValid = (value: string) => {
    const isLengthValid = value.length >= 8;
    const isNotSimilarToEmail = value.toLowerCase() !== email?.toLowerCase();
    const isNotSimple =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d$&+,:;=?@#|'<>.^*()%!-]+$/.test(
        value
      );

    if (!isLengthValid) return "Password must be at least 8 characters long.";
    if (!isNotSimilarToEmail)
      return "Password cannot be similar to the username or email.";
    if (!isNotSimple)
      return "Password should include letters, numbers, and special characters.";
    return isLengthValid && isNotSimilarToEmail && isNotSimple;
  };

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
            <Space spacing="my-4" />
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
            <ErrorMessage authErrorMessages={authErrorMessages} />
            <Space spacing="my-4" />
            <Input
              rules={{
                required: {
                  value: true,
                  message: "Enter your first name",
                },
              }}
              control={control}
              defaultInputValue=""
              name="first_name"
              placeholder="First Name"
            />
            <Space spacing="my-4" />
            <Input
              rules={{
                required: {
                  value: true,
                  message: "Enter your last name",
                },
              }}
              defaultInputValue=""
              control={control}
              name="last_name"
              placeholder="Last Name"
            />
            <Space spacing="my-4" />
            <Input
              rules={{
                required: { value: true, message: "Enter your email" },
                validate: validateEmail,
              }}
              defaultInputValue=""
              control={control}
              name="email"
              placeholder="Email"
              type="email"
            />
            <Space spacing="my-4" />
            <Input
              rules={{
                required: {
                  value: true,
                  message: "Enter your phone number",
                },
              }}
              defaultInputValue=""
              control={control}
              name="phone"
              placeholder="Phone"
              type="tel"
            />
            <Space spacing="my-4" />
            <PasswordInput
              rules={{
                required: { value: true, message: "Enter Password" },
                validate: isPasswordValid,
              }}
              defaultInputValue=""
              control={control}
              name="password1"
              placeholder="Password"
            />
            <Space spacing="my-4" />
            <PasswordInput
              rules={{
                required: { value: true, message: "Password didn't match" },
                validate: (value: string) =>
                  validateConfirmPassword(password1, value),
              }}
              defaultInputValue=""
              control={control}
              name="password2"
              placeholder="Confirm Password"
            />
            <Space spacing="my-4" />
            <Controller
              control={control}
              name="agreement_newsletter"
              render={() => {
                return (
                  <CheckBox
                    boxFor="agreement"
                    text="Yes, I want to receive daily newsletters and email notification"
                  />
                );
              }}
            />
            {/* <Controller
        control={control}
        name="agreement_terms"
        render={() => {
          return (
            <CheckBox
              boxFor="agreement"
              text="I have read and agree with the website terms and conditions"
            />
          );
        }}
      /> */}

            <Space spacing="my-8" />
          </div>
          <div className="w-[80%] m-auto md:px-28">
            <Button
              disabled={isAuthenticating}
              variant="elevated"
              styles="w-full bg-fyellow text-white font-bold text-lg fshadow"
            >
              Create Account
            </Button>
            <Space spacing="my-4" />
            <div className="text-center">
              <span>Already have an account?</span>
              <Link
                className="text-fyellow ml-2 font-semibold cursor-pointer"
                to="/auth/login"
              >
                Log in
              </Link>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default RegistrationForm;
