import { useQuery } from "@tanstack/react-query";
import { dummyUserCartService } from "../../services/cart";

const useCartForUser = (userId: string) =>
  useQuery({
    queryKey: ["carts", "user", userId],
    // TODO: FIX avoid using dummyUserCartService
    queryFn: () => dummyUserCartService(userId).fetchOne(),
  });

export default useCartForUser;

// import { ReviewType, reviewAPIClient } from "../../services/review";
// import { useQuery } from "@tanstack/react-query";

// const useCartForUser = (userId: string) =>
//   useQuery({
//     queryKey: ["carts", "products", productId],
//     queryFn: () =>
//       reviewAPIClient
//         .get<ReviewType[]>(`/products/${productId}/`)
//         .then((res) => res.data),
//   });

// export default useCartForUser;
