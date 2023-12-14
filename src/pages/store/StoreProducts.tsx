import { FaEllipsisVertical } from "react-icons/fa6";
import Card from "../../components/Card";
import { formatPrice } from "../../utils/number-formatter";
import TopBar from "./TopBar";

import productImage from "../../assets/product_1.png";
import Pagination from "../../components/Pagination";

const StoreProducts = () => {
  return (
    <Card>
      <TopBar />
      <section>
        <h2 className="dark:text-white text-lg my-4">Products</h2>
        <table className="w-full">
          <thead
            className="text-white dark:bg-fdark-800 bg-fyellow rounded-lg text-left border-b
           dark:border-fdark-700"
          >
            <tr>
              <th className="p-4">Product Name</th>
              <th>Catergory</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="text-left text-black dark:text-fdark-300">
            <tr className="rounded-lg dark:bg-fdark-800 fshadow">
              <td className="p-4 flex items-center space-x-3">
                <img
                  src={productImage}
                  alt="product image"
                  className="object-cover w-14 h-14 rounded-lg"
                />
                <span>Turkish Royal Fabric Sofa</span>
              </td>
              <td>Home Appliances </td>
              <td>{formatPrice(549_000)}</td>
              <td className="text-center">8</td>
              <td className="text-center">
                <span className="inline-flex cursor-pointer">
                  <FaEllipsisVertical />
                </span>
              </td>
            </tr>

            <tr className="rounded-lg dark:bg-fdark-800 fshadow">
              <td className="p-4 flex items-center space-x-3">
                <img
                  src={productImage}
                  alt="product image"
                  className="object-cover w-14 h-14 rounded-lg"
                />
                <span>Turkish Royal Fabric Sofa</span>
              </td>
              <td>Home Appliances </td>
              <td>{formatPrice(549_000)}</td>
              <td className="text-center">8</td>
              <td className="text-center">
                <span className="inline-flex cursor-pointer">
                  <FaEllipsisVertical />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination toEnd />
      </section>
    </Card>
  );
};

export default StoreProducts;
