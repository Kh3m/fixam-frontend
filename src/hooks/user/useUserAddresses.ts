import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import { UserAddressType } from "../../services/user";

const useUserAddresses = (userId: string) =>
  useQuery({
    queryKey: ["users", userId, "addresses"],
    queryFn: () =>
      apiClient
        .get<UserAddressType[]>(`/users/${userId}/addresses/`)
        .then((res) => res.data),
    enabled: !!userId,
  });

export default useUserAddresses;
