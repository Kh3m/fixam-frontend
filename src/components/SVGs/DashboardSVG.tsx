interface Props {
  color: string;
}

const DashboardSVG = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M1 2.5C1 2.23478 1.10536 1.98043 1.29289 1.79289C1.48043 1.60536 1.73478 1.5 2 1.5H6C6.26522 1.5 6.51957 1.60536 6.70711 1.79289C6.89464 1.98043 7 2.23478 7 2.5V7.5C7 7.76522 6.89464 8.01957 6.70711 8.20711C6.51957 8.39464 6.26522 8.5 6 8.5H2C1.73478 8.5 1.48043 8.39464 1.29289 8.20711C1.10536 8.01957 1 7.76522 1 7.5V2.5ZM11 2.5C11 2.23478 11.1054 1.98043 11.2929 1.79289C11.4804 1.60536 11.7348 1.5 12 1.5H16C16.2652 1.5 16.5196 1.60536 16.7071 1.79289C16.8946 1.98043 17 2.23478 17 2.5V4.5C17 4.76522 16.8946 5.01957 16.7071 5.20711C16.5196 5.39464 16.2652 5.5 16 5.5H12C11.7348 5.5 11.4804 5.39464 11.2929 5.20711C11.1054 5.01957 11 4.76522 11 4.5V2.5ZM1 13.5C1 13.2348 1.10536 12.9804 1.29289 12.7929C1.48043 12.6054 1.73478 12.5 2 12.5H6C6.26522 12.5 6.51957 12.6054 6.70711 12.7929C6.89464 12.9804 7 13.2348 7 13.5V16.5C7 16.7652 6.89464 17.0196 6.70711 17.2071C6.51957 17.3946 6.26522 17.5 6 17.5H2C1.73478 17.5 1.48043 17.3946 1.29289 17.2071C1.10536 17.0196 1 16.7652 1 16.5V13.5ZM11 10.5C11 10.2348 11.1054 9.98043 11.2929 9.79289C11.4804 9.60536 11.7348 9.5 12 9.5H16C16.2652 9.5 16.5196 9.60536 16.7071 9.79289C16.8946 9.98043 17 10.2348 17 10.5V16.5C17 16.7652 16.8946 17.0196 16.7071 17.2071C16.5196 17.3946 16.2652 17.5 16 17.5H12C11.7348 17.5 11.4804 17.3946 11.2929 17.2071C11.1054 17.0196 11 16.7652 11 16.5V10.5Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default DashboardSVG;
