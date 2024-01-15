import { useQuery } from "@tanstack/react-query";
import { reviewServiceForProduct } from "../../services/review";

const useReviewsForProduct = (productId: string) =>
  useQuery({
    queryKey: ["reviews", "products", productId],
    queryFn: () => reviewServiceForProduct(productId).fetchAll,
  });

export default useReviewsForProduct;
