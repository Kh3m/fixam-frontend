import Card from "../../components/Card";
import TopBar from "./TopBar";

import Pagination from "../../components/Pagination";
import Table from "../../components/Table";

const StoreProducts = () => {
  return (
    <Card>
      <TopBar />
      <section>
        <h2 className="dark:text-white text-lg my-4">Products</h2>
        <Table />
        <Pagination toEnd />
      </section>
    </Card>
  );
};

export default StoreProducts;
