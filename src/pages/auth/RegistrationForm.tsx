import { Controller, useFormContext } from "react-hook-form";
import Space from "../../components/Space";
import Input from "../../components/Input";
import CheckBox from "../../components/CheckBox";

const RegistrationPage = () => {
  const { control } = useFormContext();

  return (
    <>
      <Input
        rules={{
          required: {
            value: true,
            message: "Enter your first name",
          },
        }}
        control={control}
        name="first_name"
        placeholder="First Name"
        required
      />
      <Space spacing="my-4" />
      <Input
        rules={{
          required: {
            value: true,
            message: "Enter your last name",
          },
        }}
        control={control}
        name="last_name"
        placeholder="Last Name"
        required
      />
      <Space spacing="my-4" />
      <Input
        rules={{
          required: { value: true, message: "Enter your email" },
        }}
        control={control}
        name="email"
        placeholder="Email"
        type="email"
        required
      />
      <Space spacing="my-4" />{" "}
      <Input
        rules={{
          required: {
            value: true,
            message: "Enter your phone number",
          },
        }}
        control={control}
        name="phone"
        placeholder="Phone"
        required
        type="tel"
      />
      <Space spacing="my-4" />
      <Input
        rules={{
          required: { value: true, message: "Enter your email" },
        }}
        control={control}
        name="password"
        placeholder="Password"
        type="password"
        required
      />
      <Space spacing="my-4" />
      <Input
        rules={{
          required: { value: true, message: "Password didn't match" },
        }}
        control={control}
        name="confirm_password"
        placeholder="Confirm Password"
        type="password"
        required
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
