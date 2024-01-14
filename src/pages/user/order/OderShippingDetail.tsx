import Space from "../../../components/Space";
import Spinner from "../../../components/Spinner";
import useAddress from "../../../hooks/user/useAddress";
import HeadingWithBorderBottom from "./HeadingWithBorderBottom";
import OrderDetailList from "./OrderDetailList";

interface Props {
  deliveryAddressId: string;
}
const OderShippingDetail = ({ deliveryAddressId }: Props) => {
  const { data: address, isLoading: isLoadingAddress } =
    useAddress(deliveryAddressId);

  if (isLoadingAddress) return <Spinner />;
  if (address)
    return (
      <section>
        <Space spacing="my-6" />
        <HeadingWithBorderBottom heading="Shipping Details" />
        <OrderDetailList
          items={[{ label: "Shipping Method: ", value: "Door Delivery" }]}
        />
        <Space spacing="my-6" />
        <span className="text-sm font-semibold my-1">Shipping Address:</span>

        <OrderDetailList
          items={[
            {
              label: "",
              value:
                address.receiver_first_name + " " + address.receiver_last_name,
            },
            { label: "", value: address.street_address },
            { label: "", value: address.state },
            { label: "", value: address.country + ", " + address.zip_code },
          ]}
        />
      </section>
    );
};

export default OderShippingDetail;
