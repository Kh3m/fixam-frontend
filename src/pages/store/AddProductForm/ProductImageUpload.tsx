import { Controller, useFormContext } from "react-hook-form";
import ImageUpload from "../ImageUpload";
import FormFieldCard from "./FormFieldCard";

const ProductImageUpload = () => {
  const { control } = useFormContext();
  return (
    <FormFieldCard title="Upload product photos">
      <div className="flex space-x-8 justify-center items-center">
        <Controller
          control={control}
          name="selectimage1"
          render={() => <ImageUpload label="Select Image 1" styledLabel />}
        />
        <Controller
          control={control}
          name="selectimage2"
          render={() => <ImageUpload label="Select Image 2" styledLabel />}
        />
        <Controller
          control={control}
          name="selectimage3"
          render={() => <ImageUpload label="Select Image 3" styledLabel />}
        />
        <Controller
          control={control}
          name="selectimage4"
          render={() => <ImageUpload label="Select Image 4" styledLabel />}
        />
      </div>

      <div className="my-2 text-fgrey text-sm">
        <p>Maximum image size 10mb</p>
        <p>Must have a Resolution of (1000x800)px</p>
        <p>Must be either jpeg,png or webp</p>
        <p>Maximum images to be uploaded (5)</p>
      </div>
    </FormFieldCard>
  );
};

export default ProductImageUpload;
