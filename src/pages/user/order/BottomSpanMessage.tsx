import { PropsWithChildren } from "react";

const BottomSpanMessage = ({ children }: PropsWithChildren) => {
  return <span className="text-xs font-semibold">{children}</span>;
};

export default BottomSpanMessage;
