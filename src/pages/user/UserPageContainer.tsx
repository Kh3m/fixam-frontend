import { PropsWithChildren } from "react";
import Card from "../../components/Card";
import HR from "../../components/HR";
import Heading from "../../components/Heading";
import { FaArrowLeftLong } from "react-icons/fa6";
import { goBack } from "../../utils/history";

interface Props {
  heading: string;
  itemsCount?: string;
  hasBackArrow?: boolean;
}

const UserPageContainer = ({
  heading,
  itemsCount,
  children,
  hasBackArrow,
}: PropsWithChildren<Props>) => {
  return (
    <Card styles="px-12">
      <div className="flex justify-between font-semibold text-2xl">
        <div className="flex space-x-4 items-center">
          {hasBackArrow && (
            <span onClick={goBack} className="cursor-pointer">
              <FaArrowLeftLong />
            </span>
          )}
          <Heading variant="h2" styles="text-2xl">
            {heading}
          </Heading>
        </div>
        {itemsCount && (
          <span className="text-sm text-gray-500">{itemsCount}</span>
        )}
      </div>
      <HR styles="mt-4 mb-8" />
      {children}
    </Card>
  );
};

export default UserPageContainer;
