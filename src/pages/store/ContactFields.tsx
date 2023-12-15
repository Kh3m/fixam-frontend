import { Controller, useFormContext } from "react-hook-form";
import Input from "../../components/Input";

interface ContactDetailsFormProps {}

const ContactFields = ({}: ContactDetailsFormProps) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col space-y-4 ">
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <Input {...field} config={{ placeholder: "First Name" }} />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field }) => <Input {...field} placeholder="Last Name" />}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <Input {...field} placeholder="Phone Number" type="phone" />
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({ field }) => (
          <Input {...field} placeholder="Address" isTextArea />
        )}
      />
    </div>
  );
};

export default ContactFields;
