export type PaymentMethodReducerType = {
  openPaymentMethodForm?: boolean;
};

export type PaymentMethodAction = {
  type: "OPEN_PAYMENT_METHOD_FORM";
  openPaymentMethodForm: boolean;
};

const paymentMethodReducer = (
  state: PaymentMethodReducerType,
  action: PaymentMethodAction
): PaymentMethodReducerType => {
  switch (action.type) {
    case "OPEN_PAYMENT_METHOD_FORM":
      return {
        ...state,
        openPaymentMethodForm: action.openPaymentMethodForm,
      };
    default:
      return state;
  }
};

export default paymentMethodReducer;
