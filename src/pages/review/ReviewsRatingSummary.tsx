import ReviewProgressLabel from "./ReviewProgressLabel";
import ReviewsCard from "./ReviewsCard";

const ReviewsRatingSummary = () => {
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

  return (
    <div className="flex space-x-2">
      <ReviewsCard averageRating={totalWeightedRating / totalRating} />
      <div className="flex flex-col justify-between w-1/3">
        {starRatings.map(({ label, value }) => (
          <ReviewProgressLabel
            label={label}
            value={value}
            progress={calculatePercentage(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsRatingSummary;
