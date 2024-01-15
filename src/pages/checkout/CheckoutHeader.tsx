import Button from "../../components/Button";
import Heading from "../../components/Heading";

interface Props {
  heading: string;
  handleChangeDefault?: () => void;
  changeDefault?: boolean;
}
const CheckoutHeader = ({
  heading,
  handleChangeDefault,
  changeDefault,
}: Props) => {
  return (
    <div className="flex justify-between">
      <Heading variant="h4" styles="font-semibold text-[24px]">
        {heading}
      </Heading>
      <Button
        onClick={handleChangeDefault}
        variant="text"
        styles="font-semibold text-slate-600 text-base dark:text-gray-400"
      >
        {!heading.includes("PAYMENT") ? (
          changeDefault ? (
            <span className="h-1 w-4 rounded-md inline-block bg-slate-600"></span>
          ) : (
            "Change"
          )
        ) : null}
      </Button>
    </div>
  );
};

export default CheckoutHeader;
