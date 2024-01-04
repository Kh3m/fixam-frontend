import { PropsWithChildren } from "react";
import Card from "../../components/Card";
import HR from "../../components/HR";
import HeaderWithBackArrow from "../../components/HeaderWithBackArrow";

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
      <HeaderWithBackArrow
        heading={heading}
        rightItem={itemsCount}
        hasBackArrow={hasBackArrow}
        headerTextSize="2xl"
      />
      <HR styles="mt-4 mb-8" />
      {children}
    </Card>
  );
};

export default UserPageContainer;
