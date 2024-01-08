import { ReviewType, reviewAPIClient } from "../../services/review";
import { useQuery } from "@tanstack/react-query";

const useReviewOfUser = (userId: string) =>
  useQuery({
    queryKey: ["reviews", "products", userId],
    queryFn: () =>
      reviewAPIClient
        .get<ReviewType[]>(`/products/${userId}/`)
        .then((res) => res.data),
  });

export default useReviewOfUser;
