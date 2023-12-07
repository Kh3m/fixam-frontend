import Grid from "../Grid";
import Product, { ProductType } from "./Product";

import product1 from "../../assets/product_1.png";
import product2 from "../../assets/product_2.png";
import product3 from "../../assets/product_3.png";

const products: ProductType[] = [
  {
    image: {
      src: product1,
      alt: "Product 1",
    },
    title: "Leather Sofa Chair",
    price: 34_557.537,
    favorite: true,
    status: "For Sale",
  },
  {
    image: {
      src: product2,
      alt: "Single Luxury Chair",
    },
    title: "Amazing Camera",
    price: 34_557.537,
    favorite: true,
    status: "For Sale",
  },
  {
    image: {
      src: product3,
      alt: "Product 3",
    },
    title: "Washing Machine",
    price: 34_557.537,
    favorite: true,
    status: "For Sale",
  },
];
const Products = () => {
  return (
    <Grid cols={3}>
      {products.map((prod, i) => (
        <Product key={i} product={prod} />
      ))}
    </Grid>
  );
};

export default Products;
