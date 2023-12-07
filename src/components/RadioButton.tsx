interface Props {
  text: string;
  radioFor: string;
}

const RadioButton = ({ text, radioFor }: Props) => {
  return (
    <label className="group inline-flex cursor-pointer text-sm font-medium align-middle relative pl-[30px] items-center">
      <input type="radio" name={radioFor} className="hidden peer/radio" />
      <span className="text-gray-800 peer-checked/radio:text-fyellow">
        {text}
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
