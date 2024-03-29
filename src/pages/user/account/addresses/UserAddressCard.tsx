import { useState } from "react";
import { MdEdit } from "react-icons/md";
import Button from "../../../../components/Button";
import Space from "../../../../components/Space";
import { UserAddressType } from "../../../../services/user";
import DeliveryAddressForm from "./DeliveryAddressForm";

interface Props {
  userAddress: UserAddressType;
  index: number;
  handleUseAddress: (addressId: string) => void;
}

const UserAddressCard = ({ userAddress, handleUseAddress }: Props) => {
  const [openAddAddressForEdit, setOpenAddAddressForEdit] = useState(false);

  return (
    <div>
      <div className="flex border-b border-gray-300 py-4">
        <ul className="basis-1/2 flex-grow">
          <li className=" font-medium">{userAddress.receiver_first_name}</li>
          <li className="dark:text-gray-300 text-black/80 font-medium">
            {userAddress.receiver_phone_one}
          </li>
          <li className="dark:text-gray-300 text-black/80 font-medium">
            {userAddress.street_address}
          </li>
          <li className="dark:text-gray-300 text-black/80 font-medium">
            {userAddress.zip_code}
          </li>
        </ul>
        <div
          className={`${
            userAddress.is_default ? "justify-between" : "justify-end"
          } basis-1/2 flex flex-col items-end`}
        >
          {userAddress.is_default && (
            <div className="border border-gray-400 text-gray-400 text-xs px-1 rounded-sm">
              DEFAULT ADDRESS
            </div>
          )}
          <div className="flex items-center space-x-2">
            {!userAddress.isUse && (
              <Button
                variant="text"
                styles="text-gray-400"
                onClick={
                  () => handleUseAddress(userAddress.id!)
                  //   async () => {
                  //   await dummyApiClient.patch(
                  //     `${userBaseURL}/users/adresses/${userAddress.id}/`,
                  //     { is_default: true }
                  //   );

                  //   queryClient.invalidateQueries({
                  //     queryKey: ["users", user?.id, "addresses"],
                  //   });
                  // }
                }
              >
                <span>Use Address</span>
              </Button>
            )}
            <Button
              onClick={() => setOpenAddAddressForEdit(true)}
              variant="text"
              styles="text-fyellow-shades-500 flex items-center space-x-1"
            >
              <span>Edit</span>
              <MdEdit />
            </Button>
          </div>
        </div>
      </div>
      <Space spacing="my-4" />
      {openAddAddressForEdit && (
        <DeliveryAddressForm
          inSamePage
          address={userAddress}
          handleCloseDeliveryAddressForm={() => setOpenAddAddressForEdit(false)}
          handleCancel={() => setOpenAddAddressForEdit(false)}
        />
      )}
    </div>
  );
};

export default UserAddressCard;
