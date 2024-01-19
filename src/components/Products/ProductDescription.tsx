import useAuth from "../../hooks/useAuth";
import { ProductType } from "../../services/product";
import ExpandableText from "../ExpandableText";
import Heading from "../Heading";
import ReviewRating from "../Reviews/ReviewRating";
// import ReviewRating from "../Reviews/ReviewRating";
import Space from "../Space";

interface Props {
  product?: ProductType;
}

const ProductDescription = ({ product }: Props) => {
  const { userInfo, isAuthenticated } = useAuth();
  return (
    <div className=" m-auto md:w-auto">
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="md:w-[70%]">
          <Heading variant="h4">Description</Heading>
          <ExpandableText>{product?.description || ""}</ExpandableText>
        </div>
        {isAuthenticated() && userInfo && (
          <div className="hidden md:block md:w-[30%]">
            <ReviewRating productId={product?.id || ""} />
          </div>
        )}
      </div>
      <Space spacing="my-8" />
    </div>
  );
};

export default ProductDescription;
