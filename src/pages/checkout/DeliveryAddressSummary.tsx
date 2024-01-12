import BusSVG from "../../components/SVGs/BusSVG";
import { UserAddressType } from "../../services/user";
import Button from "../../components/Button";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Space from "../../components/Space";
import DeliveryAddressForm from "../user/account/addresses/DeliveryAddressForm";
import UserAddressCard from "../user/account/addresses/UserAddressCard";

interface Props {
  userAddresses: UserAddressType[];
  changeDefault?: boolean;
}

const CheckoutSummary = ({ userAddresses, changeDefault }: Props) => {
  const [openAddAddress, setOpenAddAddress] = useState(false);

  const defautlUserAddress = userAddresses.find(
    (address) => address.is_default
  );

  console.log("DEFAULT ADDRESS", defautlUserAddress);

  // const defautlUserAddress = userAddresses[0];

  if (userAddresses && !userAddresses.length) {
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

  if (defautlUserAddress && !changeDefault)
    return (
      <div className="flex justify-between">
        <ul className="basis-1/2 flex-grow">
          <li className=" font-medium">
            {defautlUserAddress.receiver_first_name}
          </li>
          <li className="text-black/80 font-medium">
            {defautlUserAddress.receiver_phone_one}
          </li>
          <li className="text-black/80 font-medium">
            {defautlUserAddress.street_address}
          </li>
          <li className="text-black/80 font-medium">
            {defautlUserAddress.zip_code}
          </li>
        </ul>

        <BusSVG color="#FF9900" />
      </div>
    );

  if (changeDefault) {
    return (
      <>
        {userAddresses.map((address, index) => (
          <UserAddressCard
            key={address.id}
            userAddress={address}
            index={index}
          />
        ))}

        <Space spacing="my-6" />
        {userAddresses.length < 3 && (
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

        {openAddAddress && userAddresses.length < 3 && (
          <DeliveryAddressForm handleCancel={() => setOpenAddAddress(false)} />
        )}
      </>
    );
  }
};

export default CheckoutSummary;
