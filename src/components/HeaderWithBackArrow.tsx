import { FaArrowLeftLong } from "react-icons/fa6";
import Heading from "./Heading";
import { goBack } from "../utils/history";

interface Props {
  heading: string;
  rightItem?: string;
  hasBackArrow?: boolean;
  headerTextSize: "lg" | "2xl";
}

const HeaderWithBackArrow = ({
  heading,
  hasBackArrow,
  rightItem,
  headerTextSize,
}: Props) => {
  const size: { [key: string]: string } = {
    lg: "text-lg",
    "2xl": "text-2xl",
  };
  return (
    <div
      className={`${size[headerTextSize]} flex justify-between font-semibold`}
    >
      <div className="flex space-x-4 items-center">
        {hasBackArrow && (
          <span onClick={goBack} className="cursor-pointer">
            <FaArrowLeftLong />
          </span>
        )}
        <Heading variant="h2" styles={`${size[headerTextSize]}`}>
          {heading}
        </Heading>
      </div>
      {rightItem && <span className="text-sm text-gray-500">{rightItem}</span>}
    </div>
  );
};

export default HeaderWithBackArrow;
