import {
  KeyboardEvent,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import AccessibleMenuButton from "./AccessibleMenuButton";
import AccessibleMenuItems from "./AccessibleMenuItems";

interface Props {
  menuItems: ReactNode[] | string[];
  changeLabelToSelected?: boolean;
  stylesForDropdown?: string;
  stylesForButton?: string;
  styles?: string;
}

const AccessibleMenu = ({
  menuItems,
  changeLabelToSelected,
  children,
  stylesForDropdown,
  stylesForButton,
  styles,
}: PropsWithChildren<Props>) => {
  const isChildrenString = typeof children === "string";
  const defaultValue = isChildrenString ? children : "";

  const [openMenu, setOpenMenu] = useState(false);
  const ulMenuRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [selectedIem, setSelectedItem] = useState(defaultValue);

  const handleMenuItemClick = (item: string | ReactNode) => {
    setSelectedItem(item as string);
    setOpenMenu(false);
    console.log(selectedIem);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    // Check if the click target is outside the menu and the button
    if (
      ulMenuRef.current &&
      !ulMenuRef.current.contains(event.target as Node) &&
      btnRef.current &&
      !btnRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    if (
      ulMenuRef.current &&
      ulMenuRef.current.firstChild instanceof HTMLElement &&
      openMenu
    ) {
      ulMenuRef.current.firstChild.focus();
    }

    if (
      btnRef.current &&
      !openMenu &&
      ulMenuRef.current &&
      ulMenuRef.current.firstChild
    ) {
      btnRef.current.focus();
    }

    // Add the global click event listener when the menu is open
    if (openMenu) {
      document.addEventListener("click", handleDocumentClick);
    }

    // Remove the global click event listener when the component unmounts or the menu is closed
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [openMenu, btnRef.current]);

  const handleMenuTrigger = () => {
    setOpenMenu(!openMenu);
  };

  const handleMenuKeyUp = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "Escape") setOpenMenu(false);
  };

  const handleMenuItemKeyUp = (
    e: KeyboardEvent<HTMLLIElement>,
    menuItemIndex: number
  ) => {
    type MenuItemType = HTMLElement;

    const menuItemsContainer = e.currentTarget.parentNode;
    if (!menuItemsContainer) {
      return;
    }

    const menuItems =
      menuItemsContainer.children as HTMLCollectionOf<HTMLElement>;

    // Check if the user clicks enter or space to select the focused item
    if (e.key === "Enter" || e.key === " ") {
      // Set selectedItem to the focused item
      setSelectedItem(e.currentTarget.textContent + "");
      setOpenMenu(false);
    }

    const isLastMenuItem = menuItemIndex === menuItems.length - 1;
    const isFirstMenuItem = menuItemIndex === 0;

    const nextMenuItem = menuItems.item(menuItemIndex + 1);
    const previousMenuItem = menuItems.item(menuItemIndex - 1);

    if (menuItems) {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        if (isLastMenuItem) {
          (menuItems.item(0) as MenuItemType).focus();
          return;
        }
        nextMenuItem?.focus();
      }

      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        if (isFirstMenuItem) {
          (menuItems.item(menuItems.length - 1) as MenuItemType).focus();
          return;
        }
        previousMenuItem?.focus();
      }
    }
  };

  return (
    <div className={`${styles} relative h-fit`}>
      <AccessibleMenuButton
        ref={btnRef}
        handleMenuTrigger={handleMenuTrigger}
        openMenu={openMenu}
        selectedIem={selectedIem}
        changeLabelToSelected={changeLabelToSelected}
        styles={stylesForButton}
      >
        {children}
      </AccessibleMenuButton>

      {openMenu && (
        <AccessibleMenuItems
          ref={ulMenuRef}
          handleMenuItemClick={handleMenuItemClick}
          handleMenuItemKeyUp={handleMenuItemKeyUp}
          handleMenuKeyUp={handleMenuKeyUp}
          menuItems={menuItems}
          styles={stylesForDropdown}
        />
      )}
    </div>
  );
};

export default AccessibleMenu;
