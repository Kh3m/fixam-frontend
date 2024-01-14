import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import BorderCard from "../BorderCard";

import product1 from "../../../assets/product_1.png";
import { Link, useLocation, useParams } from "react-router-dom";
import DeliveryTimeEstimator from "./BottomSpanMessage";
import useProduct from "../../../hooks/products/useProduct";
import Center from "../../../components/Center";
import Spinner from "../../../components/Spinner";
import { OrderItemType } from "../../../services/order";

interface Props {
  hasCancel?: boolean;
  orderitem: OrderItemType;
}

const OrderSummaryCard = ({ hasCancel, orderitem }: Props) => {
  const { data: orderProduct, isLoading: isLoadingOrderProduct } = useProduct(
    orderitem.product_id
  );

  const { orderId } = useParams();

  if (isLoadingOrderProduct)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (orderProduct)
    return (
      <BorderCard>
        <section className="flex items-start space-x-2">
          <img
            src={product1}
            alt="Order Product Image"
            className="w-24 rounded-md"
          />
          <div className="flex flex-col h-24 justify-between flex-grow">
            <div>
              <Heading variant="h4" styles="font-semibold">
                {orderProduct.name}
              </Heading>
              <span className="font-medium text-gray-700">
                QTY: {orderitem?.quantity}
              </span>
            </div>
            <DeliveryTimeEstimator>
              To be delivered between Friday 10th and Tuesday 14th January
            </DeliveryTimeEstimator>
          </div>
          <div className="flex items-start justify-end flex-col space-y-2">
            <Link
              to={
                hasCancel
                  ? `/users/orders/${orderitem.order_id}/track`
                  : `/users/orders/${orderitem.order_id}`
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
              <Link
                to={`/users/orders/${orderitem.id}/confirm-cancel`}
                state={{
                  productId: orderitem.product_id,
                  itemQuantity: orderitem.quantity,
                  orderId: orderId,
                }}
              >
                <Button
                  onClick={() => {}}
                  variant="outlined"
                  styles="border-fyellow-shades-500 text-fyellow-shades-500 text-[10px] 
                font-semibold w-28 whitespace-nowrap py-[3px]
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
