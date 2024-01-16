export type ProductFilteringReducerType = {
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  searchTerm?: string;
  filteringType?: string;
};

// Define the initial state
const initialState = {
  categoryId: undefined,
  priceRange: undefined,
  minPrice: undefined,
  maxPrice: undefined,
  searchTerm: undefined,
  filteringType: undefined,
};

// setMinPrice: (minPrice: number) =>
// dispatch({ type: "SET_MIN_PRICE", minPrice }),
// setMaxPrice: (maxPrice: number) =>
// dispatch({ type: "SET_MAX_PRICE", maxPrice }),

export type ProductFilteringActionType =
  | { type: "SET_CATEGORY_ID"; categoryId: string }
  | { type: "SET_MIN_PRICE"; minPrice: number }
  | { type: "SET_MAX_PRICE"; maxPrice: number }
  | { type: "SET_SEARCH_TERM"; searchTerm: string }
  | { type: "SET_SEARCH_TYPE"; filteringType: string }
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
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.searchTerm };
    case "SET_SEARCH_TYPE":
      return { ...state, filteringType: action.filteringType };
    case "CLEAR_FILTERING":
      return initialState; // Reset to initial state
    default:
      return state;
  }
};

export default productFilteringReducer;
