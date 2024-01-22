import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import LogoFormSplitLayout from "../../components/LogoFormSplitLayout";
import MainContent from "../../components/MainContent";
import Space from "../../components/Space";
import apiClient from "../../services/apiClient";
import { useState } from "react";

const ForgetPassword = () => {
  const methods = useForm();
  const [isResetLinkSent, setIsResetLinkSent] = useState(false);

  const { control, handleSubmit, getValues } = methods;
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (value: FieldValues) => {
    setIsLoading(true);
    console.log("Email", value);
    await apiClient.post(`/users/auth/password/reset/`, {
      email: value.email,
    });

    setIsResetLinkSent(true);
    setIsLoading(false);
  };
  return (
    <MainContent>
      {isResetLinkSent ? (
        <section className="text-center w-[80%] m-auto">
          <p>
            A password reset link has been sent to your email:
            <span className="ml-1 font-semibold">{getValues().email}</span>
          </p>
        </section>
      ) : (
        <LogoFormSplitLayout>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <section className="text-center w-[80%] m-auto">
                <Heading variant="h3" styles="text-2xl">
                  Forgotten your Password??
                </Heading>
                <Space spacing="my-4" />
                <div className="text-gray-500">
                  <p>Don’t worry</p>
                  <p>kindly enter your email below</p>
                  <p>and a password reset link will be sent to you</p>
                </div>
                <Space spacing="my-4" />
                <Input
                  defaultInputValue=""
                  name="email"
                  control={control}
                  placeholder="Enter Your Email here"
                />
                <Space spacing="my-4" />
                <div className="px-5">
                  <Button
                    disabled={isLoading}
                    variant="elevated"
                    styles="text-xl pagination-shadow
                        w-full font-semibold bg-fyellow-shades-500 text-white font-semibold text-center"
                  >
                    Reset Password
                  </Button>
                </div>
                <Space spacing="my-4" />
                <div>
                  Already have an account?
                  <Link
                    to="/auth/login"
                    className="text-fyellow-shades-500 font-semibold ml-1"
                  >
                    Log In
                  </Link>
                </div>
              </section>
            </form>
          </FormProvider>
        </LogoFormSplitLayout>
      )}
    </MainContent>
  );
};

export default ForgetPassword;
