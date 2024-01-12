import { UserAddressType } from "../services/user";

export type DeliveryAddressReducerType = {
  deliveryAddresses?: UserAddressType[];
  openDeliveryAddressForm?: boolean;
};

export type DeliveryAddressAction = {
  type: "OPEN_DELIVERY_ADDRESS_FORM";
  openDeliveryAddressForm: boolean;
};

const deliveryAddressReducer = (
  state: DeliveryAddressReducerType,
  action: DeliveryAddressAction
): DeliveryAddressReducerType => {
  switch (action.type) {
    case "OPEN_DELIVERY_ADDRESS_FORM":
      return {
        ...state,
        openDeliveryAddressForm: action.openDeliveryAddressForm,
      };
    default:
      return state;
  }
};

export default deliveryAddressReducer;
