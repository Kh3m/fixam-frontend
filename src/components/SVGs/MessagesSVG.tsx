interface Props {
  color: string;
}
const MessagesSVG = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M23.4 0H2.6C1.17 0 0.013 1.17 0.013 2.6L0 26L5.2 20.8H23.4C24.83 20.8 26 19.63 26 18.2V2.6C26 1.17 24.83 0 23.4 0ZM20.8 15.6H5.2V13H20.8V15.6ZM20.8 11.7H5.2V9.1H20.8V11.7ZM20.8 7.8H5.2V5.2H20.8V7.8Z"
        fill={color}
      />
    </svg>
  );
};

export default MessagesSVG;
