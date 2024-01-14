import { useQuery } from "@tanstack/react-query";
import productService from "../../services/product";

type ProductQueryType = {
  categoryId?: string;
};

const useProducts = (productQuery: ProductQueryType) =>
  useQuery({
    queryKey: ["products", productQuery],
    queryFn: () =>
      productService.fetchAll({
        params: { category_id: productQuery.categoryId },
      }),
  });

export default useProducts;
