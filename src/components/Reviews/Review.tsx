import khemReviewImg from "../../assets/khem/khem-review.jpg";
import useUser from "../../hooks/user/useUser";
import CustomerStarRatings from "../../pages/review/CustomerStarRatings";
import BorderCard from "../../pages/user/BorderCard";
import { ReviewType } from "../../services/review";
import Card from "../Card";
import Heading from "../Heading";
import Rating from "../Rating";
import Space from "../Space";

interface Props {
  review: ReviewType;
}

const Review = ({ review }: Props) => {
  const { data: userData, isLoading: isLoadingUser } = useUser(review.user_id);

  console.log("Review userData", userData);

  return (
    <BorderCard styles="w-[400px] min-h-[150px]">
      <div className="flex space-x-2 items-center">
        {/* <img
          src={khemReviewImg}
          alt="Reviewer"
          className=" h-14 w-14 rounded-full object-cover object-top"
        /> */}
        <div>
          <Heading variant="h4" styles="text-[20px] font-semibold pl-1">
            Abdul Kareem
          </Heading>
          <div className="flex items-center space-x-2 text-fgrey">
            <CustomerStarRatings rating={review.rating} />
            <span> {review.rating} Star </span>
          </div>
        </div>
      </div>
      <Space spacing="my-2" />
      <p className="text-justify line-clamp-4">{review.review_text}</p>
    </BorderCard>
  );
};

export default Review;
