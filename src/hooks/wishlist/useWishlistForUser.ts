import { useQuery } from "@tanstack/react-query";
import { userWishlistService } from "../../services/wishlist";

const useWishlistForUser = (userId: string) =>
  useQuery({
    queryKey: ["carts", "wishlist", "user", userId],
    // TODO: FIX avoid using dummyUserCartService
    queryFn: () => userWishlistService(userId).fetchAll(),
    enabled: !!userId,
  });

export default useWishlistForUser;
