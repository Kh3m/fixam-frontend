import { PropsWithChildren, ReactNode } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { goBack } from "../utils/history";

interface Props {
  size?: number;
}
const BackArrow = ({ size, children }: PropsWithChildren<Props>) => {
  return (
    <div className="flex items-center space-x-2">
      <span onClick={goBack} className="cursor-pointer">
        <FaArrowLeftLong size={size ? size : 28} />
      </span>
      {children}
    </div>
  );
};

export default BackArrow;
