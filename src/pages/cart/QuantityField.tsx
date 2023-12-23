import { ChangeEvent } from "react";

interface Props {
  quantity: number;
  handleOnIcrementQuantity: () => void;
  handleOnDecrementQuantity: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const QuantityField = ({
  quantity,
  handleOnIcrementQuantity,
  handleOnDecrementQuantity,
  onChange,
}: Props) => {
  return (
    <div className="flex space-x-1 items-center">
      <span
        onClick={handleOnDecrementQuantity}
        className="user-select-none text-sm font-bold cursor-pointer"
      >
        -
      </span>
      <input
        value={quantity}
        onChange={onChange}
        className="user-select-none w-8 h-4 text-xs text-center border border-gray-400 rounded-[3px] outline-none p-1 font-semibold"
      />
      <span
        onClick={handleOnIcrementQuantity}
        className="user-select-none text-sm font-bold cursor-pointer"
      >
        +
      </span>
    </div>
  );
};

export default QuantityField;
