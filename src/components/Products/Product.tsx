import { ImageType } from "../../utils/types";
import { formatPrice } from "../../utils/number-formatter";
import Button from "../Button";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";

export type ProductType = {
  image: ImageType;
  status: "For Sale" | "Sold" | "New";
  favorite: boolean;
  title: string;
  price: number;
};

interface Props {
  product: ProductType;
  handleFavStatus: (index: number) => void;
  temId: number;
  isAdProduct?: boolean;
}

const Product = ({
  product: { status, title, favorite, price, image },
  handleFavStatus,
  temId,
  isAdProduct,
}: Props) => {
  const { isDarkMode } = useDarkMode();
  // slate-800
  const tempCartColor = isDarkMode ? "#1e293b" : "#FF9900";

  return (
    <article className={`${isAdProduct && "w-[265px]"} fshadow `}>
      <div className="relative">
        <div className="h-[250px]">
          <img
            {...image}
            className={`${
              isAdProduct ? " rounded-t-lg" : ""
            } object-cover h-full w-full`}
          />
        </div>
        {!isAdProduct && (
          <span
            className="py-2 px-4 absolute top-10 text-xs font-semibold
            dark:bg-slate-800 bg-fyellow text-white rounded-e-full w-28 inline-flex justify-center items-center"
          >
            {status}
          </span>
        )}
        <span
          onClick={() => handleFavStatus(temId)}
          className={`${
            favorite ? "dark:bg-slate-800 bg-fyellow" : "bg-white"
          } absolute -bottom-7 right-7 
        flex justify-center items-center
        cursor-pointer  h-12 w-12 rounded-full fshadow`}
        >
          <AiOutlineHeart
            width="50px"
            size={28}
            color={`${favorite ? "#FFF" : "#FF9900"}`}
          />
        </span>
      </div>
      <div className="p-5 dark:bg-slate-800 bg-white  rounded-b-lg">
        <Link to="/products/detail">
          <p className="dark:text-white text-fblack my-2 text-lg font-bold hover:underline hover:underline-offset-4">
            {title}
          </p>
        </Link>
        <p className="dark:text-white text-fyellow text-xl font-bold my-2 flex items-center space-x-3">
          <span>{formatPrice(price)}</span>
          <span className="text-fgrey text-[10px] font-semibold">
            (5 items left)
          </span>
        </p>
        {!isAdProduct && (
          <div className="flex justify-end items-center space-x-1 my-3">
            <Button
              variant="elevated"
              styles="text-white font-bold"
              noSizingClass
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="34"
                viewBox="0 0 55 34"
                fill="none"
              >
                <rect
                  x="0.0637207"
                  y="0.442871"
                  width="54.7201"
                  height="33.3665"
                  rx="5"
                  fill={tempCartColor}
                />
                <path
                  d="M24.9366 25.4679C25.486 25.4679 25.9315 25.0944 25.9315 24.6337C25.9315 24.173 25.486 23.7996 24.9366 23.7996C24.3871 23.7996 23.9417 24.173 23.9417 24.6337C23.9417 25.0944 24.3871 25.4679 24.9366 25.4679Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.8807 25.4679C36.4301 25.4679 36.8756 25.0944 36.8756 24.6337C36.8756 24.173 36.4301 23.7996 35.8807 23.7996C35.3312 23.7996 34.8857 24.173 34.8857 24.6337C34.8857 25.0944 35.3312 25.4679 35.8807 25.4679Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9773 7.95044H20.9569L23.6233 19.1199C23.7143 19.5039 23.9635 19.8489 24.3272 20.0944C24.691 20.34 25.1462 20.4704 25.6131 20.4629H35.2837C35.7506 20.4704 36.2058 20.34 36.5695 20.0944C36.9333 19.8489 37.1825 19.5039 37.2735 19.1199L38.8653 12.1213H21.9518"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button
              variant="elevated"
              styles="dark:bg-slate-600 bg-fyellow text-white font-bold"
            >
              Buy Now
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};

export default Product;
