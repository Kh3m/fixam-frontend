import { useQuery } from "@tanstack/react-query";
import { userAddressService } from "../../services/user";

const useAddress = (addressId: string) =>
  useQuery({
    queryKey: ["users", "adresses", addressId],
    queryFn: () => userAddressService.fetch(addressId),
  });

export default useAddress;
