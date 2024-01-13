import Space from "../../components/Space";
import { ReviewType } from "../../services/review";
import CustomerStarRatings from "./CustomerStarRatings";
import ReviewProgressLabel from "./ReviewProgressLabel";
import ReviewsCard from "./ReviewsCard";

interface Props {
  reviews: ReviewType[];
}

const ReviewsRatingSummary = ({ reviews }: Props) => {
  const starRatings = [
    { rating: 5, label: "Excellent", value: 7_003 },
    { rating: 4, label: "Very Good", value: 11_462 },
    { rating: 3, label: "Average", value: 7_501 },
    { rating: 2, label: "Poor", value: 1703 },
    { rating: 1, label: "Terrible", value: 528 },
  ];

  const totalRating = starRatings.reduce((cur, acc) => cur + acc.value, 0);
  const totalWeightedRating = starRatings.reduce(
    (cur, acc) => cur + acc.value * acc.rating,
    0
  );

  const calculatePercentage = (value: number): number => {
    return (value / totalRating) * 100;
  };

  const averageRating = totalWeightedRating / totalRating;

  return (
    <section>
      <div className="flex space-x-2">
        <ReviewsCard averageRating={averageRating} />
        <div className="flex flex-col justify-between w-1/3">
          {starRatings.map(({ label, value }) => (
            <ReviewProgressLabel
              key={label}
              label={label}
              value={value}
              progress={calculatePercentage(value)}
            />
          ))}
        </div>
      </div>
      <Space spacing="my-4" />
      <div>
        <CustomerStarRatings rating={averageRating} />
      </div>
    </section>
  );
};

export default ReviewsRatingSummary;
