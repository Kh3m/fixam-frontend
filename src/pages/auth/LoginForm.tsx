import { useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import Space from "../../components/Space";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { control } = useFormContext();
  const { authUserDummy } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // Set login to true or false to perform dummy auth or not
    const login = false;
    if (login) {
      authUserDummy("24ac295f-175f-4909-af44-b3d3a2a4e18f");
      navigate("/");
    }
  }, []);

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
