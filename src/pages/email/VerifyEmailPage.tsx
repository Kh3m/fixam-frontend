import { useEffect, useState } from "react";
import { FaVoicemail } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Center from "../../components/Center";
import Heading from "../../components/Heading";
import Spinner from "../../components/Spinner";
import apiClient from "../../services/apiClient";

const VerifyEmailPage = () => {
  const { tokenKey } = useParams();
  const [isVerficationSuccessful, setIsVerficationSuccessful] = useState(false);

  // const getTokenFromUrl = (tokenStr: string) => {
  //   return tokenStr.split("/")[
  //     tokenStr.split("/").length - 1 || tokenStr.split("/").length - 2
  //   ];
  // };

  useEffect(() => {
    const handleEmailVerification = async () => {
      try {
        const emailVerification = await apiClient.post(
          `/users/auth/registration/verify-email/`,
          {
            key: tokenKey,
          }
        );

        if (emailVerification.status == 200) {
          // Verification successful
          setIsVerficationSuccessful(true);
        }
      } catch (error) {
        console.log("Something went wrong verifying email", error);
      }
    };

    handleEmailVerification();
  }, [isVerficationSuccessful]);

  if (isVerficationSuccessful)
    return (
      <section
        className="flex w-1/3 items-center justify-center py-8 flex-col m-auto
    text-center space-y-4"
      >
        <div>
          <FaVoicemail size={42} />
        </div>

        <Heading variant="h2">Your email has been verified</Heading>
        <p className="dark:text-gray-300">
          Login now to start using fixam.africa and explore the wide range of
          products we have waiting for you.
        </p>

        <Link
          to="/auth/login"
          className="rounded-md font-bold bg-fyellow-shades-500 text-white w-full py-2"
        >
          Login Now
        </Link>
      </section>
    );

  return (
    <div className="my-12">
      <Center>
        <Spinner />
      </Center>
    </div>
  );
};

export default VerifyEmailPage;
