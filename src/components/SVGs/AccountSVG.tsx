interface Props {
  color: string;
}

const AccountSVG = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
    >
      <path
        d="M14.5003 2.91675C7.8267 2.91675 2.41699 8.32646 2.41699 15.0001C2.41699 21.6737 7.8267 27.0834 14.5003 27.0834C21.1739 27.0834 26.5837 21.6737 26.5837 15.0001C26.5837 8.32646 21.1739 2.91675 14.5003 2.91675Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.16113 22.6681C5.16113 22.6681 7.85451 19.2292 14.5003 19.2292C21.1462 19.2292 23.8408 22.6681 23.8408 22.6681M14.5003 15C15.4618 15 16.3838 14.6181 17.0636 13.9383C17.7434 13.2584 18.1253 12.3364 18.1253 11.375C18.1253 10.4136 17.7434 9.49156 17.0636 8.81174C16.3838 8.13192 15.4618 7.75 14.5003 7.75C13.5389 7.75 12.6169 8.13192 11.9371 8.81174C11.2573 9.49156 10.8753 10.4136 10.8753 11.375C10.8753 12.3364 11.2573 13.2584 11.9371 13.9383C12.6169 14.6181 13.5389 15 14.5003 15Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AccountSVG;