import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Input from "../../components/Input";

interface Props {}

const ContactFields: FC<Props> = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col space-y-4 ">
      <Controller
        rules={{
          required: "First Name is required",
          minLength: { value: 3, message: "Should be atleast 3 characters" },
        }}
        control={control}
        name="firstName"
        render={({ field, fieldState }) => (
          <Input {...field} fieldState={fieldState} placeholder="First Name" />
        )}
      />
      <Controller
        rules={{
          required: "Last Name is required",
          minLength: { value: 3, message: "Should be atleast 3 characters" },
        }}
        control={control}
        name="lastName"
        render={({ field, fieldState }) => (
          <Input {...field} fieldState={fieldState} placeholder="Last Name" />
        )}
      />
      <Controller
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:
              "yourname@domain, e.g info@khemshield.com or khem6333@gmail.com",
          },
        }}
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fieldState={fieldState}
            placeholder="Email Address"
            type="email"
          />
        )}
      />
      <Controller
        rules={{
          required: "Phone number is required",
          minLength: { value: 6, message: "Should be atleast 6 characters" },
        }}
        control={control}
        name="phone"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fieldState={fieldState}
            placeholder="Phone Number"
            type="phone"
          />
        )}
      />
      <Controller
        rules={{
          required: "Physical address is required",
          minLength: { value: 10, message: "Should be atleast 10 characters" },
        }}
        control={control}
        name="address"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fieldState={fieldState}
            placeholder="Address"
            isTextArea
          />
        )}
      />
    </div>
  );
};

export default ContactFields;
