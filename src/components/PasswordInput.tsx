import {
  ForwardedRef,
  Fragment,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
  useState,
} from "react";

import { Controller, Control, FieldValues } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

type CommonProps = {
  hint?: string;
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
    { hint, name, defaultInputValue, control, rules, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
      <div className="relative">
        <Controller
          name={name}
          defaultValue={defaultInputValue}
          rules={rules}
          control={control}
          render={({ fieldState, field }) => (
            <Fragment>
              <input
                type={showPassword ? "text" : "password"}
                {...field}
                ref={ref as ForwardedRef<HTMLInputElement>}
                className={`
                ${
                  fieldState?.invalid
                    ? "border-red-400 border-2"
                    : "border-[#c1c1c1]"
                }
               pl-4 pr-11
                py-2 outline-1 border outline-slate-700 blur-0 rounded-md h-full
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
        <span
          onClick={handleShowPassword}
          className="absolute top-[15px] right-5 text-gray-400"
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </span>
      </div>
    );
  }
);

export default Input;
