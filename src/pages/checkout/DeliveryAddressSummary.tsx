import BusSVG from "../../components/SVGs/BusSVG";
import { UserAddressType } from "../../services/user";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Space from "../../components/Space";
import DeliveryAddressForm from "../user/account/addresses/DeliveryAddressForm";
import UserAddressCard from "../user/account/addresses/UserAddressCard";
import { useCheckoutContext } from "../../contexts/checkout-context";

interface Props {
  userAddresses: UserAddressType[];
  changeDefault?: boolean;
  setChangeDefault: (defaultAddr: boolean) => void;
}

const CheckoutSummary = ({
  userAddresses,
  changeDefault,
  setChangeDefault,
}: Props) => {
  const [openAddAddress, setOpenAddAddress] = useState(false);
  const [addresses, setAddresses] = useState<UserAddressType[]>(userAddresses);

  const { setAddressId } = useCheckoutContext();

  const handleUseAddress = (addressId: string) => {
    setAddressId(addressId);
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) => ({
        ...address,
        // is_default: address.id === addressId ? true : false,
        isUse: address.id === addressId ? true : false,
      }))
    );
    setChangeDefault(false);
  };

  // Get the ID of the address the user wants to use
  const useAddressId = addresses.find((address) => address.isUse)?.id;

  useEffect(() => {
    // Set the use address to the default address when component mounts
    setAddresses(
      userAddresses.map((address) => ({
        ...address,
        isUse: address.is_default,
      }))
    );
    if (useAddressId) setAddressId(useAddressId);
  }, [userAddresses]);

  const defautlUserAddress = addresses.find((address) => address.isUse);

  if (addresses && !addresses.length) {
    return (
      <div className="flex justify-between">
        <div className="grow">
          <ul>
            <li className=" font-medium ">
              Permit me to say you have no address setup yet!
            </li>
            <li className="text-sm text-black/80 font-medium">
              <span>Change that by clicking on</span>
              <span className="font-bold ml-1">Change</span>
            </li>
          </ul>
        </div>
        <div className="basis-1/3 flex justify-end">
          <BusSVG />
        </div>
      </div>
    );
  }

  // Address to show on the summary when it's closed
  if (defautlUserAddress && !changeDefault)
    return (
      <div className="flex justify-between ">
        <ul className="basis-1/2 flex-grow ">
          <li className=" font-medium">
            {defautlUserAddress.receiver_first_name}
          </li>
          <li className="dark:text-gray-300 text-black/80 font-medium">
            {defautlUserAddress.receiver_phone_one}
          </li>
          <li className="dark:text-gray-300 text-black/80 font-medium">
            {defautlUserAddress.street_address}
          </li>
          <li className="dark:text-gray-300 text-black/80 font-medium">
            {defautlUserAddress.zip_code}
          </li>
        </ul>

        <BusSVG color="#FF9900" />
      </div>
    );

  if (changeDefault) {
    return (
      <>
        {addresses.map((address, index) => (
          <UserAddressCard
            handleUseAddress={handleUseAddress}
            key={address.id}
            userAddress={address}
            index={index}
          />
        ))}

        <Space spacing="my-6" />
        {addresses.length < 3 && (
          <Button
            onClick={() => setOpenAddAddress(true)}
            variant="text"
            styles="text-fyellow-shades-500 flex items-center space-x-2 "
          >
            <FaPlus />
            <span>ADD ADDRESS</span>
          </Button>
        )}
        <Space spacing="my-6" />

        {openAddAddress && addresses.length < 3 && (
          <DeliveryAddressForm handleCancel={() => setOpenAddAddress(false)} />
        )}
      </>
    );
  }
};

export default CheckoutSummary;
