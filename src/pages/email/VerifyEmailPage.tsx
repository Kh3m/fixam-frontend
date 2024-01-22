import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Center from "../../components/Center";
import Spinner from "../../components/Spinner";
import SuccessfulLogin from "../../components/SuccessfulLogin";
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
      <SuccessfulLogin
        message="Login now to start using fixam.africa and explore the wide range of
  products we have waiting for you."
        heading="Your email has been verified"
      />
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
