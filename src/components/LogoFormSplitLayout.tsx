import { Link } from "react-router-dom";
import Logo from "./Logo";
import Card from "./Card";
import Space from "./Space";
import { PropsWithChildren } from "react";

const LogoFormSplitLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="md:opacity-80 basis-full md:basis-[40%] flex justify-center items-center">
        <div className="md:fixed ">
          <Link to="/">
            <Logo
              color="yellow"
              styles="w-24 md:w-auto md:scale-150 md:-translate-y-20"
            />
          </Link>
        </div>
      </div>
      <div className="md:h-screen w-full md:w-[60%]">
        <Card>
          <Space spacing="md:my-14" />
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
