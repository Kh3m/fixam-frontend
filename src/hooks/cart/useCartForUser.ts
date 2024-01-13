import { useQuery } from "@tanstack/react-query";
import { dummyUserCartService } from "../../services/cart";

const useCartForUser = (userId: string) =>
  useQuery({
    queryKey: ["carts", "user", userId],
    // TODO: FIX avoid using dummyUserCartService
    queryFn: () => dummyUserCartService(userId).fetchOne(),
  });

export default useCartForUser;
