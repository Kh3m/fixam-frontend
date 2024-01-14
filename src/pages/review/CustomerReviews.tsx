import HeaderWithBackArrow from "../../components/HeaderWithBackArrow";
import Space from "../../components/Space";
import { ReviewType } from "../../services/review";
import CustomerReview from "./CustomerReview";

// const customerReviews = [
//   {
//     name: "Abdul Kareem",
//     rating: 1,
//     review: "Good product!, serves the right purpose, i love it!!!",
//     time: "2 days ago",
//   },
//   {
//     name: "Abdul Kareem",
//     rating: 5,
//     review: "Good product!, serves the right purpose, i love it!!!",
//     time: "2 days ago",
//   },
//   {
//     name: "Abdul Kareem",
//     rating: 3,
//     review: "Good product!, serves the right purpose, i love it!!!",
//     time: "2 days ago",
//   },
//   {
//     name: "Abdul Kareem",
//     rating: 4,
//     review: "Good product!, serves the right purpose, i love it!!!",
//     time: "2 days ago",
//   },
// ];

interface Props {
  reviews: ReviewType[];
}

const CustomerReviews = ({ reviews }: Props) => {
  return (
    <section>
      <HeaderWithBackArrow heading="Customers Reviews" headerTextSize="lg" />
      <Space spacing="my-4" />
      {reviews.reverse().map(({ rating, review_text }) => (
        <CustomerReview
          name="Abdul Kareem"
          rating={rating}
          review={review_text}
          // time={'time'}
        />
      ))}
      {/* {customerReviews.map(({ name, rating, review, time }) => (
        <CustomerReview
          name={name}
          rating={rating}
          review={review}
          time={time}
        />
      ))} */}
    </section>
  );
};

export default CustomerReviews;
