import Heading from "../../components/Heading";
import Navigations from "../../components/Navigations/Navigations";
import Space from "../../components/Space";
import { LinkType } from "../../utils/types";

interface Props {
  logo?: string;
  storeName?: string;
  slug?: string;
  withLogo?: boolean;
  newItems?: LinkType[];
}

const SideBar = ({ logo, storeName, slug, withLogo, newItems }: Props) => {
  // TODO: Store slug in local storage
  const items = newItems
    ? newItems
    : [
        { text: "Dashboard", to: `/stores/${slug}/dashboard` },
        { text: "Products", to: `/stores/${slug}/products` },
        { text: "Orders", to: `/stores/${slug}/orders` },
        // { text: "Customers", to: `/stores/${slug}/customers` },
        // { text: "Notification", to: `/stores/${slug}/notifications` },
        { text: "Members", to: `/stores/${slug}/members` },
        { text: "Log out", to: "/logout" },
      ];

  return (
    <div className="hidden md:block">
      {withLogo && (
        <img
          src={logo}
          alt="Store Logo"
          className="w-36 h-36 bg-slate-100 rounded-full object-contain  p-5 m-auto"
        />
      )}
      <Space spacing="my-2" />
      <Heading variant="h4" styles="text-center font-semibold text-fgrey">
        {storeName}
      </Heading>
      <Space spacing="my-14" />
      <Navigations items={items} direction="vertical" />
    </div>
  );
};

export default SideBar;
