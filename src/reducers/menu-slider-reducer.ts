export type MenuSliderReducerType = {
  openMenu: boolean;
};

export type MenuSliderActionType =
  | { type: "OPEN_MENU" }
  | { type: "CLOSE_MENU" };

// Define the reducer function
const menuSliderReducer = (
  state: MenuSliderReducerType,
  action: MenuSliderActionType
) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { ...state, openMenu: true };
    case "CLOSE_MENU":
      return { ...state, openMenu: false };
    default:
      return state;
  }
};

export default menuSliderReducer;
