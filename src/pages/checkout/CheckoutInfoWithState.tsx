import { useState } from "react";
import Card from "../../components/Card";
import Space from "../../components/Space";
import CheckoutDeliveryAddress from "./CheckoutDeliveryAddress";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutPaymentInfo from "./CheckoutPaymentInfo";

interface Props {
  isPaymentMethod?: boolean;
  heading: string;
}
const CheckoutInformWithState = ({ isPaymentMethod, heading }: Props) => {
  const [changeDefault, setChangeDefault] = useState(false);

  const handleChangeDefault = () => {
    setChangeDefault(!changeDefault);
  };

  const handleCancel = () => {
    setChangeDefault(false);
  };

  return (
    <Card>
      <div className="px-4">
        <CheckoutHeader
          heading={heading}
          handleChangeDefault={handleChangeDefault}
          changeDefault={changeDefault}
        />
        {isPaymentMethod ? <Space spacing="my-2" /> : <Space spacing="my-6" />}
        {!isPaymentMethod && (
          <CheckoutDeliveryAddress
            handleCancel={handleCancel}
            changeDefault={changeDefault}
          />
        )}
        {isPaymentMethod && (
          <CheckoutPaymentInfo
            changeDefault={changeDefault}
            handleCancel={handleCancel}
          />
        )}
      </div>
    </Card>
  );
};

export default CheckoutInformWithState;
