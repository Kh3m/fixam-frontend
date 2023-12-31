import { FC } from "react";
import Input from "../../components/Input";
import { Controller, useFormContext } from "react-hook-form";
import CheckBox from "../../components/CheckBox";

interface Props {}

const SocialFields: FC<Props> = () => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col space-y-4 ">
      <Input
        control={control}
        name="facebookLink"
        placeholder="Facebook Link"
      />

      <Input control={control} name="igLink" placeholder="Instagram Link" />

      <Input control={control} name="xLink" placeholder="X Link" />

      <Controller
        rules={{
          required: "Agree to the terms.",
        }}
        defaultValue={false}
        control={control}
        name="agreement"
        render={({ field, fieldState }) => (
          <CheckBox
            {...field}
            fieldState={fieldState}
            text="I have read and agree with the website terms and conditions"
            boxFor="accept_terms_condition"
          />
        )}
      />

      {/* <Input
        config={{
          placeholder: "Facebook Link",
          name: "facebookLink",
          type: "url",
        }}
      />
      <Input
        config={{
          placeholder: "Instagram Link",
          name: "igLink",
          type: "url",
        }}
      />
      <Input
        config={{
          placeholder: "X Link",
          name: "xLink",
          type: "url",
        }}
      /> */}
    </div>
  );
};

export default SocialFields;
