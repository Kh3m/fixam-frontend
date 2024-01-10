import { userBaseURL } from "../../services/baseURLs";
import { UserAddressType, userAPIClient } from "../../services/user";
import { useQuery } from "@tanstack/react-query";

const useAddress = (addressId: string) =>
  useQuery({
    queryKey: ["users", "adresses", addressId],
    queryFn: () =>
      userAPIClient
        .get<UserAddressType>(`${userBaseURL}/users/adresses/${addressId}/`)
        .then((res) => res.data),
  });

export default useAddress;
