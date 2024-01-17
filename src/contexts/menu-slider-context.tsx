import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import menuSliderReducer, {
  MenuSliderReducerType,
} from "../reducers/menu-slider-reducer";

interface MenuSliderContextProps {
  menuState: MenuSliderReducerType;
  openMenu: () => void;
  closeMenu: () => void;
}

const MenuSliderContext = createContext<MenuSliderContextProps | undefined>(
  undefined
);

export const MenuSliderContextProvider = ({ children }: PropsWithChildren) => {
  const [menuState, dispatch] = useReducer(menuSliderReducer, {
    openMenu: false,
  });

  const contextValues = {
    menuState: { ...menuState },
    openMenu: () => dispatch({ type: "OPEN_MENU" }),
    closeMenu: () => dispatch({ type: "CLOSE_MENU" }),
  };

  return (
    <MenuSliderContext.Provider value={contextValues}>
      {children}
    </MenuSliderContext.Provider>
  );
};

export const useMenuSliderContext = (): MenuSliderContextProps => {
  const context = useContext(MenuSliderContext);

  if (!context)
    throw new Error(
      "useMenuSliderContext must be used within a MenuSliderContextProvider"
    );

  return context;
};
