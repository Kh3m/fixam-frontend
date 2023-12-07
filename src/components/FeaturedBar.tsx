import Icon from "./IconHolder";
import chevronRight from "../assets/chevron-right.svg";

interface Props {
  title: string;
}
const FeaturedBar = ({ title }: Props) => {
  return (
    <div className="py-4 px-8 bg-fyellow text-white text-sm flex justify-between items-center my-7">
      <span>{title}</span>
      <span className="flex items-center cursor-pointer">
        <span>View More</span> <span className="mx-1"></span>{" "}
        <Icon image={{ src: chevronRight, alt: "" }} />
      </span>
    </div>
  );
};

export default FeaturedBar;
