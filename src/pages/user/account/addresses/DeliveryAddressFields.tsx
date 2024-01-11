import { useFormContext } from "react-hook-form";
import Input from "../../../../components/Input";
import Space from "../../../../components/Space";
import CheckoutFormFieldContainer from "../../../checkout/CheckoutFormFieldContainer";
import { UserAddressType } from "../../../../services/user";
import { validateGeneralInternationalPhoneNumber } from "../../../../utils/validationRules";

interface Props {
  handleCancel?: () => void;
  isLoading?: boolean;
  shouldRemoveCancel?: boolean;
  address?: UserAddressType;
}

const CustomerDeliveryAddressFields = ({
  handleCancel,
  shouldRemoveCancel,
  isLoading,
  address,
}: Props) => {
  const { control } = useFormContext();

  return (
    <section>
      <CheckoutFormFieldContainer
        checkbox={{
          text: "use as my default address",
          boxFor: "is_default",
        }}
        defaultCheckBoxValue={address ? address.is_default : false}
        heading="DELIVERY ADDRESS"
        handleCancel={handleCancel}
        isLoading={isLoading}
        shouldRemoveCancel={shouldRemoveCancel}
      >
        {/* TODO: Fix duplicate */}

        <div className="flex space-x-10">
          <div className="w-1/2">
            <Input
              name="receiver_first_name"
              defaultInputValue={address ? address.receiver_first_name : ""}
              rules={{
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "Should be atleast 3 characters",
                },
              }}
              control={control}
              placeholder="First Name"
            />
          </div>
          <div className="w-1/2">
            <Input
              name="receiver_last_name"
              defaultInputValue={address ? address.receiver_last_name : ""}
              rules={{
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Should be atleast 3 characters",
                },
              }}
              control={control}
              placeholder="Last Name"
            />
          </div>
        </div>
        <Space spacing="my-4" />
        <div className="flex space-x-10">
          <div className="w-1/2">
            <Input
              name="receiver_phone_one"
              defaultInputValue={address ? address.receiver_phone_one : ""}
              rules={{
                required:
                  "Please provide a valid phone number for order updates and delivery notifications.",
                minLength: {
                  value: 3,
                  message: "Should be atleast 3 characters",
                },
                validate: validateGeneralInternationalPhoneNumber,
              }}
              control={control}
              placeholder="Phone Number 1"
              type="tel"
            />
          </div>
          <div className="w-1/2">
            <Input
              name="receiver_phone_two"
              defaultInputValue={address ? address.receiver_phone_two : ""}
              rules={{}}
              control={control}
              placeholder="Phone Number 2"
              type="tel"
            />
          </div>
        </div>
        <Space spacing="my-4" />
        <Input
          name="street_address"
          defaultInputValue={address ? address.street_address : ""}
          rules={{
            required:
              "Please enter a valid delivery address for accurate shipment and successful delivery of your order.",
            minLength: {
              value: 10,
              message: "Should be atleast 10 characters",
            },
          }}
          control={control}
          placeholder="Delivery address"
          type="address"
        />
        {/* <Space spacing="my-4" />
        <Input
          name=""
          rules={{}}
          control={control}
          placeholder="Apt, Unit, Suite etc."
          type="address"
        /> */}
        <Space spacing="my-4" />
        <div className="flex space-x-10">
          <div className="w-1/3">
            <Input
              name="city"
              defaultInputValue={address ? address.city : ""}
              rules={{}}
              control={control}
              placeholder="City"
            />
          </div>
          <div className="w-1/3">
            <Input
              name="zip_code"
              defaultInputValue={address ? address.zip_code : ""}
              rules={{}}
              control={control}
              placeholder="ZipCode"
            />
          </div>
          <div className="w-1/3">
            <Input
              name="state"
              defaultInputValue={address ? address.state : ""}
              rules={{}}
              control={control}
              placeholder="State"
            />
          </div>
        </div>
      </CheckoutFormFieldContainer>
    </section>
  );
};

export default CustomerDeliveryAddressFields;
