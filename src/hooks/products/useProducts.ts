import { useQuery } from "@tanstack/react-query";
import productService from "../../services/product";

const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: productService.fetchAll,
  });

export default useProducts;
