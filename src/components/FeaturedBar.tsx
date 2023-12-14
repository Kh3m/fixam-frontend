import Icon from "./IconHolder";
import chevronRight from "../assets/chevron-right.svg";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  to: string;
}
const FeaturedBar = ({ title, to }: Props) => {
  return (
    <div className="py-4 px-8 dark:bg-fdark-700 bg-fyellow text-white text-sm flex justify-between items-center my-7">
      <span>{title}</span>
      <Link to={to}>
        <span className="flex items-center cursor-pointer">
          <span>View More</span> <span className="mx-1"></span>
          <Icon image={{ src: chevronRight, alt: "icon - chevron right" }} />
        </span>
      </Link>
    </div>
  );
};

export default FeaturedBar;
