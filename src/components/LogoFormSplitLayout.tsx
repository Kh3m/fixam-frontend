import { Link } from "react-router-dom";
import Logo from "./Logo";
import Card from "./Card";
import Space from "./Space";
import { PropsWithChildren } from "react";

const LogoFormSplitLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="">
      <div className="h-full">
        <Card styles="pagination-shadow ">
          <Space spacing="my-14" />
          {/* Form Content */}
          {/* TODO: Remove w-80% */}
          <section className="m-auto">{children}</section>
          <Space spacing="my-14" />
        </Card>
      </div>
      <div className="opacity-80 ">
        <div className="">
          <Link to="/">
            <Logo color="yellow" styles="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogoFormSplitLayout;
