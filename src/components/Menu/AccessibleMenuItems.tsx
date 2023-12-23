import { ForwardedRef, forwardRef, KeyboardEvent, ReactNode } from "react";

interface Props {
  handleMenuItemKeyUp: (
    e: KeyboardEvent<HTMLLIElement>,
    menuIndex: number
  ) => void;
  menuItems: ReactNode[] | string[];
  handleMenuItemClick: (item: ReactNode | string) => void;
  handleMenuKeyUp: (e: KeyboardEvent<HTMLUListElement>) => void;
  styles?: string;
}

const AccessibleMenuItems = forwardRef(
  (
    {
      handleMenuItemKeyUp,
      handleMenuItemClick,
      menuItems,
      handleMenuKeyUp,
      styles,
    }: Props,
    ulMenuRef: ForwardedRef<HTMLUListElement>
  ) => {
    return (
      <ul
        ref={ulMenuRef}
        onKeyUp={handleMenuKeyUp}
        className={`${
          styles ? styles : "top-14"
        } bg-slate-100 text-gray-600 dark:text-slate-100 dark:bg-slate-600 
          absolute right-0 rounded-md fshadow z-50`}
        // accessible menu content
        role="menu"
        aria-labelledby="profile-menu"
        id="profile-menu-content"
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            onKeyUp={(e) => handleMenuItemKeyUp(e, index)}
            className="border-2 border-transparent outline-2 focus:outline-fyellow focus:border-fyellow
               dark:focus:hover:bg-fyellow hover:text-white hover:bg-fyellow dark:hover:bg-fyellow 
               rounded-md cursor-pointer whitespace-nowrap"
            tabIndex={index} // accessible menuitem
            role="menuitem"
          >
            <button
              onClick={() => handleMenuItemClick(item)}
              className="w-full text-left px-4 py-2"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    );
  }
);

export default AccessibleMenuItems;
