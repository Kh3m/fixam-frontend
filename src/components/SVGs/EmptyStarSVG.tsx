interface Props {
  size?: number;
}

const EmptyStarSVG = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size ? size : "32"}`}
      height={`${size ? size : "32"}`}
      viewBox="0 0 24 24"
      fill="#D9D9D9"
    >
      <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
    </svg>
  );
};
export default EmptyStarSVG;
