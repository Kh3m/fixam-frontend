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
      <div className="max-w-[1220px] m-auto flex space-x-8">
        <div className="w-[300px] grow-0">{Aside}</div>
        <div className="flex-grow">{children}</div>
      </div>
    );
  }
  return <div className="md:w-[1220px] m-auto">{children}</div>;
};

export default Container;
