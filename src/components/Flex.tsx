import { PropsWithChildren } from "react";

const Flex = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex space-x-4 overflow-x-auto no-scrollbar">
      {children}
    </div>
  );
};

export default Flex;
