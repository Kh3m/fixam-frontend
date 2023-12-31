interface Props {
  color: string;
}

const WishListSVG = ({ color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill={color}
    >
      <path
        d="M13.13 20.3379L13 20.4687L12.857 20.3379C6.682 14.7008 2.6 10.9733 2.6 7.19346C2.6 4.57766 4.55 2.6158 7.15 2.6158C9.152 2.6158 11.102 3.92371 11.791 5.70245H14.209C14.898 3.92371 16.848 2.6158 18.85 2.6158C21.45 2.6158 23.4 4.57766 23.4 7.19346C23.4 10.9733 19.318 14.7008 13.13 20.3379ZM18.85 0C16.588 0 14.417 1.0594 13 2.72044C11.583 1.0594 9.412 0 7.15 0C3.146 0 0 3.15204 0 7.19346C0 12.1243 4.42 16.1657 11.115 22.2736L13 24L14.885 22.2736C21.58 16.1657 26 12.1243 26 7.19346C26 3.15204 22.854 0 18.85 0Z"
        fill={color}
      />
    </svg>
  );
};

export default WishListSVG;