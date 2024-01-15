import { useQuery } from "@tanstack/react-query";
import productService from "../../services/product";

const useProduct = (productId: string) =>
  useQuery({
    queryKey: ["products", productId],
    queryFn: () => productService.fetch(productId),
    enabled: !!productId,
  });

export default useProduct;
