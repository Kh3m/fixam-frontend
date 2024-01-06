import ActionMenu from "../../../components/Menu/ActionMenu";
import profilePhoto from "../../../assets/khem/khem-review.jpg";
import BorderCard from "../../user/BorderCard";

interface Props {
  name: string;
  email: string;
  role: string;
  phone: string;
}

const Member = ({ name, email, role, phone }: Props) => {
  return (
    <BorderCard styles="flex my-2 items-center space-x-2 justify-between">
      <div className="flex items-center space-x-3 basis-[50%]">
        <img
          src={profilePhoto}
          alt="Profile"
          className=" h-12 w-12 rounded-full bg-cover
              border-fyellow-shades-200 border-2"
        />
        <div className="flex flex-col -space-y-1">
          <span className="font-medium my-0">{name}</span>
          <span className="text-sm text-gray-400 my-0">{email}</span>
        </div>
      </div>

      <div className="flex flex-col -space-y-1 basis-[20%]">
        <span className="font-medium my-0">{role}</span>
        <span className="text-sm text-gray-400 my-0">{phone}</span>
      </div>
      <ActionMenu actions={[{ label: "Delete" }]} />
    </BorderCard>
  );
};

export default Member;
