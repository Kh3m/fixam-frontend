import { Link, useLocation, useParams } from "react-router-dom";

import useReviewsForProduct from "../../hooks/review/useReviewsForProduct";
import Button from "../Button";
import Heading from "../Heading";
import Space from "../Space";
import Spinner from "../Spinner";
import Review from "./Review";

const Reviews = () => {
  const { pathname } = useLocation();
  const { productId } = useParams();

  const { data: reviews, isLoading: isLoadingReviews } = useReviewsForProduct(
    productId!
  );

  return (
    <section>
      <Heading variant="h3" styles="text-[24px] font-semibold">
        Reviews
      </Heading>
      <Space spacing="my-12" />
      <div className="flex space-x-8">
        {isLoadingReviews ? (
          <Spinner />
        ) : (
          reviews
            ?.slice(0, 3)
            .reverse()
            .map((review) => <Review review={review} />)
        )}
      </div>
      <Space spacing="my-8" />
      <div className="flex justify-center">
        <Link to={`${pathname}/reviews`}>
          <Button
            variant="elevated"
            styles="px-6 py-2 bg-fyellow text-white font-semibold"
          >
            Load More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
