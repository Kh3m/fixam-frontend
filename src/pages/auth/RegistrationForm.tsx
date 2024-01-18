import { Controller, useFormContext } from "react-hook-form";
import CheckBox from "../../components/CheckBox";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import Space from "../../components/Space";
import { validateEmail } from "../../utils/validationRules";
import { ErrorMessagesType } from "../../utils/types";
import ToastMessage from "../../components/ToastMessage";

const errors: ErrorMessagesType = {
  email: [
    "A user is already registered with this e-mail address.",
    "KHEM",
    "ERRO",
  ],
  phone: ["Enter a valid phone number."],
};

const RegistrationPage = () => {
  const { control, watch } = useFormContext();
  // const {user}
  const password1 = watch("password1"); // Get the value of the "password" field

  const validateConfirmPassword = (value: string) => {
    if (value !== password1) return "Passwords do not match";
    return true;
  };

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
      {errors && Object.values(errors).length && (
        <ToastMessage
          message={Object.values(errors).toString().replace(",", "\n")}
          type={"error"}
          shoudlShowToast
        />
      )}
      <div>
        {/* {Object.keys(errors).map((field) => (
          <p key={field}>{errors[field][0]}</p>
        ))} */}
        {/* {Object.values(errors)} */}
      </div>
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
          validate: validateConfirmPassword,
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
    </>
  );
};

export default RegistrationPage;
