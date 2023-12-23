import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Rating from "../../components/Rating";
import Space from "../../components/Space";
import { formatPrice } from "../../utils/number-formatter";
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
        <img
          src={imageURL}
          alt={title}
          className="h-[137px] w-[207px] object-contain overflow-hidden rounded-lg"
        />
        <div>
          <Heading variant="h4" styles="font-semibold text-[20px]">
            {title}
          </Heading>
          <Space spacing="my-1" />

          <Space spacing="my-1" />
          <Rating></Rating>
          <Space spacing="my-1" />

          <Space spacing="my-1" />
          <div className="text-base font-semibold">{formatPrice(price)}</div>
          <Space spacing="my-1" />
        </div>
      </div>

      <div className="flex-grow-0 basis-[200px] flex flex-col">
        <Button
          variant="outlined"
          styles="border border-gray-800 text-gray-800 font-bold"
        >
          Move to Cart
        </Button>
        <Space spacing="my-1" />
        <div className="flex space-x-4 justify-center items-center">
          <span className="cursor-pointer inline-flex h-8 w-10 text-lg rounded-md items-center justify-center border-2 border-fblack">
            <TbShare2 />
          </span>
          <span className="cursor-pointer inline-flex h-8 w-10 text-lg rounded-md items-center justify-center border-2 border-fblack">
            <RiDeleteBin6Line />
          </span>
        </div>
      </div>
    </section>
  );
};

export default WishListItem;
