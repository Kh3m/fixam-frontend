import { LinkType } from "../../uitls/DataTypes";
import FixamBrief from "./FixamBrief";
import QuickLinks from "./QuickLinks";

const tips: LinkType[] = [
  { to: "#", text: "Selling Tips" },
  { to: "#", text: "Buy and Sell Quickly" },
  { to: "#", text: "Membership" },
  { to: "#", text: "Banner Advertising" },
  { to: "#", text: "Promote Your Ad" },
];

const info: LinkType[] = [
  { to: "#", text: "Company & Contact Info" },
  { to: "#", text: "Blog & Articles" },
  { to: "#", text: "About Us" },
  { to: "#", text: "Terms of Service" },
  { to: "#", text: "Privacy Policy" },
];

const helpAndSupports: LinkType[] = [
  { to: "#", text: "Live Chat" },
  { to: "#", text: "FAQ" },
  { to: "#", text: "How to Stay Safe" },
  { to: "#", text: "Terms & Conditions" },
  { to: "#", text: "Contact Us" },
];

const resources: LinkType[] = [
  { to: "#", text: "Fixam Blog" },
  { to: "#", text: "Fixam on FB" },
  { to: "#", text: "Our Instagram" },
  { to: "#", text: "Our YouTube" },
  { to: "#", text: "Our Twitter" },
];

const Footer = () => {
  return (
    <footer className=" bg-gray-700 py-16 flex justify-around">
      <FixamBrief />
      <QuickLinks title="Tips for Quick Sales" links={tips} />
      <QuickLinks title="Information" links={info} />
      <QuickLinks title="Help and Support" links={helpAndSupports} />
      <QuickLinks title="Our Resources" links={resources} />
    </footer>
  );
};

export default Footer;
