import { useQuery } from "@tanstack/react-query";
import { productVariantsService } from "../../services/product";

const useProductVariants = () =>
  useQuery({
    queryKey: ["products", "variants"],
    queryFn: productVariantsService.fetchAll,
  });

export default useProductVariants;
