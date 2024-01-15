import { PropsWithChildren, ReactNode } from "react";

interface Props {
  OrderSummary: ReactNode;
}
const FlexWithOrderSummary = ({
  children,
  OrderSummary,
}: PropsWithChildren<Props>) => {
  return (
    <div className="md:flex md:space-x-24 items-start justify-between">
      <div className="flex-grow">{children}</div>

      <div className="hidden md:block flex-grow-0 flex-shrink-0 basis-[300px]">
        {OrderSummary}
      </div>
    </div>
  );
};

export default FlexWithOrderSummary;
