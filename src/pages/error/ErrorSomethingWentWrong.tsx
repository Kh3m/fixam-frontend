import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Space from "../../components/Space";
import Heading from "../../components/Heading";

const ErrorSomethingWentWrong = () => {
  return (
    <section className="w-[80%] m-auto h-screen flex justify-center items-center">
      <div className="flex-grow">
        <Heading
          variant="h2"
          styles="text-center text-8xl font-semibold text-gray-300"
        >
          Oops!
        </Heading>
        <Space spacing="my-5" />
        <Heading
          variant="h2"
          styles="text-center text-2xl font-semibold text-gray-500"
        >
          Something went wrong
        </Heading>
        <Space spacing="my-2" />
        <p className="text-lg text-center text-gray-600">
          Don’t feel bad, let’s help you get back on track!
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
    </section>
  );
};

export default ErrorSomethingWentWrong;
