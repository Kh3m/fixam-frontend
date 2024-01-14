import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import productFilteringReducer, {
  ProductFilteringReducerType,
} from "../reducers/product-filtering-reducer";

interface ProductFilteringContextProps {
  filteringState: ProductFilteringReducerType;
  setCategoryId: (categoryId: string) => void;
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
  clearFiltering: () => void;
}

const ProductFilteringContext = createContext<
  ProductFilteringContextProps | undefined
>(undefined);

export const ProductFilteringContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [filteringState, dispatch] = useReducer(productFilteringReducer, {});

  const clearFiltering = () => {
    // Clear checkout data from localStorage and reset state
    dispatch({ type: "CLEAR_FILTERING" });
  };

  const contextValues = {
    filteringState: { ...filteringState },
    setCategoryId: (categoryId: string) =>
      dispatch({ type: "SET_CATEGORY_ID", categoryId }),
    setMinPrice: (minPrice: number) =>
      dispatch({ type: "SET_MIN_PRICE", minPrice }),
    setMaxPrice: (maxPrice: number) =>
      dispatch({ type: "SET_MAX_PRICE", maxPrice }),
    clearFiltering,
  };

  return (
    <ProductFilteringContext.Provider value={contextValues}>
      {children}
    </ProductFilteringContext.Provider>
  );
};

export const useProductFilteringContext = (): ProductFilteringContextProps => {
  const context = useContext(ProductFilteringContext);

  if (!context)
    throw new Error(
      "useProductFilteringContext must be used within a ProductFilteringContextProvider"
    );

  return context;
};
