import { GrStatusGood } from "react-icons/gr";
import Heading from "./Heading";
import { Link } from "react-router-dom";

interface Props {
  message: string;
  heading: string;
}
const SuccessfulLogin = ({ message, heading }: Props) => {
  return (
    <section
      className="flex w-1/3 items-center justify-center py-8 flex-col m-auto
    text-center space-y-4"
    >
      <div className="text-green-500">
        <GrStatusGood size={42} />
      </div>

      <Heading variant="h2">{heading}</Heading>
      <p className="dark:text-gray-300">{message}</p>

      <Link
        to="/auth/login"
        className="rounded-md font-bold bg-fyellow-shades-500 text-white w-full py-2"
      >
        Login Now
      </Link>
    </section>
  );
};

export default SuccessfulLogin;
