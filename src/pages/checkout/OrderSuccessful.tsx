import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";

const OrderSuccessful = () => {
  return (
    <section
      className="fixed top-0 left-0 bottom-0 right-0 flex items-center 
    justify-center bg-white"
    >
      <div className="text-center w-1/2">
        <div className="flex justify-center">
          <FcApproval size={150} />
        </div>

        <h3 className="text-3xl my-4">Thank you for your ordering</h3>
        <p className=" my-4 text-gray-500">
          Thank you for choosing us. Your support keeps us motivated to
          continually exceed expectations and deliver excellence.
        </p>
        <div className="flex justify-center space-x-5">
          <Link to="/users/orders">
            <button
              className="py-2 px-2 border border-gray-400 rounded-md 
          outline-none text-sm w-[200px]"
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
