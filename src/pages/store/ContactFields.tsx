import { FC } from "react";
import { useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import { validateGeneralInternationalPhoneNumber } from "../../utils/validationRules";

interface Props {}

const ContactFields: FC<Props> = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col space-y-4 ">
      <Input
        rules={{
          required: "First Name is required",
          minLength: { value: 3, message: "Should be atleast 3 characters" },
        }}
        control={control}
        name="firstName"
        placeholder="First Name"
      />

      <Input
        rules={{
          required: "Last Name is required",
          minLength: { value: 3, message: "Should be atleast 3 characters" },
        }}
        control={control}
        name="lastName"
        placeholder="Last Name"
      />

      <Input
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
        placeholder="Email Address"
        type="email"
      />

      <Input
        rules={{
          required: "Phone number is required",
          validate: validateGeneralInternationalPhoneNumber,
          minLength: { value: 6, message: "Should be atleast 6 characters" },
        }}
        control={control}
        name="phone"
        placeholder="Phone Number"
        type="phone"
      />

      <Input
        rules={{
          required: "Physical address is required",
          minLength: { value: 10, message: "Should be atleast 10 characters" },
        }}
        control={control}
        name="address"
        placeholder="Address"
        isTextArea
      />
    </div>
  );
};

export default ContactFields;
