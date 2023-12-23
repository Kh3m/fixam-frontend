import Card from "../../components/Card";
import TopBar from "./TopBar";

import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import { Outlet, useLocation } from "react-router-dom";
import { Fragment } from "react";
import Heading from "../../components/Heading";
import Space from "../../components/Space";

const StoreProducts = () => {
  const { pathname } = useLocation();

  return (
    <Card>
      {pathname.endsWith("/products") && (
        <section>
          <TopBar />

          <Space spacing="my-4" />
          <Heading variant="h3">Products</Heading>
          <Space spacing="my-4" />
          <Fragment>
            <Table />
            <Pagination toEnd />
          </Fragment>
        </section>
      )}
      <Outlet />
    </Card>
  );
};

export default StoreProducts;
