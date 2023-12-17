import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import { wordCountValidation } from "../../utils/validationRules";
import ImageUpload from "./ImageUpload";

interface Props {}

const BrandFields: FC<Props> = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col space-y-4 ">
      <Controller
        rules={{
          required: "Brand Name is required",
        }}
        control={control}
        name="storeName"
        render={({ field, fieldState }) => (
          <Input {...field} fieldState={fieldState} placeholder="Store Name" />
        )}
      />

      <Controller
        control={control}
        name="businessRCNumber"
        render={({ field }) => (
          <Input {...field} placeholder="Business RC Number" />
        )}
      />

      {/* <Controller
        rules={{
          required: "Slug is required to uniquely access your store",
        }}
        control={control}
        name="slug"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fieldState={fieldState}
            placeholder="Enter a unique name for accessing your store"
            type="url"
            customPlaceholder="fixam.africa/stores/"
          />
        )}
      /> */}

      <Controller
        control={control}
        name="logo"
        render={({}) => (
          <ImageUpload
            label="Logo"
            hint="Must be a png file, Max size of 5mb"
            placeholder="Upload a File"
            type="file"
            isFull
          />
        )}
      />

      <Controller
        control={control}
        name="banner"
        render={({}) => (
          <ImageUpload
            label="Banner"
            hint="Must be a png file, Max size of 5mb"
            placeholder="Choose a banner"
            type="file"
          />
        )}
      />

      <Controller
        rules={{
          required: "In 50-250 words tell us about your store",
          validate: wordCountValidation,
        }}
        control={control}
        name="description"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fieldState={fieldState}
            placeholder="Provide description about this store here..."
            name="description"
            isTextArea
          />
        )}
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
