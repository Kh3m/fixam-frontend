import Space from "../../../components/Space";
import OrderProgressBar from "./OrderProgressBar";
import OrderProgressLabel from "./OrderProgressLabel";

export type OrderProgressType =
  | "placed"
  | "confirmed"
  | "shipped"
  | "delivered";
// ("Placed", "Placed"),
//         ("Confirmed", "Confirmed"),
//         ("Shipped", "Shipped"),
//         ("Delivered", "Delivered"),

const progressArr = ["placed", "confirmed", "shipped", "delivered"];

interface Props {
  orderDeliveryStatus: string;
}
const OrderProgress = ({ orderDeliveryStatus }: Props) => {
  // const [progressIndex, setProgressIndex] = useState(0);

  console.log("orderDeliveryStatus", orderDeliveryStatus.toLocaleLowerCase());
  return (
    <div>
      <OrderProgressBar
        progress={orderDeliveryStatus.toLocaleLowerCase() as OrderProgressType}
      />
      <Space spacing="my-12" />
      <div className="flex justify-between">
        {progressArr.map((label) => (
          <OrderProgressLabel
            label={label}
            currentState={
              orderDeliveryStatus.toLocaleLowerCase() as OrderProgressType
            }
          />
        ))}
      </div>

      {/* <button
        onClick={() => {
          if (progressIndex >= 0 && progressIndex <= 3) {
            setProgressIndex((prevProgressIndex) => prevProgressIndex + 1);
          } else {
            setProgressIndex(0);
          }
        }}
        className="mt-12 mx-auto bg-fyellow-shades-500 
      rounded-md text-xs font-semibold text-white py-1 px-2"
      >
        Test Progress
      </button> */}
    </div>
  );
};

export default OrderProgress;
