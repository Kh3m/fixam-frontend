import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../../services/product";
import { productBaseURL } from "../../services/baseURLs";
import { DummyAPIClient } from "../../services/apiClient";

const useProductsFromCategory = (categoryId: string) => {
  const apiClient = new DummyAPIClient<ProductType>(
    `${productBaseURL}/products/categories/${categoryId}/products/?levels_deep=all`
  );

  return useQuery({
    queryKey: ["products", "categories", categoryId],
    queryFn: apiClient.fetchAll,
  });
};

export default useProductsFromCategory;
