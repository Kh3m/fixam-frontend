export type CheckoutReducerType = {
  addressId: string | null;
  paymentMethod: string | null;
};

// Define the initial state
const initialState = {
  addressId: null,
  paymentMethod: null,
};

export type CheckoutActionType =
  | { type: "SET_ADDRESS_ID"; payload: string }
  | { type: "SET_PAYMENT_METHOD"; payload: string }
  | { type: "CLEAR_CHECKOUT_DATA" };

// Define the reducer function
const checkoutReducer = (
  state: CheckoutReducerType,
  action: CheckoutActionType
) => {
  switch (action.type) {
    case "SET_ADDRESS_ID":
      return { ...state, addressId: action.payload };
    case "SET_PAYMENT_METHOD":
      return { ...state, paymentMethod: action.payload };
    case "CLEAR_CHECKOUT_DATA":
      return initialState; // Reset to initial state
    default:
      return state;
  }
};

export default checkoutReducer;
