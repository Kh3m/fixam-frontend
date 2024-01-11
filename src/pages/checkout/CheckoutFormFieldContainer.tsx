import { PropsWithChildren } from "react";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import MasterCardSVG from "../../components/SVGs/MasterCardSVG";
import PaypalSVG from "../../components/SVGs/PaypalSVG";
import VisaSVG from "../../components/SVGs/VisaSVG";
import Space from "../../components/Space";
import { Controller, useFormContext } from "react-hook-form";
import TapEffect from "../../components/TapEffect";

interface Props {
  heading: string;
  checkbox: {
    text: string;
    boxFor: string;
    checked?: boolean;
  };
  isPaymentMethod?: boolean;
  isLoading?: boolean;
  shouldRemoveCancel?: boolean;
  defaultCheckBoxValue?: boolean;
  handleCancel?: () => void;
}

const CheckoutFormFieldCard = ({
  children,
  checkbox,
  defaultCheckBoxValue,
  isPaymentMethod,
  shouldRemoveCancel,
  handleCancel,
  isLoading,
}: PropsWithChildren<Props>) => {
  const { control } = useFormContext();

  return (
    <section className={`${isPaymentMethod && "flex space-x-24"}`}>
      <div>
        {children}
        <Space spacing="my-4" />
        <Controller
          name={checkbox.boxFor}
          control={control}
          defaultValue={defaultCheckBoxValue}
          render={({ field }) => (
            <CheckBox checked={checkbox.checked} field={field} {...checkbox} />
          )}
        />

        <div className="my-4">
          <Button
            variant="elevated"
            styles="font-bold text-white bg-fyellow border border-fyellow mr-6"
            disabled={isLoading}
          >
            Submit
          </Button>
          {shouldRemoveCancel ? null : (
            <Button
              type="button"
              onClick={handleCancel}
              variant="outlined"
              styles="border border-fyellow font-bold"
            >
              Cancel
            </Button>
          )}
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
