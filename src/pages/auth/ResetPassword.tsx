import { FieldValues, FormProvider, useForm } from "react-hook-form";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import LogoFormSplitLayout from "../../components/LogoFormSplitLayout";
import MainContent from "../../components/MainContent";
import Space from "../../components/Space";
import { useParams } from "react-router-dom";
import apiClient from "../../services/apiClient";
import { validateConfirmPassword } from "../../utils/validationRules";
import { useState } from "react";

const ResetPassword = () => {
  const methods = useForm();
  const { uid, token } = useParams();
  const [isLoadingResetPassword, setIsLoadingResetPassword] = useState(false);

  const { control, handleSubmit, watch, getFieldState } = methods;

  const password1 = watch("new_password", "");
  console.log("getFieldState", getFieldState.toString());
  const onSubmit = async (fieldValues: FieldValues) => {
    setIsLoadingResetPassword(true);
    console.log("uid && token", uid, token);
    if (uid && token) {
      const responseReset = await apiClient.post(
        `/users/auth/password/reset/confirm/`,
        {
          new_password1: fieldValues.new_password,
          new_password2: fieldValues.confirm_password,
          uid,
          token,
        }
      );

      console.log("responseReset", responseReset);
      setIsLoadingResetPassword(false);
    }
  };

  return (
    <MainContent>
      <LogoFormSplitLayout>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="text-center w-[80%] m-auto">
              <Heading variant="h3" styles="text-2xl">
                Reset Password
              </Heading>
              <Space spacing="my-4" />
              <Input
                name="new_password"
                control={control}
                placeholder="Enter New Password"
              />
              <Space spacing="my-4" />{" "}
              <Input
                name="confirm_password"
                rules={{
                  validate: (value: string) =>
                    validateConfirmPassword(password1, value),
                }}
                control={control}
                placeholder="Confirm New Password"
              />
              <Space spacing="my-4" />
              <div className="px-5">
                <Button
                  disabled={isLoadingResetPassword}
                  variant="elevated"
                  styles="text-xl pagination-shadow
                w-full font-semibold bg-fyellow-shades-500 text-white font-semibold text-center"
                >
                  Reset Password
                </Button>
              </div>
              <Space spacing="my-4" />
            </section>
          </form>
        </FormProvider>
      </LogoFormSplitLayout>
    </MainContent>
  );
};

export default ResetPassword;
