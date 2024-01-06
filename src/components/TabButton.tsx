import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
}

const TabButton = ({ children, to }: PropsWithChildren<Props>) => {
  return (
    <Link
      to={to}
      className="px-2 py-1 font-medium rounded-md text-sm border border-gray-300 mx-1 cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default TabButton;
