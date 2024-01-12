interface Props {
  size?: number;
}

const FullStarSVG = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size ? size : "24"}`}
      height={`${size ? size : "24"}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 18.4847L19.416 23L17.448 14.49L24 8.76421L15.372 8.02579L12 0L8.628 8.02579L0 8.76421L6.552 14.49L4.584 23L12 18.4847Z"
        fill="#FF9900"
      />
    </svg>
  );
};

export default FullStarSVG;
