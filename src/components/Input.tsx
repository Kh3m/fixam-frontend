import {
  ForwardedRef,
  Fragment,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import { Controller, Control, FieldValues } from "react-hook-form";

type CommonProps = {
  Icon?: ReactNode;
  iconRight?: boolean;
  isTextArea?: boolean;
  hint?: string;
  customPlaceholder?: string;
  control: Control<FieldValues>;
  name: string;
  // TODO: Fix appropriate type
  rules?: any;
  defaultInputValue?: string;
};

type MyInputProps = CommonProps & InputHTMLAttributes<HTMLInputElement>;

type MyTextareaProps = CommonProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = MyInputProps | MyTextareaProps;

const Input = forwardRef(
  (
    {
      Icon,
      iconRight,
      isTextArea,
      customPlaceholder,
      hint,
      name,
      defaultInputValue,
      control,
      rules,
      ...props
    }: Props,
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
          <Controller
            name={name}
            defaultValue={defaultInputValue}
            control={control}
            rules={rules}
            render={({ fieldState, field }) => {
              return (
                <Fragment>
                  <textarea
                    {...field}
                    name={name}
                    ref={ref as ForwardedRef<HTMLTextAreaElement>}
                    className={`${
                      fieldState?.invalid
                        ? "border-red-400 border-2"
                        : "border-[#c1c1c1]"
                    } 
              w-full resize-none text-gray-600 rounded-md px-4 py-2 h-20 
              outline-1 border blur-0  focus:outline-fyellow`}
                    {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                  ></textarea>
                  <p
                    className={`${
                      fieldState?.invalid ? "text-red-400" : "text-fgrey"
                    } text-sm`}
                  >
                    {fieldState?.invalid ? fieldState?.error?.message : hint}
                  </p>
                </Fragment>
              );
            }}
          />
        ) : (
          <Controller
            name={name}
            defaultValue={defaultInputValue}
            rules={rules}
            control={control}
            render={({ fieldState, field }) => (
              <Fragment>
                <input
                  {...field}
                  style={{
                    paddingLeft:
                      paddingLeft !== undefined ? `${paddingLeft}px` : "16px",
                  }}
                  ref={ref as ForwardedRef<HTMLInputElement>}
                  className={`
              ${
                fieldState?.invalid
                  ? "border-red-400 border-2"
                  : "border-[#c1c1c1]"
              }
              ${customPlaceholder && ""}
              ${
                !Icon ? "px-4" : iconRight ? "pr-11" : "pl-11"
              } py-2 outline-1 border outline-slate-700 blur-0 rounded-md h-full
              text-gray-600 w-full focus:outline-fyellow`}
                  {...(props as InputHTMLAttributes<HTMLInputElement>)}
                />
                <p
                  className={`${
                    fieldState?.invalid ? "text-red-400" : "text-fgrey"
                  } text-sm`}
                >
                  {fieldState?.invalid ? fieldState?.error?.message : hint}
                </p>
              </Fragment>
            )}
          />
        )}
        <span className="absolute top-[50%] -translate-y-[50%] right-5 text-gray-400">
          {Icon}
        </span>
        {customPlaceholder && (
          <div
            ref={targetElementRef}
            className="h-5 rounded-sm text-gray-800 bg-fgrey px-2 py-4 flex items-center absolute top-[5.5px] left-1"
          >
            {customPlaceholder}
          </div>
        )}
      </div>
    );
  }
);

export default Input;
