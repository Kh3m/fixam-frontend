import { ReviewType, reviewAPIClient } from "../../services/review";
import { useQuery } from "@tanstack/react-query";

const useReviewsForProduct = (productId: string) =>
  useQuery({
    queryKey: ["reviews", "products", productId],
    queryFn: () =>
      reviewAPIClient
        .get<ReviewType[]>(`/products/${productId}/`)
        .then((res) => res.data),
  });

export default useReviewsForProduct;
