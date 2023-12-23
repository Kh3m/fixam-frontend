import ProductsSVG from "./ProductsSVG";
import CustomersSVG from "./CustomersSVG";
import LogoutSVG from "./LogoutSVG";
import MessagesSVG from "./MessagesSVG";
import OrdersSVG from "./OrdersSVG";
import SettingsSVG from "./SettingsSVG";
import DashboardSVG from "./DashboardSVG";
import AccountSVG from "./AccountSVG";
import WishListSVG from "./WishListSVG";

interface Props {
  type: string;
  color: string;
}
const FSVGs = ({ color, type }: Props) => {
  switch (type) {
    case "account":
      return <AccountSVG color={color} />;
    case "dashboard":
      return <DashboardSVG color={color} />;
    case "customers":
      return <CustomersSVG color={color} />;
    case "logout":
      return <LogoutSVG color={color} />;
    case "messages":
      return <MessagesSVG color={color} />;
    case "orders":
      return <OrdersSVG color={color} />;
    case "settings":
      return <SettingsSVG color={color} />;
    case "products":
      return <ProductsSVG color={color} />;
    case "wishlist":
      return <WishListSVG color={color} />;
  }
};

export default FSVGs;
