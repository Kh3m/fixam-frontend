import { PropsWithChildren } from "react";

interface Props {
  styles?: string;
  handleAddNewAddress?: () => void;
}

const BorderCard = ({
  children,
  styles,
  handleAddNewAddress,
}: PropsWithChildren<Props>) => {
  return (
    <div
      onClick={handleAddNewAddress}
      className={`${styles} rounded-md p-4 border border-gray-200`}
    >
      {children}
    </div>
  );
};

export default BorderCard;
