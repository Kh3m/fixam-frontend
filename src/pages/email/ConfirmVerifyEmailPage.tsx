import { FaVoicemail } from "react-icons/fa6";
import Heading from "../../components/Heading";

const ConfirmVerifyEmailPage = () => {
  return (
    <section className="flex items-center justify-center py-8 flex-col space-y-4">
      <div>
        <FaVoicemail size={42} />
      </div>

      <Heading variant="h2" styles="text-2xl">
        A verification link has been sent to your email address
      </Heading>
      <p>To start using fixam.africa, we need to verify your email</p>

      {/* <Button styles="text-fyellow-shades-500 font-bold">
        CLICK TO VERIFY
      </Button> */}
    </section>
  );
};

export default ConfirmVerifyEmailPage;
