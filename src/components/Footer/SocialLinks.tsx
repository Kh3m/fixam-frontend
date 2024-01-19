// import linkedIn from "../../assets/linkedin.svg";
// import Icon from "../../components/IconHolder";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <section>
      <div className="my-3 text-white flex items-center space-x-1">
        <span className="text-2xl">Socials</span>
        <span className="text-xs">@Fixamafrica</span>
      </div>

      <div className="text-gray-300 flex space-x-4">
        <Link to="https://www.linkedin.com/company/fixam-africa/">
          <FaLinkedin size={32} />
        </Link>
        <Link to="https://twitter.com/FixamAfrica">
          <RiTwitterXFill size={32} />
        </Link>
        <Link to="https://www.instagram.com/fixamng/">
          <AiFillInstagram size={32} />
        </Link>
        <Link to="https://web.facebook.com/fixamnow">
          <FaFacebook size={32} />
        </Link>
        <Link to="https://www.youtube.com/@fixamafrica4908">
          <FaYoutube size={32} />
        </Link>
      </div>
    </section>
  );
};

export default SocialLinks;
