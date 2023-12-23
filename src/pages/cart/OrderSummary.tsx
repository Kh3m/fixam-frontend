import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import HR from "../../components/HR";
import Heading from "../../components/Heading";
import Space from "../../components/Space";
import { formatPrice } from "../../utils/number-formatter";

const OrderSummary = () => {
  return (
    <Card>
      <Heading variant="h3" styles="text-2xl font-semibold text-center">
        Order Summary
      </Heading>
      <Space spacing="my-8" />
      <div className="flex justify-between">
        <span className="text-base font-semibold">Subtotal</span>
        <span className="text-base font-semibold">{formatPrice(649_997)}</span>
      </div>

      <div className="text-xs font-semibold text-fdarkery-grey">
        Delivery fee not included
      </div>
      <Space spacing="my-8" />
      <div className="px-8">
        <HR />
      </div>
      <Space spacing="my-8" />
      <Link to={`/checkout`}>
        <Button
          variant="elevated"
          styles="bg-fyellow text-white font-bold w-full mb-8"
        >
          Checkout
        </Button>
      </Link>
    </Card>
  );
};

export default OrderSummary;
