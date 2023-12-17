import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useRef,
} from "react";

import imageUploadPlaceholder from "../../assets/images-upload-placeholder.png";
import bannerPlaceholder from "../../assets/banner-placeholder.jpg";
import { useFormContext } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isFull?: boolean;
  hint?: string;
}
const ImageUpload = forwardRef(
  (
    { label, isFull, hint, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const imageUploadRef = useRef(null);

    const { setValue, getValues } = useFormContext();
    const labelName = label.toLowerCase();
    const imageFile = getValues()[labelName];

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(labelName, e.target.files?.item(0));
    };

    return (
      <div className="flex flex-col space-y-2">
        <span>{label}</span>
        <label
          ref={imageUploadRef}
          htmlFor={label}
          className={`
        ${labelName === "banner" && "h-48"}
        ${labelName === "logo" && "h-32 w-32"}
            cursor-pointer p-2 text-fyellow font-bold text-2xl bg-fgrey rounded-lg flex justify-center items-center`}
        >
          <img
            src={
              imageFile
                ? URL.createObjectURL(imageFile)
                : labelName === "banner"
                ? bannerPlaceholder
                : imageUploadPlaceholder
            }
            alt="Image upload placeholder"
            className={`${
              imageFile ? "object-cover" : "object-contain"
            } w-full h-full`}
          />
          {/* <img
            src={
              labelName === "banner"
                ? bannerPlaceholder
                : imageUploadPlaceholder
            }
            alt="Image upload placeholder"
            className={`${
              imageFile ? "object-cover" : "object-contain"
            } w-full h-full`}
          /> */}
        </label>
        <div className={`${isFull ? "w-full" : "w-34"} hidden`}>
          <input
            {...props}
            ref={ref}
            onChange={handleImageChange}
            accept="/image"
            id={label}
          />
        </div>
        <span className="text-sm text-fgrey">{hint}</span>
      </div>
    );
  }
);

export default ImageUpload;
