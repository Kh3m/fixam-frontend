import { useQuery } from "@tanstack/react-query";
import { reviewServiceForUser } from "../../services/review";

const useReviewOfUser = (userId: string) =>
  useQuery({
    queryKey: ["reviews", "products", userId],
    queryFn: () => reviewServiceForUser.fetch(userId),
  });

export default useReviewOfUser;
