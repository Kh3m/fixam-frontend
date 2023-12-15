import { PropsWithChildren, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import MenuItems from "./MenuItems";

const MenuButton = ({
  children,
  items,
}: PropsWithChildren<{ items: string[] }>) => {
  const [showMenuItems, setShowMenuItems] = useState(false);

  return (
    <button className="flex items-center space-x-1 my-2 relative font-semibold">
      <div
        onClick={() => setShowMenuItems(!showMenuItems)}
        className="dark:bg-slate-500 bg-white px-4 py-2 flex space-x-3 rounded-md cursor-pointer text-fgrey dark:text-slate-200 pagination-shadow"
      >
        <span>{children}</span> <FaAngleDown size={26} color="#c1c1c1" />
      </div>
      <MenuItems items={items} showMenuItems={showMenuItems} />
    </button>
  );
};

export default MenuButton;
