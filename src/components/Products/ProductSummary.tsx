import { Fragment } from "react";
import Space from "../Space";

type LabelValue = {
  label: string;
  value: string;
};

interface BaseProps {
  direction: "vertical" | "horizontal";
}

type SummaryProps = BaseProps & LabelValue;

interface Props extends BaseProps {
  labelValues: LabelValue[];
}

const Summary = ({ label, value, direction }: SummaryProps) => (
  <li
    className={`flex text-left font-semibold text-xs 
    ${direction === "vertical" && "flex-col justify-center space-y-1"}
    ${direction === "horizontal" && "justify-between"}
  `}
  >
    <div className="dark:text-fgrey w-1/2 uppercase">{label}</div>
    <div className="dark:text-white w-1/2 ">{value}</div>
  </li>
);

const ProductSummary = ({ direction, labelValues }: Props) => {
  return (
    <ul className={`${direction === "vertical" && "grid grid-cols-3 gap-y-4"}`}>
      {labelValues.map(({ label, value }, index) => (
        <Fragment key={index}>
          <Summary direction={direction} label={label} value={value} />
          {direction === "horizontal" && <Space spacing="my-4" />}
        </Fragment>
      ))}
    </ul>
  );
};

export default ProductSummary;
