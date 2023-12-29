import { Link } from "react-router-dom";
import Logo from "./Logo";
import Card from "./Card";
import Space from "./Space";
import { PropsWithChildren } from "react";

const LogoFormSplitLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="grid store-reg-grid justify-center items-center">
      <div className="w-[40%] opacity-80 ">
        <div className=" fixed top-[30%] bottom-0">
          <Link to="/">
            <Logo color="yellow" styles=" scale-125" />
          </Link>
        </div>
      </div>
      <Card styles="pagination-shadow w-[60%]">
        <Space spacing="my-14" />
        {/* Form Content */}
        <section className="w-[80%] m-auto">{children}</section>
        <Space spacing="my-14" />
      </Card>
    </section>
  );
};

export default LogoFormSplitLayout;
