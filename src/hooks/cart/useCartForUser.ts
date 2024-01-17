import { useQuery } from "@tanstack/react-query";
import { cartService, userCartService } from "../../services/cart";

const useCartForUser = (cartId?: string, userId?: string) => {
  return {
    withCartId: () =>
      useQuery({
        queryKey: ["carts", cartId],
        queryFn: () => cartService(cartId).fetchOne(),
        enabled: !!cartId,
      }),
    withUserId: () =>
      useQuery({
        queryKey: ["carts", "user", userId],
        queryFn: () => userCartService(userId).fetchOne(),
        enabled: !!userId,
      }),
  };
};

export default useCartForUser;
