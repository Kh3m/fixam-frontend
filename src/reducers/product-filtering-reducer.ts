export type ProductFilteringReducerType = {
  categoryId?: string;
};

// Define the initial state
const initialState = {
  categoryId: undefined,
};

export type ProductFilteringActionType =
  | { type: "SET_CATEGORY_ID"; categoryId: string }
  | { type: "CLEAR_FILTERING" };

// Define the reducer function
const productFilteringReducer = (
  state: ProductFilteringReducerType,
  action: ProductFilteringActionType
) => {
  switch (action.type) {
    case "SET_CATEGORY_ID":
      return { ...state, categoryId: action.categoryId };
    case "CLEAR_FILTERING":
      return initialState; // Reset to initial state
    default:
      return state;
  }
};

export default productFilteringReducer;
