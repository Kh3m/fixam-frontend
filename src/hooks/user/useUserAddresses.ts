import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import { userBaseURL } from "../../services/baseURLs";
import { UserAddressType } from "../../services/user";

const useUserAddresses = (userId: string) =>
  useQuery({
    queryKey: ["users", userId, "addresses"],
    queryFn: () =>
      apiClient
        .get<UserAddressType[]>(`${userBaseURL}/users/${userId}/addresses/`)
        .then((res) => res.data),
  });

export default useUserAddresses;
