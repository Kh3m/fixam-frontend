interface Props {
  color?: string;
}
const BusSVG = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="37"
      viewBox="0 0 51 37"
      fill="none"
    >
      <path
        d="M4.63636 0C3.40672 0 2.22745 0.487275 1.35796 1.35463C0.488473 2.22199 0 3.39837 0 4.625V30.0625H4.63636C4.63636 31.9024 5.36907 33.667 6.6733 34.9681C7.97753 36.2691 9.74645 37 11.5909 37C13.4354 37 15.2043 36.2691 16.5085 34.9681C17.8127 33.667 18.5455 31.9024 18.5455 30.0625H32.4545C32.4545 31.9024 33.1873 33.667 34.4915 34.9681C35.7957 36.2691 37.5646 37 39.4091 37C41.2536 37 43.0225 36.2691 44.3267 34.9681C45.6309 33.667 46.3636 31.9024 46.3636 30.0625H51V18.5L44.0455 9.25H37.0909V0M20.8636 4.625L30.1364 13.875L20.8636 23.125V16.1875H6.95455V11.5625H20.8636M37.0909 12.7188H42.8864L47.4532 18.5H37.0909M11.5909 26.5938C12.5131 26.5938 13.3976 26.9592 14.0497 27.6097C14.7018 28.2602 15.0682 29.1425 15.0682 30.0625C15.0682 30.9825 14.7018 31.8648 14.0497 32.5153C13.3976 33.1658 12.5131 33.5312 11.5909 33.5312C10.6687 33.5312 9.78422 33.1658 9.1321 32.5153C8.47999 31.8648 8.11364 30.9825 8.11364 30.0625C8.11364 29.1425 8.47999 28.2602 9.1321 27.6097C9.78422 26.9592 10.6687 26.5938 11.5909 26.5938ZM39.4091 26.5938C40.3313 26.5938 41.2158 26.9592 41.8679 27.6097C42.52 28.2602 42.8864 29.1425 42.8864 30.0625C42.8864 30.9825 42.52 31.8648 41.8679 32.5153C41.2158 33.1658 40.3313 33.5312 39.4091 33.5312C38.4869 33.5312 37.6024 33.1658 36.9503 32.5153C36.2982 31.8648 35.9318 30.9825 35.9318 30.0625C35.9318 29.1425 36.2982 28.2602 36.9503 27.6097C37.6024 26.9592 38.4869 26.5938 39.4091 26.5938Z"
        fill={color}
      />
    </svg>
  );
};

export default BusSVG;
