import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import Space from "../../components/Space";

const OrderSuccessful = () => {
  return (
    <section
      className="flex items-center 
    justify-center z-50"
    >
      <div className="text-center w-1/2">
        <div className="flex justify-center">
          <FcApproval size={150} />
        </div>

        <h3 className="text-lg md:text-3xl my-4 dark:text-gray-300">
          Thank you for your ordering
        </h3>
        <p className="text-sm md:text-base my-4 text-gray-500">
          Thank you for choosing us. Your support keeps us motivated to
          continually exceed expectations and deliver excellence.
        </p>
        <Space spacing="my-12" />
        <div className="flex justify-center space-x-5">
          <Link to="/users/orders">
            <button
              className="py-2 px-2 border border-gray-400 rounded-md 
          outline-none text-sm w-[200px] dark:text-gray-300"
            >
              VIEW ORDER
            </button>
          </Link>

          <Link to="/">
            <button
              className="py-2 px-2 border border-fyellow-shades-400 rounded-md
              bg-fyellow-shades-500 outline-none text-sm w-[200px] text-fyellow-shades-100"
            >
              CONTINUE SHOPPING
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccessful;
