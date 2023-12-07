import { LinkType } from "../../uitls/DataTypes";
import QuickLinks from "./QuickLinks";

const tips: LinkType[] = [
  { to: "#", text: "Selling Tips" },
  { to: "#", text: "Buy and Sell Quickly" },
  { to: "#", text: "Membership" },
  { to: "#", text: "Banner Advertising" },
  { to: "#", text: "Promote Your Ad" },
];

const Footer = () => {
  return (
    <div>
      <QuickLinks title="Tips for Quick Sales" links={tips} />
    </div>
  );
};

export default Footer;
