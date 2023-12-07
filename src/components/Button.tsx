import { type ReactNode } from "react";

interface Props {
  variant?: "outlined" | "w-icon" | "elevated" | "text";
  color?: string;
  children: ReactNode;
  styles?: string;
  noSizingClass?: boolean;
  onClick?: () => void;
}
const Button = ({
  children,
  variant,
  styles,
  noSizingClass,
  onClick,
}: Props) => {
  const baseClass = "transition-color duration-500 rounded-[5px] ";

  const sizingClass = "px-[32px] py-[8px] text-[12px]";
  switch (variant) {
    /**
     * w-icon : Button with icon
     */
    case "outlined":
      return (
        <button
          onClick={onClick}
          className={` ${baseClass} ${sizingClass} border-2 border-white text-white`}
        >
          {children}
        </button>
      );
    case "elevated":
      return (
        <button
          onClick={onClick}
          className={` ${baseClass} ${!noSizingClass && sizingClass} ${styles}`}
        >
          {children}
        </button>
      );
    case "text":
      return (
        <button
          onClick={onClick}
          className={`${baseClass}  ${styles} font-semibold`}
        >
          {children}
        </button>
      );
    case "w-icon":
      return (
        <button
          onClick={onClick}
          className={` ${baseClass} py-2 px-6
          flex space-x-2 justify-center items-center
          hover:bg-pri-600  `}
        >
          {children}
        </button>
      );
    default:
      return (
        <button onClick={onClick} className={`${styles}`}>
          {children}
        </button>
      );
  }
};

export default Button;
