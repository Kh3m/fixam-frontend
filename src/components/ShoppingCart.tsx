import { FaCartShopping } from "react-icons/fa6";

const ShoppingCart = () => {
  return (
    <div className="relative">
      <FaCartShopping />
      <span
        className="absolute bottom-[55%] left-[50%] text-[12px] inline-flex items-center
      border border-fyellow-shades-500 
      justify-center bg-white text-fyellow-shades-500 rounded-[3px] h-4 w-5 font-semibold"
      >
        29
      </span>
    </div>
  );
};

export default ShoppingCart;
