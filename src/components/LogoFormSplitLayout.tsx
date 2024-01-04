import { Link } from "react-router-dom";
import Logo from "./Logo";
import Card from "./Card";
import Space from "./Space";
import { PropsWithChildren } from "react";

const LogoFormSplitLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex">
      <div className="opacity-80 basis-[40%] flex justify-center items-center">
        <div className="fixed">
          <Link to="/">
            <Logo color="yellow" styles="scale-150 -translate-y-20" />
          </Link>
        </div>
      </div>
      <div className="h-screen w-[60%]">
        <Card styles="pagination-shadow ">
          <Space spacing="my-14" />
          {/* Form Content */}
          {/* TODO: Remove w-80% */}
          <section className="m-auto">{children}</section>
          <Space spacing="my-14" />
        </Card>
      </div>
    </section>
  );
};

export default LogoFormSplitLayout;
