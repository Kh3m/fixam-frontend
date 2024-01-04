import Heading from "../../components/Heading";
import FullStarSVG from "../../components/SVGs/FullStarSVG";
import Space from "../../components/Space";
import BorderCard from "../user/BorderCard";
import CustomerStarRatings from "./CustomerStarRatings";

interface Props {
  name: string;
  rating: number;
  review: string;
  time: string;
}
const CustomerReview = ({ name, rating, review, time }: Props) => {
  return (
    <BorderCard styles=" flex justify-between">
      <div>
        <Heading variant="h5" styles="font-medium">
          {name}
        </Heading>
        <Space spacing="my-4" />
        <CustomerStarRatings />
        <Space spacing="my-4" />
        <p className="font-medium text-gray-500">{review}</p>
      </div>
      <span className="font-medium text-gray-500 text-sm">{time}</span>
    </BorderCard>
  );
};

export default CustomerReview;
