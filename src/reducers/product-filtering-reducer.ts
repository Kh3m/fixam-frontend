export type PriceRangeType = {
  from: number;
  to: number;
};

export type ProductFilteringReducerType = {
  categoryId?: string;
  priceRange?: PriceRangeType;
  minPrice?: number;
  maxPrice?: number;
};

// Define the initial state
const initialState = {
  categoryId: undefined,
  priceRange: undefined,
  minPrice: undefined,
  maxPrice: undefined,
};

// setMinPrice: (minPrice: number) =>
// dispatch({ type: "SET_MIN_PRICE", minPrice }),
// setMaxPrice: (maxPrice: number) =>
// dispatch({ type: "SET_MAX_PRICE", maxPrice }),

export type ProductFilteringActionType =
  | { type: "SET_CATEGORY_ID"; categoryId: string }
  | { type: "SET_MIN_PRICE"; minPrice: number }
  | { type: "SET_MAX_PRICE"; maxPrice: number }
  | { type: "CLEAR_FILTERING" };

// Define the reducer function
const productFilteringReducer = (
  state: ProductFilteringReducerType,
  action: ProductFilteringActionType
) => {
  switch (action.type) {
    case "SET_CATEGORY_ID":
      return { ...state, categoryId: action.categoryId };
    case "SET_MIN_PRICE":
      return { ...state, minPrice: action.minPrice };
    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.maxPrice };
    case "CLEAR_FILTERING":
      return initialState; // Reset to initial state
    default:
      return state;
  }
};

export default productFilteringReducer;
