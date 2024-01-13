import { useQuery } from "@tanstack/react-query";
import { productVariantsService } from "../../services/product";

const useVariantsForProduct = (productId: string) =>
  useQuery({
    queryKey: ["products", productId, "variants"],
    queryFn: productVariantsService.fetchAll,
  });

export default useVariantsForProduct;
