interface Props {
  color: string;
}
const LogoutSVG = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="26"
      viewBox="0 0 28 26"
      fill="none"
    >
      <path
        d="M16.8125 7.25V4.375C16.8125 3.6125 16.5096 2.88123 15.9704 2.34207C15.4313 1.8029 14.7 1.5 13.9375 1.5H3.875C3.1125 1.5 2.38123 1.8029 1.84207 2.34207C1.3029 2.88123 1 3.6125 1 4.375V21.625C1 22.3875 1.3029 23.1188 1.84207 23.6579C2.38123 24.1971 3.1125 24.5 3.875 24.5H13.9375C14.7 24.5 15.4313 24.1971 15.9704 23.6579C16.5096 23.1188 16.8125 22.3875 16.8125 21.625V18.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.625 13H26.875M26.875 13L22.5625 8.6875M26.875 13L22.5625 17.3125"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoutSVG;
