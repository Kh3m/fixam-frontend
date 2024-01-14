import { ProductFilteringContextProvider } from "../../contexts/product-filtering-context";
import ProductsFiltering from "./ProductsFiltering";

const ProductsPage = () => {
  return (
    <ProductFilteringContextProvider>
      <ProductsFiltering />
    </ProductFilteringContextProvider>
  );
};

export default ProductsPage;
