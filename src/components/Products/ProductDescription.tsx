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
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius
        asperiores ipsum officiis ducimus? Aliquid ipsam nostrum blanditiis ut
        eos corrupti necessitatibus dolores ipsum vel harum libero vitae rem
        porro animi fuga quos id aperiam amet, quidem deserunt doloremque
        inventore. Maiores quo nulla corrupti cupiditate harum eaque in error,
        recusandae corporis optio sit omnis vitae expedita. Incidunt recusandae
        in, expedita soluta a labore omnis voluptate cum laborum magni obcaecati
        nam eveniet, officia est, quibusdam tenetur temporibus. Voluptatum
        aperiam aspernatur ipsa quod nulla alias adipisci. Sequi non nostrum
        temporibus a inventore eligendi, nobis eveniet hic quidem repellat omnis
        aliquid asperiores nemo.
      </ExpandableText>
      <Space spacing="my-8" />
      <h3 className="dark:text-white ">Description</h3>
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
        <div className="w-[28%]">
          <ReviewRating productId={product?.id || ""} />
        </div>
      </div>
      <Space spacing="my-8" />
      <Reviews />
    </div>
  );
};

export default ProductDescription;
