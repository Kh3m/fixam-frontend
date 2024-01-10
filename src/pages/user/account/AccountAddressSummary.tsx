import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";
import BorderCard from "../BorderCard";
import { UserAddressType } from "../../../services/user";

const VerticalSeperator = () => (
  <div className="h-full w-[2px] rounded-sm bg-fyellow-shades-500"></div>
);

interface Props {
  address: UserAddressType;
}

const AccountAddressSummary = ({ address }: Props) => {
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
        <Button styles="text-fyellow-shades-500 font-semibold text-sm">
          Delete
        </Button>
        <VerticalSeperator />
        <Button styles="text-fyellow-shades-500 font-semibold text-sm">
          Set as Default
        </Button>
      </div>
    </BorderCard>
  );
};

export default AccountAddressSummary;
