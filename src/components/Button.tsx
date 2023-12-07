import { type ReactNode } from "react";

interface Props {
  variant?: "outlined" | "w-icon" | "elevated" | "text";
  color?: string;
  children: ReactNode;
  styles?: string;
  noSizingClass?: boolean;
}
const Button = ({ children, variant, styles, noSizingClass }: Props) => {
  const baseClass = "transition-color duration-500 rounded-[5px] ";

  const sizingClass = "px-[32px] py-[8px] text-[12px]";
  switch (variant) {
    /**
     * w-icon : Button with icon
     */
    case "outlined":
      return (
        <button
          className={` ${baseClass} ${sizingClass} border-2 border-white text-white`}
        >
          {children}
        </button>
      );
    case "elevated":
      return (
        <button
          className={` ${baseClass} ${!noSizingClass && sizingClass} ${styles}`}
        >
          {children}
        </button>
      );
    case "text":
      return (
        <button
          className={` ${baseClass} p-2 text-white text-base font-semibold`}
        >
          {children}
        </button>
      );
    case "w-icon":
      return (
        <button
          className={` ${baseClass} py-2 px-6
          flex space-x-2 justify-center items-center
          hover:bg-pri-600  `}
        >
          {children}
        </button>
      );
    default:
      return (
        <button className={` ${baseClass} py-2 px-6 hover:bg-pri-600`}>
          {children}
        </button>
      );
  }
};

export default Button;
