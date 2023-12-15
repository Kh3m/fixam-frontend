import Input from "../../components/Input";
import ImageUpload from "./ImageUpload";

const BrandFields = () => {
  return (
    <div className="flex flex-col space-y-4 ">
      <Input config={{ placeholder: "Store Name" }} />
      <Input config={{ placeholder: "Business RC Number" }} />
      <Input config={{ placeholder: "Website URL", type: "url" }} />
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
    </div>
  );
};

export default BrandFields;
