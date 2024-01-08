import { userAPIClient } from "../../services/user";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "../../services/user";

const useUser = (userId: string) =>
  useQuery({
    queryKey: ["users", userId],
    queryFn: () =>
      userAPIClient.get<UserType[]>(`/${userId}/`).then((res) => res.data),
  });

export default useUser;
