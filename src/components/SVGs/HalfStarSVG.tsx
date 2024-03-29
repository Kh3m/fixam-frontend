interface Props {
  size?: number;
}

const HalfStarSVG = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size ? size : "24"}`}
      height={`${size ? size : "24"}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M24 8.76421L15.372 8.01368L12 0L8.628 8.02579L0 8.76421L6.552 14.49L4.584 23L12 18.4847L19.416 23L17.46 14.49L24 8.76421ZM12 16.2211V4.96316L14.052 9.85368L19.308 10.3137L15.324 13.8L16.524 18.9811L12 16.2211Z"
        fill="#FF9900"
      />
    </svg>
  );
};

export default HalfStarSVG;
