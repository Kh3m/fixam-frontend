import { Link } from "react-router-dom";
import Button from "../Button";

interface Props {
  subtotal: number;
  productId: string;
}

const BuyNowButton = ({ subtotal, productId }: Props) => {
  return (
    <Link
      to={`/checkout/payment?buy=${productId}`}
      state={{ subtotal: subtotal }}
    >
      <Button
        variant="elevated"
        styles="dark:bg-slate-600 px-2 font-bold text-white bg-fyellow-shades-500"
      >
        Buy Now
      </Button>
    </Link>
  );
};

export default BuyNowButton;
