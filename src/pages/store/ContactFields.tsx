import Input from "../../components/Input";

const ContactFields = () => {
  return (
    <div className="flex flex-col space-y-4 ">
      <Input config={{ placeholder: "First Name" }} />
      <Input config={{ placeholder: "Last Name" }} />
      <Input config={{ placeholder: "Phone Name", type: "phone" }} />
      <Input isTextArea />
    </div>
  );
};

export default ContactFields;
