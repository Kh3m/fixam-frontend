import { ProductType } from "../../services/product";
import capitalize from "../../utils/capitalize";
import { formatPrice } from "../../utils/number-formatter";
import Button from "../Button";
import Rating from "../Rating";
import Space from "../Space";
import VariantOption from "../VariantOption";
import ProductSummary from "./ProductSummary";

const labelValues = [
  { label: "Type", value: "Sofas" },
  { label: "Condition", value: "Brand New" },
  { label: "Place of Use", value: "Indoor" },
  { label: "Warranty", value: "Yes" },
];

const TempLocationSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
  >
    <path
      d="M4 5.475C3.62112 5.475 3.25776 5.33013 2.98985 5.07227C2.72194 4.81441 2.57143 4.46467 2.57143 4.1C2.57143 3.73533 2.72194 3.38559 2.98985 3.12773C3.25776 2.86987 3.62112 2.725 4 2.725C4.37888 2.725 4.74224 2.86987 5.01015 3.12773C5.27806 3.38559 5.42857 3.73533 5.42857 4.1C5.42857 4.28057 5.39162 4.45937 5.31983 4.62619C5.24804 4.79301 5.14281 4.94459 5.01015 5.07227C4.8775 5.19995 4.72001 5.30123 4.54669 5.37033C4.37337 5.43944 4.1876 5.475 4 5.475ZM4 0.25C2.93913 0.25 1.92172 0.655624 1.17157 1.37764C0.421427 2.09965 0 3.07892 0 4.1C0 6.9875 4 11.25 4 11.25C4 11.25 8 6.9875 8 4.1C8 3.07892 7.57857 2.09965 6.82843 1.37764C6.07828 0.655624 5.06087 0.25 4 0.25Z"
      fill="#9B9B9B"
    />
  </svg>
);

interface Props {
  isStore?: boolean;
  product?: ProductType;
  onDeleteProduct?: () => void;
  isDeletingProduct?: boolean;
}

const ProductDetail = ({
  isStore,
  product,
  isDeletingProduct,
  onDeleteProduct,
}: Props) => {
  const labelValuesProd = [
    { label: "Type", value: capitalize(product?.type || "") },
    { label: "Condition", value: "Brand New" },
    { label: "Place of Use", value: "Indoor" },
    { label: "Warranty", value: "Yes" },
  ];

  if (product)
    return (
      <div className={`${isStore ? "" : "w-[40%]"}`}>
        {!isStore && (
          <h2 className="dark:text-white text-3xl">{product.name}</h2>
        )}
        <Space spacing="my-3" />
        <h3 className="text-sm text-fgrey">{product.category_name}</h3>
        <span className="text-2xl font-bold dark:text-fgrey">
          {formatPrice(product.price as number)}
        </span>
        <Space spacing="my-3" />
        <Rating count={5} withViews />
        <Space spacing="my-3" />
        <ProductSummary direction="horizontal" labelValues={labelValuesProd} />
        <Space spacing="my-6" />
        <div className="flex space-x-2">
          <VariantOption
            variant="Color"
            defaultSelectValue={{ label: "Black", value: "Black" }}
            options={[
              { label: "Red", value: "Red" },
              { label: "Green", value: "Green" },
              { label: "Black", value: "Black" },
              { label: "Purple", value: "Purple" },
              { label: "Cyan", value: "Cyan" },
            ]}
          />
          <VariantOption
            variant="Size"
            defaultSelectValue={{ label: "40", value: "40" }}
            options={[
              { label: "20", value: "20" },
              { label: "40", value: "40" },
              { label: "60", value: "60" },
            ]}
          />
        </div>
        <Space spacing="my-6" />
        <p className="dark:text-fgrey flex space-x-1 text-xs font-semibold">
          <span>
            <TempLocationSVG />
          </span>
          <span>
            Luxurious 7 seater turkish fabric sofa, assembled in Nigeria by
            Nigerians.
          </span>
        </p>
        <Space spacing="my-3" />
        <Button
          variant="elevated"
          styles="w-full bg-fyellow text-white font-semibold text-xs"
        >
          {isStore ? "Edit" : "Buy Now"}
        </Button>
        <Space spacing="my-3" />
        <Button
          onClick={isStore && onDeleteProduct ? onDeleteProduct : () => {}}
          disabled={isStore && isDeletingProduct}
          variant="outlined"
          styles="w-full border-2 border-fyellow text-fyellow "
        >
          {isStore ? "Delete" : "Add to Cart"}
        </Button>
      </div>
    );

  return (
    <div className={`${isStore ? "" : "w-[40%]"}`}>
      {!isStore && (
        <h2 className="dark:text-white text-3xl">Turkish Royal Fabric Sofa</h2>
      )}
      <Space spacing="my-3" />
      <h3 className="text-sm text-fgrey">Leather Sofa Chair</h3>
      <span className="text-2xl font-bold dark:text-fgrey">
        {formatPrice(549_999)}
      </span>
      <Space spacing="my-3" />
      <Rating count={5} withViews />
      <Space spacing="my-3" />
      <ProductSummary direction="horizontal" labelValues={labelValues} />
      <Space spacing="my-3" />
      <p className="dark:text-fgrey flex space-x-1 text-xs font-semibold">
        <span>
          <TempLocationSVG />
        </span>
        <span>
          Luxurious 7 seater turkish fabric sofa, assembled in Nigeria by
          Nigerians.
        </span>
      </p>
      <Space spacing="my-3" />
      <Button
        variant="elevated"
        styles="w-full bg-fyellow text-white font-semibold text-xs"
      >
        {isStore ? "Edit" : "Buy Now"}
      </Button>
      <Space spacing="my-3" />
      <Button
        variant="outlined"
        styles="w-full border-2 border-fyellow text-fyellow "
      >
        {isStore ? "Delete" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default ProductDetail;
