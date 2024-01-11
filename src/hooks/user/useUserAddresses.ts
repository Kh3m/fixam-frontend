import { userBaseURL } from "../../services/baseURLs";
import { UserAddressType, userAPIClient } from "../../services/user";
import { useQuery } from "@tanstack/react-query";

const useUserAddresses = (userId: string) =>
  useQuery({
    queryKey: ["users", userId, "addresses"],
    queryFn: () =>
      userAPIClient
        .get<UserAddressType[]>(`${userBaseURL}/users/${userId}/addresses/`)
        .then((res) => res.data),
  });

export default useUserAddresses;
