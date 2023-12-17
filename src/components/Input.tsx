import {
  ForwardedRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import emailIcon from "../assets/email-icon.svg";

import { ControllerFieldState } from "react-hook-form";

type CommonProps = {
  withIcon?: boolean;
  isTextArea?: boolean;
  fieldState?: ControllerFieldState;
  customPlaceholder?: string;
};

type MyInputProps = CommonProps & InputHTMLAttributes<HTMLInputElement>;

type MyTextareaProps = CommonProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = MyInputProps | MyTextareaProps;

const Input = forwardRef(
  (
    { withIcon, isTextArea, fieldState, customPlaceholder, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const targetElementRef = useRef<HTMLDivElement>(null);
    const [paddingLeft, setPaddingLeft] = useState<number | undefined>(
      undefined
    );

    useEffect(() => {
      const updatePaddingLeft = () => {
        if (targetElementRef.current) {
          const elementWidth =
            targetElementRef.current.getBoundingClientRect().width;
          const calculatedPaddingLeft = elementWidth + 10;
          setPaddingLeft(calculatedPaddingLeft);
        }
      };
      updatePaddingLeft();

      window.addEventListener("resize", updatePaddingLeft);

      return () => {
        window.removeEventListener("resize", updatePaddingLeft);
      };
    }, []);

    return (
      <div className={`relative`}>
        {isTextArea ? (
          <textarea
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
            className={`${fieldState?.invalid ? "border-red-400 border-4" : ""} 
            w-full outline resize-none text-gray-600 rounded-md px-4 py-2 h-20 outline-1 border blur-0 `}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          ></textarea>
        ) : (
          <input
            style={{
              paddingLeft:
                paddingLeft !== undefined ? `${paddingLeft}px` : "16px",
            }}
            ref={ref as ForwardedRef<HTMLInputElement>}
            className={`
            ${fieldState?.invalid ? "border-red-400 border-2" : ""}
            ${customPlaceholder && ""}
            ${
              withIcon ? "px-11" : "px-4"
            } py-2 outline-1 border outline-slate-700 blur-0 rounded-md h-full text-gray-600 w-full `}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        <p className="text-red-400">{fieldState?.error?.message}</p>
        {customPlaceholder && (
          <div
            ref={targetElementRef}
            className="h-5 rounded-sm text-gray-800 bg-fgrey px-2 py-4 flex items-center absolute top-[5.5px] left-1"
          >
            {customPlaceholder}
          </div>
        )}
        {withIcon && (
          <img
            src={emailIcon}
            alt="icon"
            className="h-5 w-5 absolute top-[10px] left-3"
          />
        )}
      </div>
    );
  }
);

export default Input;
