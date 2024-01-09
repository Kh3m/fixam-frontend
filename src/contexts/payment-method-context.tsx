import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import paymentMethodReducer, {
  PaymentMethodAction,
  PaymentMethodReducerType,
} from "../reducers/payment-method-reducer";

interface PaymentMethodContextProps {
  paymentMethodState: PaymentMethodReducerType;
  dispatch: Dispatch<PaymentMethodAction>;
}

const CheckoutContext = createContext<PaymentMethodContextProps | undefined>(
  undefined
);

export const PaymentMethodContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [paymentMethodState, dispatch] = useReducer(paymentMethodReducer, {
    openPaymentMethodForm: false,
  });

  const contextValues: PaymentMethodContextProps = {
    paymentMethodState,
    dispatch,
  };

  return (
    <CheckoutContext.Provider value={contextValues}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const usePaymentMethodContext = (): PaymentMethodContextProps => {
  const context = useContext(CheckoutContext);

  if (!context)
    throw new Error(
      "usePaymentMethodContext must be used within a PaymentMethodContextProvider"
    );

  return context;
};
