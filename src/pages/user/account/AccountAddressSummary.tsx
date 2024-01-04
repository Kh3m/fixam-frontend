import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import BorderCard from "../BorderCard";

const VerticalSeperator = () => (
  <div className="h-full w-[2px] rounded-sm bg-fyellow-shades-500"></div>
);

const AccountAddressSummary = () => {
  return (
    <BorderCard>
      <Heading variant="h4" styles="inline-block font-semibold">
        Abdul Kareem,
      </Heading>
      <span className="font-medium">+234 8131 9156</span>
      <div className="font-medium">abdulkareem150@gmail.com</div>
      <Space spacing="my-4" />
      <address className="text-gray-500 font-semibold">
        <p>No.23 crescent close, opposite H Medix</p>
        <p>1st Avenue, Gwarinpa.</p>
        <p>FCT Abuja</p>
      </address>

      <div className="flex items-center space-x-5 h-5 mb-2 mt-8">
        <Button styles="text-fyellow-shades-500 font-semibold text-sm">
          Edit
        </Button>
        <VerticalSeperator />
        <Button styles="text-fyellow-shades-500 font-semibold text-sm">
          Delete
        </Button>
        <VerticalSeperator />
        <Button styles="text-fyellow-shades-500 font-semibold text-sm">
          Set as Default
        </Button>
      </div>
    </BorderCard>
  );
};

export default AccountAddressSummary;
