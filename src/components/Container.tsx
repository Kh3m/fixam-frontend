import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="md:w-[1220px] m-auto">{children}</div>;
};

export default Container;
