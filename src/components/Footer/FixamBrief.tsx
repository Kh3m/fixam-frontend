import { Link } from "react-router-dom";
import Logo from "../Logo";
import Space from "../Space";
import SocialLinks from "./SocialLinks";

const FixamBrief = () => {
  return (
    <article
      className="md:w-72
      justify-center items-center
    flex flex-col md:justify-start md:items-start"
    >
      <Link to="/">
        <Logo color="yellow" styles="w-[140px]" />
      </Link>
      <div className="my-2">
        <p className=" text-center md:text-justify text-white text-xs font-normal">
          4, Kolo S Close, Kado Estate, 900108, Ahmadu Bello Way, Jabi Beside
          Market Square , Abuja, Federal Capital Territory
        </p>
        {/* <p>
          One-stop marketplace for building materials & electronics | Experience
          Seamless & Lightning-Fast Delivery 🚀 | 📍Africa | Explore More ⬇️
          #FixamAfrica
        </p> */}
      </div>
      {/* <GooglePlayAppStoreSVG /> */}
      <SocialLinks />
      <Space spacing="my-3" />
    </article>
  );
};

export default FixamBrief;
