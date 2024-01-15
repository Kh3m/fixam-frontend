import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/user";

const useUser = (userId: string) => {
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => userService.fetch(userId),
    enabled: !!userId,
  });
};

export default useUser;
