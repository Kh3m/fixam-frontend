import useDarkMode from "../../hooks/useDarkMode";

const Mic = () => {
  const { isDarkMode } = useDarkMode();
  const tempStopColor = isDarkMode ? "#202020" : "#FF6900";
  const tempOffsetStopColor = isDarkMode ? "#202020" : "#FF6900";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="20"
      viewBox="0 0 13 25"
      fill="none"
    >
      <path
        d="M6.10581 14.6512C5.35009 14.6512 4.62531 14.291 4.09094 13.6499C3.55656 13.0088 3.25635 12.1392 3.25635 11.2326V3.41861C3.25635 2.96967 3.33005 2.52513 3.47325 2.11036C3.61645 1.6956 3.82634 1.31874 4.09094 1.00129C4.35553 0.68384 4.66966 0.432027 5.01537 0.260226C5.36108 0.088425 5.73161 0 6.10581 0C6.48001 0 6.85054 0.088425 7.19625 0.260226C7.54196 0.432027 7.85609 0.68384 8.12069 1.00129C8.38528 1.31874 8.59517 1.6956 8.73837 2.11036C8.88157 2.52513 8.95527 2.96967 8.95527 3.41861V11.2326C8.95527 12.1392 8.65506 13.0088 8.12069 13.6499C7.58631 14.291 6.86153 14.6512 6.10581 14.6512Z"
        fill="url(#paint0_linear_2002_448)"
      />
      <path
        d="M10.5837 7.81396V11.2326C10.5837 14.1941 8.57444 16.6047 6.10599 16.6047C3.63754 16.6047 1.62826 14.1941 1.62826 11.2326V7.81396H0V11.2326C0 14.9403 2.30969 18.0053 5.29186 18.4849V22.4652H2.4424V24.4186H9.76958V22.4652H6.92012V18.4849C9.90229 18.0053 12.212 14.9403 12.212 11.2326V7.81396H10.5837Z"
        fill="url(#paint1_linear_2002_448)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2002_448"
          x1="2.59878"
          y1="9.63894"
          x2="20.2216"
          y2="9.63894"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={tempStopColor} />
          <stop offset="0.898204" stopColor="#FF6900" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2002_448"
          x1="-1.40907"
          y1="18.7381"
          x2="36.3541"
          y2="18.7381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={tempStopColor} />
          <stop offset="0.898204" stopColor={tempOffsetStopColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Mic;
