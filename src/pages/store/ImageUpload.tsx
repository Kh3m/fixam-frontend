import { ChangeEvent, ForwardedRef, forwardRef, useRef, useState } from "react";
import { InputConfigType } from "../../utils/types";

import imageUploadPlaceholder from "../../assets/images-upload-placeholder.png";
import bannerPlaceholder from "../../assets/banner-placeholder.jpg";

interface Props {
  label: string;
  config?: InputConfigType;
  isFull?: boolean;
  hint?: string;
}
const ImageUpload = forwardRef(
  (
    { label, isFull, hint, config }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const imageUploadRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.item(0) || null;
      setSelectedImage(file);
    };

    const labelName = label.toLowerCase();

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
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : labelName === "banner"
                ? bannerPlaceholder
                : imageUploadPlaceholder
            }
            alt="Image upload placeholder"
            className={`${
              selectedImage ? "object-cover" : "object-contain"
            } w-full h-full`}
          />
        </label>
        <div className={`${isFull ? "w-full" : "w-34"} hidden`}>
          <input
            ref={ref}
            onChange={handleImageChange}
            accept="/image"
            {...config}
            id={label}
          />
        </div>
        <span className="text-sm text-fgrey">{hint}</span>
      </div>
    );
  }
);

export default ImageUpload;
