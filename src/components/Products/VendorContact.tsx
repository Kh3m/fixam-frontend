import Button from "../Button";
import Space from "../Space";

const VendorContact = () => {
  return (
    <div className="dark:text-white text-center text-base">
      <h3 className="">The Kings Furniture</h3>
      <Space spacing="my-3" />
      <div className="text-fgrey">
        <p className="text-xs">
          Olive Plaza, Banex, Alexandria Cres, opposite MRS Filling Station,
          FCT-Abuja
        </p>
        <p className="text-xs">1 yr 6 m on Fixam</p>
      </div>
      <Space spacing="my-3" />
      <div className="font-bold">
        <Button variant="elevated" styles="bg-fyellow text-white w-full">
          Show contact
        </Button>
        <Space spacing="my-3" />
        <Button variant="outlined" styles="text-fyellow border-fyellow w-full">
          Start chat
        </Button>
      </div>
    </div>
  );
};

export default VendorContact;
