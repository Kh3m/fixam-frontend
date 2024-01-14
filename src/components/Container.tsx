import { PropsWithChildren, ReactNode } from "react";

interface Props {
  twoColLayout?: boolean;
  Aside?: ReactNode;
}
const Container = ({
  children,
  twoColLayout,
  Aside,
}: PropsWithChildren<Props>) => {
  if (twoColLayout) {
    return (
      <div
        className="w-[95%] md:space-x-8  m-auto md:flex 
        md:max-w-[1220px]"
      >
        <div className="md:w-[25%] md:grow-0">{Aside}</div>
        <div className="md:w-[75%]">{children}</div>
      </div>
    );
  }
  return (
    <div
      className="w-[95%] m-auto 
  md:w-[1220px] "
    >
      {children}
    </div>
  );
};

export default Container;
