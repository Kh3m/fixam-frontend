import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import BorderCard from "../BorderCard";

import product1 from "../../../assets/product_1.png";
import { Link } from "react-router-dom";

interface Props {
  hasCancel?: boolean;
}

const OrderSummaryCard = ({ hasCancel }: Props) => {
  return (
    <BorderCard>
      <section className="flex items-start justify-between space-x-5">
        <img
          src={product1}
          alt="Order Product Image"
          className="h-[136px] rounded-md"
        />
        <div className="flex flex-col h-[136px] justify-between">
          <div>
            <Heading variant="h4" styles="font-semibold">
              Turkish Royal Fabric Sofa
            </Heading>
            <span className="font-medium text-gray-700">QTY: 1</span>
          </div>
          <span className="text-sm font-medium ">
            To be delivered between Friday 10th and Tuesday 14th January
          </span>
        </div>
        <div className="flex items-start justify-end flex-col space-y-2">
          <Link
            to={
              hasCancel
                ? `/users/orders/547862FA/track`
                : `/users/orders/547862FA`
            }
          >
            <Button
              variant="elevated"
              styles="bg-fyellow-shades-500 text-white text-[10px] font-semibold w-28 whitespace-nowrap py-2
              flex items-center justify-center"
              noSizingClass
            >
              {hasCancel ? "Track Order" : "View Details"}
            </Button>
          </Link>
          {hasCancel && (
            <Link to={`/users/orders/547862FA/confirm-cancel`}>
              <Button
                variant="outlined"
                styles="border-fyellow-shades-500 text-fyellow-shades-500 text-[10px] font-semibold w-28 whitespace-nowrap py-[4px]
                flex items-center justify-center"
                noSizingClass
              >
                Cancel Order
              </Button>
            </Link>
          )}
        </div>
      </section>
    </BorderCard>
  );
};

export default OrderSummaryCard;
