interface Props {
  color: string;
}
const OrdersSVG = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
    >
      <path
        d="M19.8571 0.642822H4.14286C2.4071 0.642822 1 2.04993 1 3.78568V24.2143C1 25.95 2.4071 27.3571 4.14286 27.3571H19.8571C21.5929 27.3571 23 25.95 23 24.2143V3.78568C23 2.04993 21.5929 0.642822 19.8571 0.642822Z"
        stroke={color}
      />
      <path
        d="M7.28577 8.5H16.7143M7.28577 14.7857H16.7143M7.28577 21.0714H13.5715"
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default OrdersSVG;
