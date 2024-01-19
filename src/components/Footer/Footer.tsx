import { LinkType } from "../../utils/types";
import FixamBrief from "./FixamBrief";
import QuickLinks from "./QuickLinks";

// const tips: LinkType[] = [
//   { to: "#", text: "Selling Tips" },
//   { to: "#", text: "Buy and Sell Quickly" },
//   { to: "#", text: "Membership" },
//   { to: "#", text: "Banner Advertising" },
//   { to: "#", text: "Promote Your Ad" },
// ];

const info: LinkType[] = [
  { to: "#", text: "About Us" },
  { to: "#", text: "Terms & Conditions" },
  { to: "#", text: "Privacy Policy" },
];

const helpAndSupports: LinkType[] = [
  { to: "#", text: "FAQ" },
  { to: "#", text: "How to Stay Safe" },
  { to: "#", text: "Contact Us" },
];

const resources: LinkType[] = [
  { to: "https://web.facebook.com/fixamnow", text: "Fixam on FB" },
  { to: "https://www.instagram.com/fixamng/", text: "Our Instagram" },
  { to: "https://www.youtube.com/@fixamafrica4908", text: "Our YouTube" },
  { to: "https://www.linkedin.com/company/fixam-africa/", text: "Our Linked" },
  { to: "https://twitter.com/FixamAfrica", text: "Our Twitter" },
];

const Footer = () => {
  return (
    <footer
      className="text-center bg-gray-700 py-16 flex flex-col justify-around
    md:flex-row"
    >
      <FixamBrief />
      {/* <QuickLinks title="Tips for Quick Sales" links={tips} /> */}
      <QuickLinks title="Information" links={info} />
      <QuickLinks title="Help and Support" links={helpAndSupports} />
      <QuickLinks title="Our Resources" links={resources} />
    </footer>
  );
};

export default Footer;
