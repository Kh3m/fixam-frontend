import { ReviewType, reviewAPIClient } from "../../services/review";
import { FetchResponseType } from "../../services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useReviews = () =>
  useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      reviewAPIClient
        .get<FetchResponseType<ReviewType>>("/")
        .then((res) => res.data),
  });

export default useReviews;
