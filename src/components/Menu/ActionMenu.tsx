import { useRef, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Link } from "react-router-dom";

type ActionMenuType = {
  label: string;
  link?: { to: string };
};
interface Props {
  actions: ActionMenuType[];
}

const ActionMenu = ({ actions }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const ulMenuRef = useRef<HTMLUListElement>(null);

  // const handleMenuItemClick = (item: string) => {
  //   setOpenMenu(false);
  // };

  // const handleDocumentClick = (event: MouseEvent) => {
  //   // Check if the click target is outside the menu and the button
  //   if (
  //     ulMenuRef.current &&
  //     !ulMenuRef.current.contains(event.target as Node) &&
  //     btnRef.current &&
  //     !btnRef.current.contains(event.target as Node)
  //   ) {
  //     setOpenMenu(false);
  //   }
  // };

  // useEffect(() => {
  //   if (
  //     ulMenuRef.current &&
  //     ulMenuRef.current.firstChild instanceof HTMLElement &&
  //     openMenu
  //   ) {
  //     ulMenuRef.current.firstChild.focus();
  //   }

  //   if (
  //     btnRef.current &&
  //     !openMenu &&
  //     ulMenuRef.current &&
  //     ulMenuRef.current.firstChild
  //   ) {
  //     btnRef.current.focus();
  //   }

  //   // Add the global click event listener when the menu is open
  //   if (openMenu) {
  //     document.addEventListener("click", handleDocumentClick);
  //   }

  //   // Remove the global click event listener when the component unmounts or the menu is closed
  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [openMenu, btnRef.current]);

  return (
    <span className="inline-flex cursor-pointer text-fgrey relative">
      <span>
        <FaEllipsisVertical
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </span>

      {openMenu && (
        <ul
          ref={ulMenuRef}
          className="text-left absolute p-1 z-30 bg-white fshadow rounded-md text-sm top-[102%]"
        >
          {actions.map(({ label, link }) => (
            <li className="px-2 py-1 hover:text-fyellow underline-offset-2 hover:underline">
              {link ? (
                <Link to={link.to}>{label}</Link>
              ) : (
                <li className="px-2 py-1 hover:text-fyellow underline-offset-2 hover:underline">
                  {label}
                </li>
              )}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
};

export default ActionMenu;
