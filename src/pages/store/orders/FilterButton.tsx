import { PropsWithChildren } from "react";
import Button from "../../../components/Button";

interface Props {
  isActive?: boolean;
  onClick?: () => void;
}
const FilterButton = ({
  children,
  isActive,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <Button
      onClick={onClick}
      variant="text"
      styles={` mr-8 after:content-[''] 
      ${isActive ? "after:block text-fyellow" : "text-fgrey"}
    after:h-1 after:w-full after:bg-fyellow after:rounded-md after:mt-[1px] text-lg`}
    >
      {children}
    </Button>
  );
};

export default FilterButton;
