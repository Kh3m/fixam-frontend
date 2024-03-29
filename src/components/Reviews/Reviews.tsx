import { Link, useLocation, useParams } from "react-router-dom";

import useReviewsForProduct from "../../hooks/review/useReviewsForProduct";
import Button from "../Button";
import Heading from "../Heading";
import Space from "../Space";
import Spinner from "../Spinner";
import Review from "./Review";
import { ReviewType } from "../../services/review";
import Center from "../Center";
import { FetchResponseType } from "../../services/apiClient";

const Reviews = () => {
  const { pathname } = useLocation();
  const { productId } = useParams();

  const { data, isLoading: isLoadingReviews } = useReviewsForProduct(
    productId!
  );

  const reviews = data as FetchResponseType<ReviewType>;

  if (isLoadingReviews)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  console.log("Reviews from REVIEWS COMPONENT", reviews);

  if (reviews && reviews.results.length)
    return (
      <section className=" m-auto">
        <Heading variant="h3" styles="text-[24px] font-semibold">
          Reviews
        </Heading>
        <Space spacing="my-4" />
        <div className="md:flex md:space-x-8">
          {isLoadingReviews ? (
            <Spinner />
          ) : (
            reviews.results
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
