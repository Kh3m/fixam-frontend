import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { ControllerFieldState } from "react-hook-form";
import { FaCheck } from "react-icons/fa6";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  boxFor: string;
  fieldState?: ControllerFieldState;
}

const CheckBox = forwardRef(
  (
    { text, boxFor, fieldState, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className="group inline-flex cursor-pointer text-sm font-medium align-middle relative pl-[30px] items-center">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          name={boxFor}
          className="hidden peer"
        />
        <span
          className="peer-checked:text-fyellow absolute left-[2px] font-bold 
          transition duration-400 peer-checked:scale-100 scale-0"
        >
          <FaCheck size={12} />
        </span>
        <span
          className={`${
            fieldState?.invalid ? "border-red-400" : "border-fgrey"
          } w-4 h-4 rounded-sm border-2 absolute left-0 transition duration-300 
        peer-checked:border-fyellow`}
        ></span>
        <span
          className={`${
            fieldState?.invalid ? "text-red-400" : "text-gray-800"
          } dark:text-white peer-checked:text-fyellow user-select-none`}
        >
          {text}
        </span>
      </label>
    );
  }
);

export default CheckBox;
