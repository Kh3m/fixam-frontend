import GooglePlayAppStoreSVG from "../../GooglePlayAppStoreSVG";
import Logo from "../Logo";
import Space from "../Space";
import SocialLinks from "./SocialLinks";

const FixamBrief = () => {
  return (
    <article className=" w-72">
      <Logo color="yellow" styles="w-[140px]" />
      <div className="my-2">
        <p className=" text-justify text-white text-xs font-normal">
          4, Kolo S Close, Kado Estate, 900108, Ahmadu Bello Way, Jabi Beside
          Market Square , Abuja, Federal Capital Territory
        </p>
      </div>
      <Space spacing="my-3" />
      <GooglePlayAppStoreSVG />
      <Space spacing="my-3" />
      <SocialLinks />
      <Space spacing="my-3" />
    </article>
  );
};

export default FixamBrief;