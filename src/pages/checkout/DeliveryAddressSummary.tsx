import BusSVG from "../../components/SVGs/BusSVG";
import Spinner from "../../components/Spinner";
import useAuth from "../../hooks/useAuth";
import useUserAddresses from "../../hooks/user/useUserAddresses";

const CheckoutSummary = () => {
  const { user } = useAuth();

  const { data: userAddresses, isLoading: isLoadingUserAddresses } =
    useUserAddresses(user?.id || "");

  if (isLoadingUserAddresses) {
    return (
      <div className="flex justify-center my-4">
        <Spinner />
      </div>
    );
  }
  if (userAddresses)
    return (
      <div className="flex justify-between">
        <div className="basis-1/2">
          <ul>
            <li className=" font-medium">
              {userAddresses[0].receiver_first_name}
            </li>
            <li className="text-black/80 font-medium">
              {userAddresses[0].receiver_phone_one}
            </li>
            <li className="text-black/80 font-medium">
              {userAddresses[0].street_address}
            </li>
          </ul>
        </div>
        <div className="basis-1/2 flex justify-end">
          <BusSVG />
        </div>
      </div>
    );
};

export default CheckoutSummary;
