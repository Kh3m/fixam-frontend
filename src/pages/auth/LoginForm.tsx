import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import Space from "../../components/Space";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { control } = useFormContext();
  const { authErrorMessages } = useAuth();

  console.log("authErrorMessages from LoginForm", authErrorMessages);
  return (
    <>
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
    </>
  );
};

export default LoginForm;
