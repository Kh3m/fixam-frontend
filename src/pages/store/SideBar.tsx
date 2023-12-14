import Navigations from "../../components/Navigations/Navigations";
import khemLogo from "../../assets/khem/testlogok.png";
import Space from "../../components/Space";

const items = [
  { text: "Products", to: "/stores/storeId/products" },
  { text: "Orders", to: "/stores/storeId/orders" },
  { text: "Customers", to: "/stores/storeId/customers" },
  { text: "Messages", to: "/stores/storeId/messages" },
  { text: "Settings", to: "/stores/storeId/settings" },
  { text: "Log out", to: "/logout" },
];

const SideBar = () => {
  return (
    <div>
      <img src={khemLogo} alt="Store Logo" className=" w-36" />
      <Space spacing="my-14" />
      <Navigations items={items} direction="vertical" />
    </div>
  );
};

export default SideBar;
