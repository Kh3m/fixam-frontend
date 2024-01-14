import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import errorMessageSVG from "../../assets/svgs/error-message.svg";
import Heading from "../../components/Heading";
import Space from "../../components/Space";

const Error404 = () => {
  return (
    <section className="w-[80%] m-auto h-screen flex justify-center items-center">
      <div className="items-center flex justify-center">
        <div className="w-1/2">
          <img src={errorMessageSVG} alt="Error Message" />
        </div>
        <div className="flex-grow">
          <Heading
            variant="h2"
            styles="text-center text-8xl font-semibold text-gray-300"
          >
            404
          </Heading>
          <p className="text-lg text-center text-gray-500">
            We looked everywhere and couldn’t find the page you’re requesting
            for. Don’t feel bad, let’s help you get back on track!
          </p>
          <Space spacing="my-10" />
          <Link
            to="/"
            className="flex justify-center items-center px-2 py-1 rounded-md
            bg-fyellow-shades-500 text-white font-semibold w-52 m-auto"
          >
            <FaChevronLeft />
            <span>Head to Home Page</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
