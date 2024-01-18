import { GoogleLogin } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
import useAuth from "../../hooks/useAuth";

//   access_token: string;
//   token_type: string;
//   expires_in: number;
//   scope: string;
//   authuser: string;
//   prompt: string;
// };

const GoogleAuthButton = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse.credential);
          // console.log("tokenResponse", credentialResponse.credential);
          await loginWithGoogle({
            access_token: credentialResponse.credential,
            id_token: credentialResponse.credential,
          });
          location.href = "/";
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
    // <Button
    //   onClick={() => loginWithGoogle()}
    //   type="button"
    //   variant="text"
    //   styles="w-full font-bold text-lg pagination-shadow flex justify-center items-center p-2 space-x-4"
    // >
    //   <GoogleSVG />
    //   <span>{children}</span>
    // </Button>
  );
};

export default GoogleAuthButton;
