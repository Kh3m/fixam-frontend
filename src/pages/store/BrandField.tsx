import { Controller, useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import ImageUpload from "./ImageUpload";

interface Props {}

const BrandFields: React.FC<Props> = () => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col space-y-4 ">
      <Controller
        control={control}
        name="storeName"
        render={({ field }) => (
          <Input {...field} config={{ placeholder: "Store Name" }} />
        )}
      />

      <Controller
        control={control}
        name="businessRCNumber"
        render={({ field }) => (
          <Input {...field} placeholder="Business RC Number" />
        )}
      />

      <Controller
        control={control}
        name="slug"
        render={({ field }) => (
          <Input
            {...field}
            placeholder="fixam.africa.com/stores/{slug}"
            type="url"
          />
        )}
      />

      <Controller
        control={control}
        name="logo"
        render={({ field }) => (
          <ImageUpload
            {...field}
            label="Logo"
            hint="Must be a png file, Max size of 5mb"
            config={{
              placeholder: "Upload a File",
              type: "file",
              name: "logo",
            }}
            isFull
          />
        )}
      />

      <Controller
        control={control}
        name="banner"
        render={({ field }) => (
          <ImageUpload
            {...field}
            label="Banner"
            hint="Must be a png file, Max size of 5mb"
            config={{
              multiple: true,
              placeholder: "Choose a banner",
              type: "file",
              name: "banner",
            }}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <Input
            {...field}
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
