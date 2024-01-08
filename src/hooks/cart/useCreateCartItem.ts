import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CartItemType, cartItemService } from "../../services/cart";
import useAuth from "../useAuth";

type CartContextType = {
  previousCart: CartItemType;
};

// <TData, TError, TVariable, TContext>
const useCreateCartItem = (cartId: string) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation<CartItemType, Error, CartItemType, CartContextType>({
    mutationKey: ["carts", cartId, "items"],
    mutationFn: (cartItem) => cartItemService(cartId).post(cartItem),
    onSuccess: () => {
      // Invalidate the cache for ["carts", "user", user?.id]
      queryClient.invalidateQueries({
        queryKey: ["carts", "user", user?.id],
      });
    },
  });
};

export default useCreateCartItem;
