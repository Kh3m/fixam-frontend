import { useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import Space from "../../components/Space";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { control } = useFormContext();
  return (
    <>
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
