import { FaCartShopping } from "react-icons/fa6";

interface Props {
  itemCount: number;
}
const ShoppingCart = ({ itemCount }: Props) => {
  return (
    <div className="relative">
      <FaCartShopping />
      {/* Show count if cart items are not < 0 */}
      {itemCount && (
        <span
          className="absolute bottom-[55%] left-[50%] text-[12px] inline-flex items-center
      border border-fyellow-shades-500 
      justify-center bg-white text-fyellow-shades-500 rounded-[3px] h-4 w-5 font-semibold"
        >
          {/* {cart?.total_quantity} */}
          {itemCount}
        </span>
      )}

      <span
        className="absolute bottom-[55%] left-[50%] text-[12px] inline-flex items-center
      border border-fyellow-shades-500 
      justify-center bg-white text-fyellow-shades-500 rounded-[3px] h-4 w-5 font-semibold"
      >
        {/* {cart?.total_quantity} */}
        {itemCount}
      </span>
    </div>
  );
};

export default ShoppingCart;
