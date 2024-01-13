import { Link } from "react-router-dom";
import Heading from "./Heading";

interface Props {
  heading: string;
}
const EmptyStateUser = ({ heading }: Props) => {
  return (
    <div className="flex justify-center items-center my-8 flex-col space-y-3">
      <Heading variant="h3">{heading}</Heading>
      <Link to="/" className="text-fyellow-shades-500">
        Shop Now
      </Link>
    </div>
  );
};

export default EmptyStateUser;
