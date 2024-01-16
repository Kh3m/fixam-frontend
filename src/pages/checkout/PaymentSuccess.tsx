import { useEffect, useState } from "react";
import OrderSuccessful from "./OrderSuccessful";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Center from "../../components/Center";
import apiClient from "../../services/apiClient";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [isConfirmingPayment, setIsConfirmingPayment] = useState(false);

  useEffect(() => {
    setIsConfirmingPayment(true);
    const confirmPayment = async () => {
      const paymentInfo = {
        trx_ref: searchParams.get("trxref"),
        order_id: searchParams.get("o_id"),
        payment_status: "Complete",
      };

      try {
        await apiClient.patch(
          `/payments/paystack/confirm_payment`,
          paymentInfo
        );
        setIsConfirmingPayment(false);
      } catch (error) {
        console.log("Error confirming payment", error);
        setIsConfirmingPayment(false);
      }
    };

    confirmPayment();
  }, [isConfirmingPayment]);
  return (
    <section>
      {isConfirmingPayment ? (
        <OrderSuccessful />
      ) : (
        <Center>
          <Spinner />
        </Center>
      )}
    </section>
  );
};

export default PaymentSuccess;
