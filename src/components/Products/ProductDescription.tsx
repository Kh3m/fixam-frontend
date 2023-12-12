import Button from "../Button";
import Space from "../Space";
import ProductSummary from "./ProductSummary";
import SafetyTips from "./SafetyTips";
import VendorContact from "./VendorContact";

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

const ProductDescription = () => {
  return (
    <div>
      <h3 className="dark:text-white ">Description</h3>
      <Space spacing="my-2" />
      <div className="flex justify-between ">
        <div className="w-[60%]">
          <ProductSummary labelValues={labelValues} direction={"vertical"} />
        </div>
        <div className="w-[20%]">
          <VendorContact />
        </div>
        <Space spacing="mx-8" />
        <div className="w-[20%]">
          <SafetyTips />
        </div>
      </div>

      <div>
        <Button variant="outlined" styles="border-fyellow text-fyellow">
          Make an Offer
        </Button>
        <div className="text-sm text-fgrey my-1">Payment on Delivery!</div>
      </div>
    </div>
  );
};

export default ProductDescription;
