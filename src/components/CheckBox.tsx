interface Props {
  text: string;
  boxFor: string;
}

const CheckBox = ({ text, boxFor }: Props) => {
  return (
    <label className="group inline-flex cursor-pointer text-sm font-medium align-middle relative pl-[30px] items-center">
      <input type="checkbox" name={boxFor} className="hidden peer" />
      <span className="dark:text-white text-gray-800 peer-checked:text-fyellow">
        {text}
      </span>
      <span
        className="w-4 h-4 rounded-sm border-2 border-fgrey absolute left-0 transition duration-300 
        peer-checked:border-fyellow"
      ></span>
    </label>
  );
};

export default CheckBox;
