import { type ReactNode } from "react";

interface Props {
  variant?: "outlined" | "w-icon" | "elevated" | "text";
  color?: string;
  children: ReactNode;
}
const Button = ({ children, variant }: Props) => {
  const baseClass = "transition-color duration-500 rounded-md ";

  const btnClass = "px-[45px] py-[12px] text-[12px]";
  switch (variant) {
    /**
     * w-icon : Button with icon
     */
    case "outlined":
      return (
        <button
          className={` ${baseClass} ${btnClass} border-[3px] text-white border-white`}
        >
          {children}
        </button>
      );
    case "elevated":
      return (
        <button
          className={` ${baseClass} ${btnClass} bg-white text-fyellow border-[3px] border-white`}
        >
          {children}
        </button>
      );
    case "text":
      return (
        <button
          className={` ${baseClass} p-10 text-white text-base font-semibold`}
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
