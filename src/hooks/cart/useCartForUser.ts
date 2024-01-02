import { useQuery } from "@tanstack/react-query";
import { dummyUserCartService } from "../../services/cart";

const useCartForUser = (userId: string) =>
  useQuery({
    queryKey: userId ? ["categories", userId, "subcategories"] : ["categories"],
    // TODO: FIX avoid using dummyUserCartService
    queryFn: () => dummyUserCartService(userId).fetchOne(),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
  });

export default useCartForUser;
