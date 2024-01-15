const OrderPlacedSVG = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="48"
      viewBox="0 0 40 48"
      fill="none"
    >
      <path
        d="M33.0588 2H7.17648C4.31759 2 2 4.31759 2 7.17647V40.8236C2 43.6824 4.31759 46 7.17648 46H33.0588C35.9177 46 38.2353 43.6824 38.2353 40.8236V7.17647C38.2353 4.31759 35.9177 2 33.0588 2Z"
        stroke={color}
        strokeWidth="2.5"
      />
      <path
        d="M12.3516 14.9414H27.881M12.3516 25.2944H27.881M12.3516 35.6473H22.7045"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default OrderPlacedSVG;
