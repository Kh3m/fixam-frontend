import { useMutation } from "@tanstack/react-query";
import { cartBaseURL } from "../../services/baseURLs";
import { APIClient } from "../../services/apiClient";

type CartType = {
  user_id: string;
};

const cartService = new APIClient<CartCreateResponseType, CartType>(
  `${cartBaseURL}/carts/`
);

type CartCreateResponseType = {
  id: string;
  user_id: string;
};

type CartContextType = {
  previousCart: CartType;
};

const useCreateCart = () => {
  return useMutation<CartCreateResponseType, Error, CartType, CartContextType>({
    mutationKey: ["carts"],
    mutationFn: cartService.post,
  });
};

export default useCreateCart;
