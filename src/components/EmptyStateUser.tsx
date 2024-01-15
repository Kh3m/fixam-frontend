import { Link } from "react-router-dom";
import Heading from "./Heading";
import { ReactNode } from "react";

interface Props {
  heading: string | ReactNode;
  callToActionText?: string;
  to?: string;
}
const EmptyStateUser = ({ heading, callToActionText, to }: Props) => {
  return (
    <div className="flex justify-center items-center my-8 flex-col space-y-3">
      <Heading variant="h3" styles="text-center text-lg">
        {heading}
      </Heading>
      <Link to={to ? to : "/"} className="text-fyellow-shades-500">
        {callToActionText ? callToActionText : "Shop Now"}
      </Link>
    </div>
  );
};

export default EmptyStateUser;
