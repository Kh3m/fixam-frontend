import { useQuery } from "@tanstack/react-query";
import productService from "../../services/product";

type ProductQueryType = {
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
};

const useProducts = (productQuery: ProductQueryType) =>
  useQuery({
    queryKey: ["products", productQuery],
    queryFn: () =>
      productService.fetchAll({
        params: {
          category_id: productQuery.categoryId,
          price__lt:
            productQuery.maxPrice != undefined &&
            productQuery.maxPrice > 950_000
              ? undefined
              : productQuery.maxPrice,
          price__gt:
            productQuery.maxPrice != undefined &&
            productQuery.maxPrice > 950_000
              ? productQuery.maxPrice
              : productQuery.minPrice,
        },
      }),
  });

export default useProducts;
