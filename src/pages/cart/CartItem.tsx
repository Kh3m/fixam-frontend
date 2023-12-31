import { ChangeEvent } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Rating from "../../components/Rating";
import Space from "../../components/Space";
import { formatPrice } from "../../utils/number-formatter";
import QuantityField from "./QuantityField";
import VariantOption from "../../components/VariantOption";

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
          <Space spacing="my-2" />
          <Rating count={5} withViews />
          <Space spacing="my-4" />
          <div className="flex space-x-2 items-center">
            <QuantityField
              quantity={quantity}
              handleOnIcrementQuantity={() => handleOnIcrementQuantity(0)}
              handleOnDecrementQuantity={() => handleOnDecrementQuantity(0)}
              onChange={onChange}
            />
            <Space spacing="my-2" />
            <VariantOption
              variant="Color"
              defaultSelectValue={{ label: "Black", value: "Black" }}
              options={[
                { label: "Red", value: "Red" },
                { label: "Green", value: "Green" },
                { label: "Black", value: "Black" },
                { label: "Purple", value: "Purple" },
                { label: "Cyan", value: "Cyan" },
              ]}
            />
          </div>
          <Space spacing="my-2" />
          <div className="text-base font-semibold">{formatPrice(price)}</div>
          <Space spacing="my-2" />
          <div className="flex space-x-4 text-xs">
            <Button>Delete</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
