import EmptyStarSVG from "../../components/SVGs/EmptyStarSVG";
import FullStarSVG from "../../components/SVGs/FullStarSVG";
import HalfStarSVG from "../../components/SVGs/HalfStarSVG";

interface Props {
  rating: number;
  size?: number;
}
const CustomerStarRatings = ({ rating, size }: Props) => {
  const fullStars = Math.floor(rating); // Extract the whole number part
  const hasHalfStar = rating % 1 !== 0; // Check if there is a non-zero decimal part

  const stars = [];

  // Render full stars
  for (let i = 1; i <= fullStars; i++) {
    stars.push(<FullStarSVG key={i} size={size} />);
  }

  // Render half star
  if (hasHalfStar) {
    stars.push(<HalfStarSVG key="half" size={size} />);
  }

  // Render remaining empty stars
  const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 1; i <= remainingStars; i++) {
    stars.push(
      <EmptyStarSVG key={`empty-${i}`} size={size ? size + 6 : size} />
    );
  }

  return <div className="flex items-center space-x-2">{stars}</div>;
};

export default CustomerStarRatings;
