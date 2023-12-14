import Grid from "../Grid";
import Product, { ProductType } from "./Product";

import product1 from "../../assets/product_1.png";
import product2 from "../../assets/product_2.png";
import product3 from "../../assets/product_3.png";
import { useState } from "react";
import Flex from "../Flex";

const initialProducts: ProductType[] = [
  {
    image: {
      src: product1,
      alt: "Product 1",
    },
    title: "Leather Sofa Chair",
    price: 34_557.537,
    favorite: false,
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
    favorite: false,
    status: "For Sale",
  },
  {
    image: {
      src: product3,
      alt: "Product 3",
    },
    title: "Washing Machine",
    price: 34_557.537,
    favorite: false,
    status: "For Sale",
  },
  {
    image: {
      src: product3,
      alt: "Product 3",
    },
    title: "Washing Machine",
    price: 34_557.537,
    favorite: false,
    status: "For Sale",
  },
  {
    image: {
      src: product3,
      alt: "Product 3",
    },
    title: "Washing Machine",
    price: 34_557.537,
    favorite: false,
    status: "For Sale",
  },
];

interface Props {
  direction?: "vertical" | "horizontal";
}
const Products = ({ direction }: Props) => {
  const [products, setProducts] = useState(initialProducts);

  const handleFavStatus = (id: number) => {
    setProducts((prevProds) => {
      return prevProds.map((prod, indx) =>
        indx === id ? { ...prod, favorite: !prod.favorite } : prod
      );
    });
  };

  if (direction === "horizontal") {
    return (
      <Flex>
        {products.map((prod, i) => (
          <div key={i} className="w-[665px]">
            <Product
              product={prod}
              handleFavStatus={handleFavStatus}
              temId={i}
              isAdProduct
            />
          </div>
        ))}
      </Flex>
    );
  }
  return (
    <Grid cols={3}>
      {products.map((prod, i) => (
        <Product
          key={i}
          product={prod}
          handleFavStatus={handleFavStatus}
          temId={i}
        />
      ))}
    </Grid>
  );
};

export default Products;
