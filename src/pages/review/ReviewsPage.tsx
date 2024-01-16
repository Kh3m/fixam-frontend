import { useParams } from "react-router-dom";
import HeaderWithBackArrow from "../../components/HeaderWithBackArrow";
import MainContent from "../../components/MainContent";
import Space from "../../components/Space";
import Spinner from "../../components/Spinner";
import useReviewsForProduct from "../../hooks/review/useReviewsForProduct";
import BorderCard from "../user/BorderCard";
import CustomerReviews from "./CustomerReviews";
import ReviewsRatingSummary from "./ReviewsRatingSummary";
import { ReviewType } from "../../services/review";

const ReviewsPage = () => {
  const { productId } = useParams();

  const { data, isLoading: isLoading } = useReviewsForProduct(productId!);

  const reviews = data as ReviewType[];
  if (isLoading)
    return (
      <MainContent>
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      </MainContent>
    );

  if (!isLoading && reviews)
    return (
      <MainContent>
        <BorderCard>
          <HeaderWithBackArrow
            heading="All Reviews"
            headerTextSize="lg"
            hasBackArrow
          />
          <Space spacing="my-4" />
          <ReviewsRatingSummary reviews={reviews} />
        </BorderCard>
        <Space spacing="my-4" />
        <div className="flex space-x-24">
          <div className="flex-grow">
            <CustomerReviews reviews={reviews} />
          </div>
          <div
            className="h-screen w-52 bg-gray-300 
            flex justify-center items-center"
          >
            <div className=" -rotate-90 text-5xl text-white">Fix Ad</div>
          </div>
        </div>
      </MainContent>
    );
};

export default ReviewsPage;
