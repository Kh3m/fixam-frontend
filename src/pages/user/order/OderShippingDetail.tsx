import Space from "../../../components/Space";
import Spinner from "../../../components/Spinner";
import useAddress from "../../../hooks/user/useAddress";
import useUser from "../../../hooks/user/useUser";
import HeadingWithBorderBottom from "./HeadingWithBorderBottom";
import OrderDetailList from "./OrderDetailList";

interface Props {
  userId: string;
  deliveryAddressId: string;
}
const OderShippingDetail = ({ userId, deliveryAddressId }: Props) => {
  const { data: userData, isLoading: isLoadingUser } = useUser(userId);
  const { data: address, isLoading: isLoadingAddress } =
    useAddress(deliveryAddressId);

  if (isLoadingAddress || isLoadingUser) return <Spinner />;
  if (userData && address)
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
            { label: "", value: userData.first_name },
            { label: "", value: address.street_address },
            { label: "", value: address.state },
            { label: "", value: address.country + ", " + address.zip_code },
          ]}
        />
      </section>
    );
};

export default OderShippingDetail;
