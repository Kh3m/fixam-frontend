import { useQuery } from "@tanstack/react-query";
import { cartService, userCartService } from "../../services/cart";

const useCartForUser = (cartId?: string, userId?: string) => {
  return {
    withCartId: () =>
      useQuery({
        queryKey: ["carts", cartId],
        // TODO: FIX avoid using dummyUserCartService
        queryFn: () => cartService(cartId).fetchOne(),
        enabled: !!cartId,
      }),
    withUserId: () =>
      useQuery({
        queryKey: ["carts", "user", userId],
        // TODO: FIX avoid using dummyUserCartService
        queryFn: () => userCartService(userId).fetchOne(),
        enabled: !!userId,
      }),
  };
};

export default useCartForUser;
