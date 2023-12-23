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
}

const CheckoutFormFieldCard = ({
  heading,
  children,
  checkbox,
  isPaymentMethod,
}: PropsWithChildren<Props>) => {
  return (
    <FormFieldCard title={heading} isBold>
      <section className={`${isPaymentMethod && "flex space-x-24"}`}>
        <div>
          {isPaymentMethod && (
            <div className="flex items-center space-x-2">
              <RadioButton text="" radioFor="add-payment-method" />
              <IoCardSharp size={24} />
              <span>Add new card</span>
            </div>
          )}
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
            <Button variant="outlined" styles="border border-fyellow font-bold">
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
    </FormFieldCard>
  );
};

export default CheckoutFormFieldCard;
