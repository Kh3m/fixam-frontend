import { PropsWithChildren } from "react";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import FormFieldCard from "../store/AddProductForm/FormFieldCard";
import Space from "../../components/Space";
import { IoCardSharp } from "react-icons/io5";
import RadioButton from "../../components/RadioButton";
import VisaSVG from "../../components/SVGs/VisaSVG";
import MasterCardSVG from "../../components/SVGs/MasterCardSVG";
import PaypalSVG from "../../components/SVGs/PaypalSVG";

interface Props {
  heading: string;
  checkbox: {
    text: string;
    boxFor: string;
  };
  isPaymentMethod?: boolean;
  handleCancel: () => void;
}

const CheckoutFormFieldCard = ({
  children,
  checkbox,
  isPaymentMethod,
  handleCancel,
}: PropsWithChildren<Props>) => {
  return (
    <section className={`${isPaymentMethod && "flex space-x-24"}`}>
      <div>
        {children}
        <Space spacing="my-4" />
        <CheckBox {...checkbox} />
        <div className="my-4">
          <Button
            variant="elevated"
            styles="font-bold text-white bg-fyellow border border-fyellow mr-6"
          >
            Submit
          </Button>
          <Button
            onClick={handleCancel}
            variant="outlined"
            styles="border border-fyellow font-bold"
          >
            Cancel
          </Button>
        </div>
      </div>
      {isPaymentMethod && (
        <div className="flex space-x-1 my-10 pr-12">
          <VisaSVG />
          <MasterCardSVG />
          <PaypalSVG />
        </div>
      )}
    </section>
  );
};

export default CheckoutFormFieldCard;
