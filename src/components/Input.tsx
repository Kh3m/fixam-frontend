import emailIcon from "../assets/email-icon.svg";
import { InputConfigType } from "../utils/types";

interface Props {
  withIcon?: boolean;
  config?: InputConfigType;
  isTextArea?: boolean;
}
const Input = ({ withIcon, isTextArea, config }: Props) => {
  return (
    <div className={`${!isTextArea && "h-10"} relative`}>
      {isTextArea ? (
        <textarea
          className="w-full outline resize-none  rounded-md px-4 py-2 h-20"
          {...config}
        ></textarea>
      ) : (
        <input
          className={`${
            withIcon ? "px-10" : "px-4"
          }  outline blur-0 rounded-md h-full text-gray-600 w-full`}
          {...config}
        />
      )}

      {withIcon && (
        <img
          src={emailIcon}
          alt="icon"
          className="h-4 w-4 absolute top-3 left-3"
        />
      )}
    </div>
  );
};

export default Input;
