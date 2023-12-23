import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useRef,
} from "react";

import imageUploadPlaceholder from "../../assets/images-upload-placeholder.png";
import imagePlaceholder from "../../assets/image-placeholder.png";
import bannerPlaceholder from "../../assets/banner-placeholder.jpg";
import { useFormContext } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isFull?: boolean;
  hint?: string;
  styledLabel?: boolean;
}
const ImageUpload = forwardRef(
  (
    { label, styledLabel, isFull, hint, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const imageUploadRef = useRef(null);

    const { setValue, getValues } = useFormContext();

    //  Remove space from label name
    const labelName = label.toLowerCase().split(" ").join("");
    const imageFile = getValues()[labelName];

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      // Use the labelName to set the control name -> Hence the names has to be equal
      setValue(labelName, e.target.files?.item(0));
    };

    return (
      <div className="flex flex-col space-y-2">
        <span
          className={`${
            styledLabel &&
            "bg-fgrey inline-flex justify-center items-center rounded-md py-2 px-4 text-white font-semibold text-xs"
          }`}
        >
          {label}
        </span>
        <label
          ref={imageUploadRef}
          htmlFor={label}
          className={`
          ${
            styledLabel &&
            " text-center bg-fgrey inline-flex justify-center items-center"
          }
          ${labelName === "banner" && "h-48"}
          ${labelName === "logo" && "h-32 w-32"}
          ${labelName.includes("selectimage") && "h-36 w-36"}
            cursor-pointer p-2 text-fyellow font-bold text-2xl bg-gray-300 rounded-lg flex justify-center items-center`}
        >
          <img
            src={
              imageFile
                ? URL.createObjectURL(imageFile)
                : labelName === "banner"
                ? bannerPlaceholder
                : styledLabel
                ? imagePlaceholder
                : imageUploadPlaceholder
            }
            alt="Image upload placeholder"
            className={`${
              imageFile ? "object-cover" : "object-contain"
            } w-full h-full `}
          />
        </label>
        <div className={`${isFull ? "w-full" : "w-34"} hidden`}>
          <input
            {...props}
            ref={ref}
            onChange={handleImageChange}
            accept="/image"
            id={label}
            type="file"
          />
        </div>
        <span className="text-sm text-fgrey">{hint}</span>
      </div>
    );
  }
);

export default ImageUpload;
