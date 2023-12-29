import Card from "../../components/Card";
import TopBar from "./TopBar";

import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import { Outlet, useLocation } from "react-router-dom";
import { Fragment } from "react";
import Heading from "../../components/Heading";
import Space from "../../components/Space";
import useProducts from "../../hooks/products/useProducts";
import { FetchResponseType } from "../../services/apiClient";
import { ProductType } from "../../services/product";
import { getRandomInt } from "../../utils/randomValues";
import { formatPrice } from "../../utils/number-formatter";
import { FaEllipsisVertical } from "react-icons/fa6";
import StorePageTitle from "./StorePageTitle";

const StoreProducts = () => {
  const { pathname } = useLocation();
  const { data, isLoading } = useProducts();

  const products = data as FetchResponseType<ProductType>;

  const generateTableProductData = () => {
    if (isLoading) return <p>Loading...</p>;
    return (
      <>
        {products?.results.map((product) => (
          <tr key={product.id} className="rounded-lg dark:bg-slate-700 fshadow">
            <td className="p-4 flex items-center space-x-3">
              <img
                src={product.images[getRandomInt(0, product.images.length - 1)]}
                alt="product image"
                className="object-cover w-14 h-14 rounded-lg"
              />
              <span>{product.name}</span>
            </td>
            <td>{product.type}</td>
            <td>{formatPrice(Number.parseFloat(product.price as string))}</td>
            <td className="text-center">8</td>
            <td className="text-center">
              <span className="inline-flex cursor-pointer">
                <FaEllipsisVertical />
              </span>
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
        <section className="">
          <TopBar />
          <StorePageTitle title="Products" />
          <Fragment>
            <Table
              tableHeadings={["Product Name", "Type", "Price", "Stock"]}
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
