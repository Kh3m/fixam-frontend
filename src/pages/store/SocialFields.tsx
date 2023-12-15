import Input from "../../components/Input";

const SocialFields = () => {
  return (
    <div className="flex flex-col space-y-4 ">
      <Input
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
      />
    </div>
  );
};

export default SocialFields;
