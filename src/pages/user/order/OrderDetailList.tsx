interface Props {
  items: { label: string; value: string }[];
}

const OrderDetailList = ({ items }: Props) => {
  return (
    <ul>
      {items.map(({ label, value }) => (
        <li className="text-sm font-semibold my-1">
          <span>{label}</span>
          <span className="text-gray-500">{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default OrderDetailList;
