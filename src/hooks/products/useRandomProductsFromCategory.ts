import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../../services/product";
import { DummyAPIClient } from "../../services/apiClient";
import { productBaseURL } from "../../services/baseURLs";

const useRandomProductsFromCategory = (categoryId: string) => {
  const apiClient = new DummyAPIClient<ProductType>(
    `${productBaseURL}/products/categories/${categoryId}/random_products/`
  );

  return useQuery({
    queryKey: ["products", "categories", categoryId, "random_products"],
    queryFn: apiClient.fetchAll,
  });
};

export default useRandomProductsFromCategory;
