import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Rating from "../../../components/Rating";
import Space from "../../../components/Space";
import { formatPrice } from "../../../utils/number-formatter";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbShare2 } from "react-icons/tb";

interface Props {
  title: string;
  price: number;
  imageURL: string;
}

const WishListItem = ({ title, price, imageURL }: Props) => {
  return (
    <section className="flex space-x-24 justify-between">
      <div className="flex space-x-6 ">
        <div>
          <img
            src={imageURL}
            alt={title}
            className="h-[137px] w-[207px] object-cover overflow-hidden rounded-lg"
          />
          <div className="text-fgrey text-xs py-1">
            Item added 21st december, 2023
          </div>
        </div>

        <div>
          <Heading variant="h4" styles="font-semibold text-[20px]">
            {title}
          </Heading>
          <Space spacing="my-1" />

          <Space spacing="my-1" />
          <Rating count={5} withViews />
          <Space spacing="my-1" />

          <Space spacing="my-1" />
          <div className="text-base font-semibold">{formatPrice(price)}</div>
          <Space spacing="my-1" />
        </div>
      </div>

      <div className="flex-grow-0 basis-[200px] flex flex-col items-center">
        <Button variant="elevated" styles="bg-fyellow font-bold text-white">
          Move to Cart
        </Button>
        <Space spacing="my-1" />
        <div className="flex space-x-4">
          <span className="text-fyellow border cursor-pointer text-lg border-fyellow rounded-md w-1/2 px-5 py-1">
            <TbShare2 />
          </span>
          <span className="text-fyellow border cursor-pointer text-lg border-fyellow rounded-md w-1/2 px-5 py-1">
            <RiDeleteBin6Line />
          </span>
        </div>
      </div>
    </section>
  );
};

export default WishListItem;
