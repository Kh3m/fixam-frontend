import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { CheckoutReducerType } from "../reducers/checkout-reducer";
import checkoutReducer from "../reducers/checkout-reducer";

interface CheckoutContextProps {
  checkoutState: CheckoutReducerType;
  setAddressId: (addressId: string) => void;
  setPaymentMethod: (paymentMethod: string) => void;
  clearCheckoutData: () => void;
}

const CheckoutContext = createContext<CheckoutContextProps | undefined>(
  undefined
);

export const CheckoutContextProvider = ({ children }: PropsWithChildren) => {
  const [checkoutState, dispatch] = useReducer(checkoutReducer, {
    addressId: null,
    paymentMethod: "CardPayment",
  });

  useEffect(() => {
    // Load checkout data from localStorage on component mount
    const storedCheckoutData = localStorage.getItem("checkoutData");
    if (storedCheckoutData) {
      dispatch({
        type: "SET_ADDRESS_ID",
        payload: JSON.parse(storedCheckoutData).addressId,
      });
      dispatch({
        type: "SET_PAYMENT_METHOD",
        payload: JSON.parse(storedCheckoutData).paymentMethod as string,
      });
    }
  }, []);

  useEffect(() => {
    // Save checkout data to localStorage whenever state changes
    localStorage.setItem("checkoutData", JSON.stringify(checkoutState));
  }, [checkoutState]);

  const clearCheckoutData = () => {
    // Clear checkout data from localStorage and reset state
    localStorage.removeItem("checkoutData");
    dispatch({ type: "CLEAR_CHECKOUT_DATA" });
  };

  const contextValues = {
    checkoutState: { ...checkoutState },
    setAddressId: (addressId: string) =>
      dispatch({ type: "SET_ADDRESS_ID", payload: addressId }),
    setPaymentMethod: (paymentMethod: string) =>
      dispatch({ type: "SET_PAYMENT_METHOD", payload: paymentMethod }),
    clearCheckoutData,
  };

  return (
    <CheckoutContext.Provider value={contextValues}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = (): CheckoutContextProps => {
  const context = useContext(CheckoutContext);

  if (!context)
    throw new Error(
      "useCheckoutContext must be used within a CheckoutContextProvider"
    );

  return context;
};
