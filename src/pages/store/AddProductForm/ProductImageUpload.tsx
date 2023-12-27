// import { Controller, useFormContext } from "react-hook-form";
// import ImageUpload from "../ImageUpload";
// import FormFieldCard from "./FormFieldCard";
// import { validateImage } from "../../../utils/validationRules";
// import { useState } from "react";

// const ProductImageUpload = () => {
//   const [Ifield, setField] = useState();

//   const { control } = useFormContext();
//   return (
//     <FormFieldCard title="Upload product photos">
//       <div className="flex space-x-8 justify-center items-center">
//         <Controller
//           control={control}
//           name="selectimage1"
//           rules={{
//             required: { value: true, message: "Image is required" },
//             validate: validateImage,
//           }}
//           render={({ fieldState, field }) => {
//             console.log("fieldState, field", fieldState, field);
//             return (
//               <ImageUpload
//                 label="Select Image 1"
//                 styledLabel
//                 fieldState={fieldState}
//               />
//             );
//           }}
//         />
//         <Controller
//           control={control}
//           rules={{
//             required: { value: true, message: "Image is required" },
//             validate: validateImage,
//           }}
//           name="selectimage2"
//           render={({ fieldState }) => (
//             <ImageUpload
//               label="Select Image 2"
//               styledLabel
//               fieldState={fieldState}
//             />
//           )}
//         />
//         <Controller
//           control={control}
//           rules={{
//             required: { value: true, message: "Image is required" },
//             validate: validateImage,
//           }}
//           name="selectimage3"
//           render={({ fieldState }) => (
//             <ImageUpload
//               label="Select Image 3"
//               styledLabel
//               fieldState={fieldState}
//             />
//           )}
//         />
//         <Controller
//           control={control}
//           rules={{
//             required: { value: true, message: "Image is required" },
//             validate: validateImage,
//           }}
//           name="selectimage4"
//           render={({ fieldState }) => (
//             <ImageUpload
//               label="Select Image 4"
//               styledLabel
//               fieldState={fieldState}
//             />
//           )}
//         />
//       </div>

//       <div className="my-2 text-fgrey text-sm">
//         <p>Maximum image size 5mb</p>
//         <p>Must have a Resolution of (1000x800)px</p>
//         <p>Must be either jpeg, png or webp</p>
//       </div>
//     </FormFieldCard>
//   );
// };

// export default ProductImageUpload;

import { Controller, useFormContext } from "react-hook-form";
import ImageUpload from "../ImageUpload";
import FormFieldCard from "./FormFieldCard";
import { validateImage } from "../../../utils/validationRules";
import { useEffect, useState } from "react";

// ... (other imports)

const ProductImageUpload = () => {
  const { control, setValue, trigger, setError } = useFormContext();
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { getValues } = useFormContext();

  const isImageAlreadyUploaded = (image: File) => {
    return uploadedImages.some((uploadedImage) => {
      return (
        uploadedImage.name === image.name &&
        uploadedImage.size === image.size &&
        uploadedImage.type === image.type
      );
    });
  };

  // const isImageAlreadyUploaded = (image: File, currentValues) => {
  //   return currentValues.uploadedImages?.some((uploadedImage) => {
  //     return (
  //       uploadedImage.name === image.name &&
  //       uploadedImage.size === image.size &&
  //       uploadedImage.type === image.type
  //     );
  //   });
  // };

  const handleImageUpload = async (imageFieldName: string, image: File) => {
    // Get the current values from the useForm context
    const currentValues = getValues();

    console.log("currentValues", currentValues);

    // Check if the current image has already been uploaded
    if (isImageAlreadyUploaded(image)) {
      const error = "Image has already been uploaded";
      setErrorMessage(error);
      setError(imageFieldName, { type: "manual", message: error });
      // Trigger an error if the same image is uploaded more than once
      await trigger(imageFieldName, { shouldFocus: true });
      return;
    }

    setErrorMessage(null);
    const newUploadedImages = [...uploadedImages, image];
    setUploadedImages(newUploadedImages);
    setValue(imageFieldName, image);
  };

  return (
    <FormFieldCard title="Upload product photos">
      <div className="flex space-x-8 justify-center items-center">
        {[1, 2, 3, 4].map((index) => (
          <Controller
            key={index}
            control={control}
            name={`selectimage${index}`}
            rules={{
              required: { value: true, message: "Image is required" },
              validate: validateImage,
            }}
            render={({ fieldState }) => (
              <ImageUpload
                label={`Select Image ${index}`}
                styledLabel
                fieldState={fieldState}
                errorMessage={errorMessage} // Pass the errorMessage as a prop
                onUpload={(image) =>
                  handleImageUpload(`selectimage${index}`, image)
                }
              />
            )}
          />
        ))}
      </div>

      <div className="my-2 text-fgrey text-sm">
        <p>Maximum image size 5mb</p>
        <p>Must have a Resolution of (1000x800)px</p>
        <p>Must be either jpeg, png, or webp</p>
      </div>
    </FormFieldCard>
  );
};

export default ProductImageUpload;
