import { useQuery } from "@tanstack/react-query";
import { reviewService } from "../../services/review";

const useReviews = () =>
  useQuery({
    queryKey: ["reviews"],
    queryFn: () => reviewService.fetchAll,
  });

export default useReviews;
