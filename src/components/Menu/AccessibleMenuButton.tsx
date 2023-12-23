import { ForwardedRef, Fragment, PropsWithChildren, forwardRef } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface Props {
  handleMenuTrigger: () => void;
  openMenu: boolean;
  selectedIem: string;
  changeLabelToSelected?: boolean;
  styles?: string;
}

const AccessibleMenuButton = forwardRef(
  (
    {
      handleMenuTrigger,
      openMenu,
      selectedIem,
      changeLabelToSelected,
      children,
      styles,
    }: PropsWithChildren<Props>,
    btnRef: ForwardedRef<HTMLButtonElement>
  ) => {
    const isChildrenString = typeof children === "string";

    return (
      <button
        ref={btnRef}
        onClick={handleMenuTrigger}
        className={`${styles} ${
          isChildrenString && "px-4 py-2"
        } outline-2 focus:outline-fyellow bg-slate-200 text-gray-700  
        dark:text-slate-100 dark:bg-slate-700 rounded-md flex items-center space-x-2 
        border-2 border-transparent focus:border-fyellow dark:border-slate-300 pagination-shadow`}
        // accessible menu
        id="profile-menu"
        aria-expanded={openMenu}
        aria-haspopup="true"
        aria-controls="profile-menu-content"
      >
        {/* if children is ReactNode display children */}
        {!isChildrenString && <span className="font-semibold">{children}</span>}

        {/* 
            if children is a string and changeLabelToSelected is {truthy} display 
            children with icon and switch the label to selected item 
        */}
        {isChildrenString && changeLabelToSelected && (
          <Fragment>
            <span className="font-semibold">{selectedIem || children}</span>
            <FaChevronDown />
          </Fragment>
        )}

        {/* 
            if children is a string and changeLabelToSelected is {falsy} display 
            children with icon and don't switch the label to selected item 
        */}

        {isChildrenString && !changeLabelToSelected && (
          <Fragment>
            <span className="font-semibold">{children}</span>
            <FaChevronDown />
          </Fragment>
        )}
      </button>
    );
  }
);

export default AccessibleMenuButton;
