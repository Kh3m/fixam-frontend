import HeaderWithBackArrow from "../../components/HeaderWithBackArrow";
import Space from "../../components/Space";
import CustomerReview from "./CustomerReview";

const customerReviews = [
  {
    name: "Abdul Kareem",
    rating: 1,
    review: "Good product!, serves the right purpose, i love it!!!",
    time: "2 days ago",
  },
  {
    name: "Abdul Kareem",
    rating: 5,
    review: "Good product!, serves the right purpose, i love it!!!",
    time: "2 days ago",
  },
  {
    name: "Abdul Kareem",
    rating: 3,
    review: "Good product!, serves the right purpose, i love it!!!",
    time: "2 days ago",
  },
  {
    name: "Abdul Kareem",
    rating: 4,
    review: "Good product!, serves the right purpose, i love it!!!",
    time: "2 days ago",
  },
];
const CustomerReviews = () => {
  return (
    <section>
      <HeaderWithBackArrow heading="Customers Reviews" headerTextSize="lg" />
      <Space spacing="my-4" />
      {customerReviews.map(({ name, rating, review, time }) => (
        <CustomerReview
          name={name}
          rating={rating}
          review={review}
          time={time}
        />
      ))}
    </section>
  );
};

export default CustomerReviews;
