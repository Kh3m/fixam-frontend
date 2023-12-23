import { ChangeEvent } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Rating from "../../components/Rating";
import Space from "../../components/Space";
import { formatPrice } from "../../utils/number-formatter";
import QuantityField from "./QuantityField";

interface Props {
  title: string;
  description: string;
  price: number;
  quantity: number;
  imageURL: string;
  handleOnIcrementQuantity: (index: number) => void;
  handleOnDecrementQuantity: (index: number) => void;
  handleInputChange?: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const CartItem = ({
  title,
  description,
  price,
  quantity,
  imageURL,
  handleOnIcrementQuantity,
  handleOnDecrementQuantity,
  onChange,
}: Props) => {
  return (
    <section>
      <div className="flex space-x-6 items-center">
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
          <p className=" text-fdarkery-grey font-semibold text-sm">
            {description}
          </p>
          <Space spacing="my-1" />
          <Rating></Rating>
          <Space spacing="my-1" />
          <QuantityField
            quantity={quantity}
            handleOnIcrementQuantity={() => handleOnIcrementQuantity(0)}
            handleOnDecrementQuantity={() => handleOnDecrementQuantity(0)}
            onChange={onChange}
          />

          <Space spacing="my-1" />
          <div className="text-base font-semibold">{formatPrice(price)}</div>
          <Space spacing="my-1" />
          <div className="flex space-x-4 text-xs">
            <Button>Delete</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
