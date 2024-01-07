import Space from "../Space";
import ProductSummary from "./ProductSummary";
import ReviewRating from "../Reviews/ReviewRating";
import Reviews from "../Reviews/Reviews";
import { ProductType } from "../../services/product";
import ProductFeatures from "./ProductFeatures";
import ExpandableText from "../ExpandableText";

const labelValues = [
  { label: "Brand", value: "Royal" },
  { label: "Type", value: "Sofas" },
  { label: "PLACE TO USE", value: "Indoor" },
  { label: "Condition", value: "Brand New" },
  { label: "SEATING CAPACITY", value: "7" },
  { label: "Material", value: "Wood, Fabric, Leather" },
  { label: "Shape", value: "Square" },
  { label: "WARRANTY", value: "Yes" },
];

interface Props {
  product?: ProductType;
}

const ProductDescription = ({ product }: Props) => {
  return (
    <div>
      <div className="flex space-x-10">
        <div className="w-[70%]">
          <ExpandableText>{product?.description || ""}</ExpandableText>
        </div>
        <div className="w-[30%]">
          <ReviewRating productId={product?.id || ""} />
        </div>
      </div>
      <Space spacing="my-8" />
      {/* <h3 className="dark:text-white ">Description</h3>
      <Space spacing="my-2" />
      <div className="flex justify-between items-start">
        <div className="w-[40%]">
          <ProductSummary labelValues={labelValues} direction="vertical" />
        </div>
        <div className="w-[38%] px-8">
          <ProductFeatures
            features={[
              "Love me please",
              "Again and Again",
              "This Product is way xyz  than abc",
              "This Product is way xyz  than abc",
              "This Product is way xyz  than abc",
              "This Product is way xyz  than abc This Product is way xyz  than abc",
              "This Product is way xyz  than abc This Product is way xyz  than abc",
              "This Product is way xyz  than abc This Product is way xyz  than abc",
              "This Product is way xyz  than abc This Product is way xyz  than abc",
              "This Product is way xyz  than abc This Product is way xyz  than abc",
              "This Product is way xyz  than abc This Product is way xyz  than abc",
            ]}
          />
        </div>
      </div> */}
    </div>
  );
};

export default ProductDescription;
