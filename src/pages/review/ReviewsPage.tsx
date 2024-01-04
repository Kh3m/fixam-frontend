import HeaderWithBackArrow from "../../components/HeaderWithBackArrow";
import MainContent from "../../components/MainContent";
import Space from "../../components/Space";
import BorderCard from "../user/BorderCard";
import CustomerReviews from "./CustomerReviews";
import ReviewsRatingSummary from "./ReviewsRatingSummary";

const ReviewsPage = () => {
  return (
    <MainContent>
      <BorderCard>
        <HeaderWithBackArrow
          heading="All Reviews"
          headerTextSize="lg"
          hasBackArrow
        />
        <Space spacing="my-4" />
        <ReviewsRatingSummary />
      </BorderCard>
      <Space spacing="my-4" />
      <div className="flex space-x-24">
        <div className="flex-grow">
          <CustomerReviews />
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
