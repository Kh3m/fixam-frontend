import { ButtonHTMLAttributes, type ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "w-icon" | "elevated" | "text" | "span";
  color?: string;
  children: ReactNode;
  styles?: string;
  noSizingClass?: boolean;
}
const Button = ({
  children,
  variant,
  styles,
  noSizingClass,
  ...props
}: Props) => {
  const baseClass =
    "transition-color duration-500 rounded-[5px] cursor-pointer ";

  const sizingClass = "px-[32px] py-[8px] text-[12px]";
  switch (variant) {
    /**
     * w-icon : Button with icon
     */
    case "outlined":
      return (
        <button
          {...props}
          className={` ${baseClass} ${sizingClass} ${
            styles ? `${styles}` : "border-white text-white"
          } border-2`}
        >
          {children}
        </button>
      );
    case "elevated":
      return (
        <button
          {...props}
          className={` ${baseClass} ${!noSizingClass && sizingClass} ${styles}`}
        >
          {children}
        </button>
      );
    case "text":
      return (
        <button {...props} className={`${baseClass}  ${styles} font-semibold`}>
          {children}
        </button>
      );
    case "w-icon":
      return (
        <button
          {...props}
          className={` ${baseClass} ${sizingClass}
          ${styles ? `${styles}` : ""}
          flex space-x-2 justify-center items-center
         `}
        >
          {children}
        </button>
      );
    case "span":
      return (
        <span
          {...props}
          className={` ${baseClass} ${!noSizingClass && sizingClass} ${styles}`}
        >
          {children}
        </span>
      );
    default:
      return (
        <button {...props} className={`${styles}`}>
          {children}
        </button>
      );
  }
};

export default Button;
