import { FieldValues, FormProvider, useForm } from "react-hook-form";
import product1 from "../../../assets/product_1.png";
import Button from "../../../components/Button";
import FixamSelect from "../../../components/FixamSelect";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import { goBack } from "../../../utils/history";
import BorderCard from "../BorderCard";
import { default as BottomSpanMessage } from "./BottomSpanMessage";

const OrderConfirmCancel = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log("cancelationReason", data);
  };

  return (
    <section>
      <BorderCard>
        <section className="flex items-start space-x-5">
          <img
            src={product1}
            alt="Order Product Image"
            className="h-16 rounded-md"
          />
          <div>
            <div>
              <Heading variant="h4" styles="font-semibold">
                Turkish Royal Fabric Sofa
              </Heading>
              <span className="font-medium text-gray-700">QTY: 1</span>
            </div>
            <BottomSpanMessage>
              To be delivered between Friday 10th and Tuesday 14th January
            </BottomSpanMessage>
          </div>
        </section>
        <Space spacing="my-6" />
        <div>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-4">
              <FixamSelect
                name="cancelationReason"
                options={[
                  {
                    label: "Give me reason please",
                    value: "Give me reason please",
                  },
                  {
                    label: "Give me reason please",
                    value: "Give me reason please again",
                  },
                  {
                    label: "Give me reason please",
                    value: "Give me reason please again and again",
                  },
                ]}
                placeholder="--Select a Reason--"
              />
              <Button
                variant="elevated"
                styles="bg-fyellow-shades-500 text-white text-[10px] font-semibold w-28 whitespace-nowrap py-2
                    flex items-center justify-center"
                noSizingClass
              >
                Cancel Order
              </Button>
            </form>
          </FormProvider>
          <Space spacing="mt-3 mb-6" />
          <BottomSpanMessage>
            You will receive an email with details of your cancellation after
            you submit
          </BottomSpanMessage>
        </div>
      </BorderCard>
    </section>
  );
};

export default OrderConfirmCancel;
