import { ChangeEvent, PropsWithChildren } from "react";

interface Props {
  text?: string;
  checked?: boolean;
  value?: string;
  radioFor: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({
  text,
  radioFor,
  value,
  checked,
  onChange,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <label className="group inline-flex cursor-pointer text-sm font-medium align-middle relative pl-[30px] items-center">
      <input
        type="radio"
        checked={checked}
        name={radioFor}
        value={value}
        onChange={onChange}
        className="hidden peer/radio"
      />
      <span className="dark:text-white text-gray-800 peer-checked/radio:text-fyellow user-select-none">
        {text ? text : children}
      </span>
      <span
        className="w-4 h-4 rounded-full border-2 border-fgrey absolute left-0
        after:content-[''] after:w-[70%] after:h-[70%] after:rounded-full after:absolute
        after:bg-fgrey after:block after:top-[50%] after:left-[50%] 
        after:-translate-x-[50%] after:-translate-y-[50%] after:scale-0
        after:transition after:duration-300 
        peer-checked/radio:after:scale-100 peer-checked/radio:after:bg-fyellow peer-checked/radio:border-fyellow
        "
      ></span>
    </label>
  );
};

export default RadioButton;
