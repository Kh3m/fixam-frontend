import Button from "../../../components/Button";
import Space from "../../../components/Space";
import StorePageTitle from "../StorePageTitle";
import Member from "./Member";

const StoreMembers = () => {
  return (
    <section>
      <StorePageTitle title="Members" />
      <Space spacing=" my-6" />
      <form className="flex space-x-4">
        <input
          className="border-2 border-gray-400 w-full rounded-md 
        outline-fyellow-shades-500 px-2 py-1 text-sm"
          placeholder="Enter a member's email to invite"
        />
        <Button
          variant="elevated"
          styles="bg-fyellow-shades-500 text-white text-[10px] font-semibold w-28 whitespace-nowrap py-2
                    flex items-center justify-center"
          noSizingClass
        >
          Invite
        </Button>
      </form>
      <Space spacing=" my-6" />
      <Member
        name="Sir. IK"
        email="sirik@gmail.com"
        role="Owner"
        phone="+234 7062528242"
      />
      <Member
        name="Abdulkareem Adamu"
        email="abdulkareemadamu150@gmail.com"
        role="Member"
        phone="+234 8131915694"
      />
      <Member
        name="Alex Cheta Alex"
        email="alexcheta@gmail.com"
        role="Member"
        phone="+234 816559924"
      />
    </section>
  );
};

export default StoreMembers;
