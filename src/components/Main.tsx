import { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => {
  return <main className="max-w-[1440px] m-auto">{children}</main>;
};

export default Main;
