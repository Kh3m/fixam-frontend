import Card from "../../components/Card";
import TopBar from "./TopBar";

const StoreProducts = () => {
  return (
    <Card>
      <TopBar />
      <section>
        <h2 className="dark:text-white text-lg my-4">Products</h2>
        <table className="border ">
          <tr>
            <th>Product Name</th>
            <th>Catergory</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </table>
      </section>
    </Card>
  );
};

export default StoreProducts;
