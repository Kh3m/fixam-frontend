import Heading from "../../../components/Heading";
import product1 from "../../../assets/product_1.png";
import BorderCard from "../BorderCard";
import Button from "../../../components/Button";
import Space from "../../../components/Space";
import Select from "react-select";
import { goBack } from "../../../utils/history";
const OrderConfirmCancel = () => {
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
            <span className="text-sm font-medium ">
              To be delivered between Friday 10th and Tuesday 14th January
            </span>
          </div>
        </section>
        <Space spacing="my-6" />
        <div>
          <div className="flex space-x-4">
            <Select
              options={[
                {
                  label: "Give me reason pleas",
                  value: "Give me reason please",
                },
                {
                  label: "Give me reason pleas",
                  value: "Give me reason please",
                },
                {
                  label: "Give me reason pleas",
                  value: "Give me reason please",
                },
              ]}
              className="flex-grow"
              placeholder="--Select a Reason--"
            />
            <Button
              onClick={goBack}
              variant="elevated"
              styles="bg-fyellow-shades-500 text-white text-[10px] font-semibold w-28 whitespace-nowrap py-2
                  flex items-center justify-center"
              noSizingClass
            >
              Cancel Order
            </Button>
          </div>
          <Space spacing="mt-3 mb-6" />
          <span className="text-xs font-semibold">
            You will receive an email with details of your cancellation after
            you submit
          </span>
        </div>
      </BorderCard>
    </section>
  );
};

export default OrderConfirmCancel;
