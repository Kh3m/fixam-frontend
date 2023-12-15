import { InputConfigType } from "../../utils/types";

interface Props {
  label: string;
  config?: InputConfigType;
  isFull?: boolean;
  hint?: string;
}
const ImageUpload = ({ label, isFull, hint, config }: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <span>{label}</span>
      <label
        htmlFor={label}
        className="
            cursor-pointer p-5 text-fyellow font-bold text-2xl bg-fgrey rounded-lg flex justify-center items-center"
      >
        +
      </label>
      <div className={`${isFull ? "w-full" : "w-34"}`}>
        <input accept="/image" {...config} id={label} />
      </div>
      <span className="text-sm text-fgrey">{hint}</span>
    </div>
  );
};

export default ImageUpload;
