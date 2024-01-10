import { userBaseURL } from "../../services/baseURLs";
import { UserAddressType, userAPIClient } from "../../services/user";
import { useQuery } from "@tanstack/react-query";

const useUserAddresses = (userId: string) =>
  useQuery({
    // TODO: Fix Query Key
    queryKey: ["users", userId, "adresses"],
    queryFn: () =>
      userAPIClient
        .get<UserAddressType[]>(`${userBaseURL}/users/adresses/`)
        .then((res) => res.data),
  });

export default useUserAddresses;
