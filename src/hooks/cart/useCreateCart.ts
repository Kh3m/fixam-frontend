import { useMutation } from "@tanstack/react-query";
import { DummyAPIClient } from "../../services/apiClient";
import { cartBaseURL } from "../../services/baseURLs";

type CartType = {
  user_id: string;
};

const cartService = new DummyAPIClient<CartCreateResponseType, CartType>(
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
