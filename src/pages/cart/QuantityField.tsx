import { ChangeEvent } from "react";
import TapEffect from "../../components/TapEffect";
import Spinner from "../../components/Spinner";

interface Props {
  quantity: number;
  handleOnIcrementQuantity: () => void;
  handleOnDecrementQuantity: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isHandlingQty?: boolean;
}

const QuantityField = ({
  quantity,
  handleOnIcrementQuantity,
  handleOnDecrementQuantity,
  onChange,
  isHandlingQty,
}: Props) => {
  return (
    <div className="flex space-x-1 items-center">
      <TapEffect>
        <span
          onClick={handleOnDecrementQuantity}
          className="user-select-none text-sm font-bold cursor-pointer"
        >
          -
        </span>
      </TapEffect>

      {isHandlingQty ? (
        <Spinner />
      ) : (
        <input
          value={quantity}
          onChange={onChange}
          className="user-select-none border-gray-400 rounded-sm border
            flex items-center justify-center w-8 h-5 text-xs text-center outline-none p-1 font-semibold"
        />
      )}
      <TapEffect>
        <span
          onClick={handleOnIcrementQuantity}
          className="user-select-none text-sm font-bold cursor-pointer"
        >
          +
        </span>
      </TapEffect>
    </div>
  );
};

export default QuantityField;
