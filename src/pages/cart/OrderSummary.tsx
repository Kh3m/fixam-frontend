import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import HR from "../../components/HR";
import Heading from "../../components/Heading";
import Space from "../../components/Space";
import { formatPrice } from "../../utils/number-formatter";
import Spinner from "../../components/Spinner";
import { CartType } from "../../services/cart";

interface Props {
  subtotal: number;
  isCreatingOrder?: boolean;
  cartData?: CartType;
  handleCheckout?: () => void;
}

const OrderSummary = ({
  subtotal,
  isCreatingOrder,
  cartData,
  handleCheckout,
}: Props) => {
  const { pathname } = useLocation();
  return (
    <Card>
      <Heading variant="h3" styles="text-2xl font-semibold text-center">
        Order Summary
      </Heading>
      <Space spacing="my-8" />
      <div className="flex justify-between">
        <span className="text-base font-semibold">Subtotal</span>
        <span className="text-base font-semibold">{formatPrice(subtotal)}</span>
      </div>

      <div className="text-xs font-semibold text-fdarkery-grey">
        Delivery fee not included
      </div>
      <Space spacing="my-8" />
      <div className="px-8">
        <HR />
      </div>
      <Space spacing="my-8" />
      {/* TODO: CHECK */}
      {pathname.endsWith("checkout") || handleCheckout ? (
        <Button
          disabled={isCreatingOrder === true ? true : false}
          onClick={handleCheckout}
          variant="elevated"
          styles="bg-fyellow text-white font-bold w-full mb-8 flex justify-center space-x-2"
        >
          <span>Checkout</span>
          {isCreatingOrder && <Spinner />}
        </Button>
      ) : (
        <Link to={`/checkout`} state={{ subtotal }}>
          <Button
            disabled={subtotal <= 0}
            variant="elevated"
            styles="bg-fyellow text-white font-bold w-full mb-8"
          >
            Checkout
          </Button>
        </Link>
      )}
    </Card>
  );
};

export default OrderSummary;
