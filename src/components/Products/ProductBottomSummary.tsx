interface Props {
  content: {
    left: string[];
    right: string[];
  };
}
const ProductBottomSummary = ({ content: { left, right } }: Props) => {
  return (
    <div className="flex justify-between text-fgrey text-xs">
      <div>
        {left.map((value) => (
          <span key={value} className="mx-2">
            {value}
          </span>
        ))}
      </div>
      <div>
        {right.map((value) => (
          <span key={value} className="mx-2">
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductBottomSummary;
