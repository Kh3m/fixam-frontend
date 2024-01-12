import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import BorderCard from "../BorderCard";
import { UserAddressType } from "../../../services/user";
import { dummyApiClient } from "../../../services/apiClient";
import { userBaseURL } from "../../../services/baseURLs";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const VerticalSeperator = () => (
  <div className="h-full w-[2px] rounded-sm bg-fyellow-shades-500"></div>
);

interface Props {
  address: UserAddressType;
}

const AccountAddressSummary = ({ address }: Props) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteAddress = async (addressId: string) => {
    setIsDeleting(true);

    try {
      const deletedAddress = await dummyApiClient.delete(
        `${userBaseURL}/users/adresses/${addressId}/`
      );

      console.log("DELETED", deletedAddress);
      if (deletedAddress.status == 204) setIsDeleted(true);

      queryClient.invalidateQueries({
        queryKey: ["users", user?.id, "addresses"],
      });

      setIsDeleting(false);
    } catch (error) {
      console.log("DELETING ADDRESS ERROR", error);
      setIsDeleting(false);
    }
  };

  return (
    <BorderCard styles="my-2">
      <Heading variant="h4" styles="inline-block font-semibold">
        {address.receiver_first_name},
      </Heading>
      <span className="font-medium">
        {address.receiver_phone_one} , {address.receiver_phone_two}
      </span>
      <div className="font-medium">abdulkareem150@gmail.com</div>
      <Space spacing="my-4" />
      <address className="text-gray-500 font-semibold">
        <p>{address.street_address}</p>
        <p>
          {address.city}, {address.state}
        </p>
        <p>
          {address.country}, {address.zip_code}
        </p>
      </address>

      <div className="flex items-center space-x-5 h-5 mb-2 mt-8">
        <Link
          to={`/users/account/addresses/edit`}
          state={{ addressId: address.id }}
        >
          <Button styles="text-fyellow-shades-500 font-semibold text-sm">
            Edit
          </Button>
        </Link>
        <VerticalSeperator />
        <Button
          styles="text-fyellow-shades-500 font-semibold text-sm"
          onClick={() => handleDeleteAddress(address.id!)}
          disabled={isDeleting}
        >
          Delete
        </Button>
        <VerticalSeperator />
        <Button
          disabled={address.is_default}
          styles="text-fyellow-shades-500 font-semibold text-sm"
          onClick={async () => {
            await dummyApiClient.patch(
              `${userBaseURL}/users/adresses/${address.id}/`,
              { is_default: true }
            );

            queryClient.invalidateQueries({
              queryKey: ["users", user?.id, "addresses"],
            });
          }}
        >
          Set as Default
        </Button>
      </div>
    </BorderCard>
  );
};

export default AccountAddressSummary;
