import { useQuery } from "@tanstack/react-query";
import productService from "../../services/product";

const useProducts = (productId: string) =>
  useQuery({
    queryKey: [productId],
    queryFn: () => productService.fetch(productId),
  });

export default useProducts;
