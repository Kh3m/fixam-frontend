import { useQuery } from "@tanstack/react-query";
import { userWishlistService } from "../../services/wishlist";

const useWishlistForUser = (userId: string) =>
  useQuery({
    queryKey: ["carts", "wishlist", userId],
    // TODO: FIX avoid using dummyUserCartService
    queryFn: () => userWishlistService(userId).fetchOne(),
  });

export default useWishlistForUser;
