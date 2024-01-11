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
    <div className="flex space-x-1 flex-col items-center justify-center">
      <TapEffect>
        <span
          onClick={handleOnDecrementQuantity}
          className="user-select-none text-sm font-bold cursor-pointer
          inline-flex justify-center items-center h-6 w-8 rounded-sm bg-fyellow-shades-500 text-white"
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
          className="user-select-none rounded-sm
            flex items-center justify-center w-8 h-6 text-xs text-center outline-none p-1 font-semibold"
        />
      )}
      <TapEffect>
        <span
          onClick={handleOnIcrementQuantity}
          className="user-select-none text-sm font-bold cursor-pointer
          inline-flex justify-center items-center h-6 w-8 rounded-sm bg-fyellow-shades-500 text-white"
        >
          +
        </span>
      </TapEffect>
    </div>
  );
};

export default QuantityField;
