import { FieldValues, FormProvider, useForm } from "react-hook-form";
import product1 from "../../../assets/product_1.png";
import Button from "../../../components/Button";
import FixamSelect from "../../../components/FixamSelect";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import BorderCard from "../BorderCard";
import { default as BottomSpanMessage } from "./BottomSpanMessage";
import { useLocation, useParams } from "react-router-dom";
import useProduct from "../../../hooks/products/useProduct";
import Spinner from "../../../components/Spinner";
import Center from "../../../components/Center";
import { orderBaseURL } from "../../../services/baseURLs";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { goBack } from "../../../utils/history";
import apiClient from "../../../services/apiClient";

const OrderConfirmCancel = () => {
  const {
    state: { productId, itemQuantity },
  } = useLocation();
  const methods = useForm();
  const queryClient = useQueryClient();

  const { handleSubmit } = methods;

  const { orderId: itemId } = useParams<{ orderId: string }>();
  const [isLoading, setIsLoading] = useState(false);

  const { data: product, isLoading: isLoadingProduct } = useProduct(productId);

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      await apiClient.post(
        `${orderBaseURL}/orders/${itemId}/orderitem/cancel`,
        data
      );

      queryClient.invalidateQueries({ queryKey: ["products", productId] });
      goBack();
      setIsLoading(false);
    } catch (error) {
      console.log("Something went wrong canceling order", error);
      setIsLoading(false);
    }
  };

  if (isLoadingProduct)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (product)
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
                  {product?.name}
                </Heading>
                <span className="font-medium text-gray-700">
                  QTY: {itemQuantity}
                </span>
              </div>
              <BottomSpanMessage>
                To be delivered between Friday 10th and Tuesday 14th January
              </BottomSpanMessage>
            </div>
          </section>
          <Space spacing="my-6" />
          <div>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex space-x-4"
              >
                <FixamSelect
                  name="order_item_cancel_reason"
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
                  disabled={isLoading}
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
