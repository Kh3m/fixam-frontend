import { useQuery } from "@tanstack/react-query";
import { userCartService } from "../../services/cart";

const useCartForUser = (userId: string) =>
  useQuery({
    queryKey: ["carts", "user", userId],
    // TODO: FIX avoid using dummyUserCartService
    queryFn: () => userCartService(userId).fetchOne(),
  });

export default useCartForUser;
