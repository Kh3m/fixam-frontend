import Card from "../../../components/Card";
import TopBar from "../TopBar";

import { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Center from "../../../components/Center";
import EmptyStateUser from "../../../components/EmptyStateUser";
import Heading from "../../../components/Heading";
import ActionMenu from "../../../components/Menu/ActionMenu";
import Pagination from "../../../components/Pagination";
import Spinner from "../../../components/Spinner";
import Table from "../../../components/Table";
import useStoreProducts from "../../../hooks/products/useStoreProducts";
import useAuth from "../../../hooks/useAuth";
import { ProductType } from "../../../services/product";
import { formatPrice } from "../../../utils/number-formatter";
import { getRandomInt } from "../../../utils/randomValues";
import StorePageTitle from "../StorePageTitle";
import EmptyStateStore from "../../../components/EmptyStateStore";

const StoreProducts = () => {
  const { userStores } = useAuth();

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
    if (location.pathname.endsWith("/products")) {
      refetch();
    }
  });

  const generateTableProductData = () => {
    if (isLoading)
      return (
        <tr>
          <td colSpan={5} className="py-2 pt-4">
            <Center>
              <Spinner />
            </Center>
          </td>
        </tr>
      );

    if (products && !products.length)
      return (
        <tr>
          <td className="p-4" colSpan={6}>
            <Center>
              <EmptyStateStore heading="No Product" />
            </Center>
          </td>
        </tr>
      );

    if (!isLoading && products && !products.length)
      return (
        <tr>
          <td colSpan={5}>
            <Center>
              <EmptyStateUser
                heading={
                  <div>
                    <Heading variant="h4">Ready to get started?</Heading>
                    <p className="text-sm">
                      Add your products now and enhance your customer
                      experience.
                    </p>
                  </div>
                }
                callToActionText="Add Product"
                to={`${location.pathname}/add-product`}
              />
            </Center>
          </td>
        </tr>
      );
    if (products)
      return (
        <>
          {products.map((product) => (
            <tr
              key={product.id}
              className="rounded-lg dark:bg-slate-700 fshadow"
            >
              <td className="p-4 flex items-center space-x-3">
                <img
                  src={
                    product.images[getRandomInt(0, product.images.length - 1)]
                  }
                  alt="product image"
                  className="object-cover w-14 h-14 rounded-lg"
                />
                <span>{product.name}</span>
              </td>
              <td>{product.category_name}</td>
              <td>
                {formatPrice(
                  Number.parseFloat(product.selling_price as string)
                )}
              </td>
              <td className="text-center">8</td>
              <td className="text-center">
                <ActionMenu
                  actions={[
                    {
                      label: "View",
                      link: {
                        to: `/stores/${
                          userStores && userStores[userStores?.length - 1].slug
                        }/products/${product.id}`,
                      },
                    },
                    {
                      label: "Edit",
                      link: {
                        to: `/stores/${
                          userStores && userStores[userStores?.length - 1].slug
                        }/products/${product.id}/edit`,
                      },
                    },
                    {
                      label: "Add Variant",
                      link: {
                        to: `/stores/${
                          userStores && userStores[userStores?.length - 1].slug
                        }/products/${product.id}/add-variant`,
                      },
                    },
                    { label: "Delete" },
                  ]}
                />
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
            {products && products.length >= 10 && <Pagination toEnd />}
          </Fragment>
        </section>
      )}
      <Outlet />
    </Card>
  );
};

export default StoreProducts;
