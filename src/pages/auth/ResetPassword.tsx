import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import LogoFormSplitLayout from "../../components/LogoFormSplitLayout";
import MainContent from "../../components/MainContent";
import Space from "../../components/Space";

const ResetPassword = () => {
  const methods = useForm();

  const { control } = methods;
  return (
    <MainContent>
      <LogoFormSplitLayout>
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
            control={control}
            placeholder="Confirm New Password"
          />
          <Space spacing="my-4" />
          <div className="px-5">
            <Button
              variant="elevated"
              styles="text-xl pagination-shadow
                w-full font-semibold bg-fyellow-shades-500 text-white font-semibold text-center"
            >
              Reset Password
            </Button>
          </div>
          <Space spacing="my-4" />
        </section>
      </LogoFormSplitLayout>
    </MainContent>
  );
};

export default ResetPassword;
