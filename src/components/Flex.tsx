import { ForwardedRef, PropsWithChildren, forwardRef } from "react";

const Flex = forwardRef(
  ({ children }: PropsWithChildren, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {children}
      </div>
    );
  }
);

export default Flex;
