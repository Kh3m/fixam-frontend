import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import { wordCountValidation } from "../../utils/validationRules";
import ImageUpload from "./ImageUpload";

interface Props {}

const BrandFields: FC<Props> = () => {
  const { control, setValue } = useFormContext();

  return (
    <div className="flex flex-col space-y-4 ">
      <Input
        rules={{
          required: "Brand Name is required",
        }}
        control={control}
        name="storeName"
        placeholder="Store Name"
      />

      <Input
        control={control}
        name="businessRCNumber"
        placeholder="Business RC Number"
      />

      <Controller
        control={control}
        name="logo"
        render={({ fieldState }) => (
          <ImageUpload
            fieldState={fieldState}
            label="Logo"
            hint="Must be a png file, Max size of 5mb"
            placeholder="Upload a File"
            isFull
            onUpload={(image) => setValue("logo", image)}
          />
        )}
      />

      <Controller
        control={control}
        name="banner"
        render={({ fieldState }) => (
          <ImageUpload
            fieldState={fieldState}
            label="Banner"
            hint="Must be a png file, Max size of 5mb"
            placeholder="Choose a banner"
            onUpload={(image) => setValue("banner", image)}
          />
        )}
      />

      <Input
        rules={{
          required: "In 50-250 words tell us about your store",
          validate: wordCountValidation,
        }}
        control={control}
        name="description"
        placeholder="Provide description about this store here..."
        isTextArea
      />

      {/*       
      <Input config={{ placeholder: "Store Name" }} />
      <Input config={{ placeholder: "Business RC Number" }} />
      <Input
        config={{
          placeholder: "fixam.africa.com/stores/{slug}",
          type: "url",
        }}
      />
      <ImageUpload
        label="Logo"
        hint="Must be a png file, Max size of 5mb"
        config={{
          placeholder: "Upload a File",
          type: "file",
          name: "logo",
        }}
        isFull
      />
      <ImageUpload
        label="Banner"
        hint="Must be a png file, Max size of 5mb"
        config={{
          multiple: true,
          placeholder: "Choose a banner",
          type: "file",
          name: "banners[]",
        }}
        isFull
      />
      <Input
        config={{
          placeholder: "Provide description about this store here...",
          name: "description",
        }}
        isTextArea
      /> */}
    </div>
  );
};

export default BrandFields;
