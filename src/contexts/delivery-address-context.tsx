import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import deliverAddressReducer, {
  DeliveryAddressAction,
  DeliveryAddressReducerType,
} from "../reducers/delivery-address-reducer";

interface DeliveryAddressContextProps {
  deliveryAddressState: DeliveryAddressReducerType;
  dispatch: Dispatch<DeliveryAddressAction>;
}

const DeliveryAddressContext = createContext<
  DeliveryAddressContextProps | undefined
>(undefined);

export const DeliveryAddressContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [deliveryAddressState, dispatch] = useReducer(deliverAddressReducer, {
    openDeliveryAddressForm: false,
  });

  const contextValues: DeliveryAddressContextProps = {
    deliveryAddressState,
    dispatch,
  };

  return (
    <DeliveryAddressContext.Provider value={contextValues}>
      {children}
    </DeliveryAddressContext.Provider>
  );
};

export const useDeliveryAddressContext = (): DeliveryAddressContextProps => {
  const context = useContext(DeliveryAddressContext);

  if (!context)
    throw new Error(
      "useDeliveryAddressContext must be used within a DeliveryAddressContextProvider"
    );

  return context;
};
