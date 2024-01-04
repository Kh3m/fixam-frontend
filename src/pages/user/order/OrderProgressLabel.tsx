import BusSVG from "../../../components/SVGs/BusSVG";
import OrderConfirmedSVG from "../../../components/SVGs/OrderConfirmedSVG";
import OrderDeliveredSVG from "../../../components/SVGs/OrderDeliveredSVG";
import OrderPlacedSVG from "../../../components/SVGs/OrderPlacedSVG";
import { OrderProgressType } from "./OrderProgress";

interface Props {
  label: string;
  currentState: OrderProgressType;
}

const OrderProgressLabel = ({ label, currentState }: Props) => {
  const isPlacedActive = currentState === "placed";
  const isConfirmedActive = currentState === "confirmed";
  const isRouteActive = currentState === "route";
  const isDeliveredActive = currentState === "delivered";

  return (
    <div className="flex space-x-1 items-center font-medium">
      {label.toLocaleLowerCase() === "placed" ? (
        <OrderPlacedSVG
          color={
            isPlacedActive ||
            isConfirmedActive ||
            isRouteActive ||
            isDeliveredActive
              ? "#FF9900"
              : "#d1d5db"
          }
        />
      ) : label.toLocaleLowerCase() === "confirmed" ? (
        <OrderConfirmedSVG
          color={
            isConfirmedActive || isRouteActive || isDeliveredActive
              ? "#FF9900"
              : "#d1d5db"
          }
        />
      ) : label.toLocaleLowerCase() === "route" ? (
        <BusSVG
          color={isRouteActive || isDeliveredActive ? "#FF9900" : "#d1d5db"}
        />
      ) : (
        <OrderDeliveredSVG color={isDeliveredActive ? "#FF9900" : "#d1d5db"} />
      )}
      <div className="text-xs">
        <div>Order</div>
        <div>{label}</div>
      </div>
    </div>
  );
};

export default OrderProgressLabel;
