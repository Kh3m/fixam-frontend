import Card from "../../../components/Card";
import TopBar from "../TopBar";

import Pagination from "../../../components/Pagination";
import Table from "../../../components/Table";
import { Outlet, useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import useProducts from "../../../hooks/products/useProducts";
import { FetchResponseType } from "../../../services/apiClient";
import { ProductType } from "../../../services/product";
import { getRandomInt } from "../../../utils/randomValues";
import { formatPrice } from "../../../utils/number-formatter";
import StorePageTitle from "../StorePageTitle";
import ActionMenu from "../../../components/Menu/ActionMenu";
import useAuth from "../../../hooks/useAuth";
import useStoreProducts from "../../../hooks/products/useStoreProducts";

const StoreProducts = () => {
  const { userStores, isAuthenticated } = useAuth();

  const { pathname } = useLocation();
  // TODO: Use mutation instead when creating a product
  const location = useLocation();
  // const { data, isLoading, refetch } = useProducts();

  const [defaultStoreId, setDefaultStoreId] = useState("");

  // Reads prodtucts that only belongs to store
  const { data, isLoading, refetch } = useStoreProducts(defaultStoreId);

  const products = data as ProductType[];

  useEffect(() => {
    setDefaultStoreId(userStores ? userStores[userStores?.length - 1].id : "");
    if (location.pathname.endsWith("/products")) refetch();
  });

  const generateTableProductData = () => {
    if (isLoading) return <p>Loading...</p>;
    return (
      <>
        {products.map((product) => (
          <tr key={product.id} className="rounded-lg dark:bg-slate-700 fshadow">
            <td className="p-4 flex items-center space-x-3">
              <img
                src={product.images[getRandomInt(0, product.images.length - 1)]}
                alt="product image"
                className="object-cover w-14 h-14 rounded-lg"
              />
              <span>{product.name}</span>
            </td>
            <td>{product.category_name}</td>
            <td>{formatPrice(Number.parseFloat(product.price as string))}</td>
            <td className="text-center">8</td>
            <td className="text-center">
              <ActionMenu itemId={product.id} />
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <Card>
      {/* We can have /products/add-product etc. Hence check to ensure 
      the pathname ends with /products to show product table */}
      {pathname.endsWith("/products") && (
        <section>
          <TopBar />
          <StorePageTitle title="Products" />
          <Fragment>
            <Table
              tableHeadings={["Product Name", "Category", "Price", "Stock"]}
              TableData={generateTableProductData()}
            />
            <Pagination toEnd />
          </Fragment>
        </section>
      )}
      <Outlet />
    </Card>
  );
};

export default StoreProducts;
