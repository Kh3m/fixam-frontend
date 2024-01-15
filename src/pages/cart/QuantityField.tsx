import { ChangeEvent, useState } from "react";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import TapEffect from "../../components/TapEffect";
import { useQueryClient } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";

interface Props {
  quantity: number;
  cartId: string;
  itemId: number;
  userId: string;
}

const QuantityField = ({ quantity, cartId, itemId, userId }: Props) => {
  const queryClient = useQueryClient();
  const [quantityValue, setQuantityValue] = useState(quantity);
  const [isHandlingQty, setIsHandlingQty] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (Number.isNaN(value) || value <= 1) {
      setQuantityValue(1);
    } else {
      setQuantityValue(value);
    }
  };

  const handleOnIcrementQuantity = async (isEntered: boolean) => {
    setIsHandlingQty(true);
    await apiClient.patch(`/carts/${cartId}/items/${itemId}/`, {
      quantity: isEntered ? quantityValue : quantityValue + 1,
    });
    setQuantityValue(isEntered ? quantityValue : quantityValue + 1);
    // Invalidate the cache for ["carts", "user", user?.id]
    queryClient.invalidateQueries({
      queryKey: ["carts", "user", userId],
    });
    setIsHandlingQty(false);
    // setIsDeletingCartItems(false);
  };

  const handleOnDecrementQuantity = async () => {
    setIsHandlingQty(true);
    await apiClient.patch(`/carts/${cartId}/items/${itemId}/`, {
      quantity: quantityValue - 1,
    });
    setQuantityValue(quantityValue - 1);
    // Invalidate the cache for ["carts", "user", user?.id]
    queryClient.invalidateQueries({
      queryKey: ["carts", "user", userId],
    });
    setIsHandlingQty(false);
    // setIsDeletingCartItems(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <TapEffect>
        <Button
          onClick={() => handleOnIcrementQuantity(false)}
          styles="user-select-none text-sm font-bold cursor-pointer
          inline-flex justify-center items-center h-6 w-8 rounded-t-sm bg-fyellow-shades-500 text-white"
          noRounded
        >
          +
        </Button>
      </TapEffect>
      {isHandlingQty ? (
        <div className="h-7 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <input
          value={quantityValue}
          onKeyUp={(e) => {
            if (e.key === "Enter" && !!quantityValue)
              handleOnIcrementQuantity(true);
          }}
          onChange={onChange}
          className="user-select-none
            flex items-center justify-center w-8 h-7 text-xs dark:text-fyellow-shades-500
            text-center outline-none p-1 font-semibold"
        />
      )}
      <TapEffect>
        <Button
          noRounded
          disabled={quantityValue <= 1}
          onClick={handleOnDecrementQuantity}
          styles="user-select-none text-sm font-bold cursor-pointer
          inline-flex justify-center items-center h-6 w-8 rounded-b-sm bg-fyellow-shades-500 text-white"
        >
          -
        </Button>
      </TapEffect>
    </div>
  );
};

export default QuantityField;
