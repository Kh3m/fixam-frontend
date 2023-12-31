import Grid from "../Grid";
import Product, { ProductType } from "./Product";
import { ProductType as RealProductType } from "../../services/product";
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
  products?: RealProductType[];
}

const Products = ({ direction, products }: Props) => {
  const [dummyProducts, setDummyProducts] = useState(initialProducts);

  const handleFavStatus = (id: number) => {
    setDummyProducts((prevProds) => {
      return prevProds.map((prod, indx) =>
        indx === id ? { ...prod, favorite: !prod.favorite } : prod
      );
    });
  };

  if (direction === "horizontal") {
    if (products) {
      return (
        <Flex>
          {products.map((prod, i) => (
            <div key={i} className="w-[665px]">
              <Product
                // TODO: FIX this. Make it the Real Product
                product={dummyProducts[i]}
                // TODO: Remove this
                realProduct={prod}
                handleFavStatus={handleFavStatus}
                temId={i}
                isAdProduct
                categoryId={"prod.category"}
              />
            </div>
          ))}
        </Flex>
      );
    }

    return (
      <Flex>
        {dummyProducts.map((prod, i) => (
          <div key={i} className="w-[665px]">
            <Product
              product={prod}
              handleFavStatus={handleFavStatus}
              temId={i}
              isAdProduct
              // TODO: Remove
              isDummy
            />
          </div>
        ))}
      </Flex>
    );
  }

  if (products) {
    return (
      <Grid cols={3}>
        {products.map((prod, i) => (
          <Product
            key={i}
            product={dummyProducts[i]}
            realProduct={prod}
            handleFavStatus={handleFavStatus}
            temId={i}
            categoryId={"categoryId"}
          />
        ))}
      </Grid>
    );
  }

  return (
    <Grid cols={3}>
      {dummyProducts.map((prod, i) => (
        <Product
          key={i}
          product={prod}
          handleFavStatus={handleFavStatus}
          temId={i}
          // TODO: Remove
          isDummy
        />
      ))}
    </Grid>
  );
};

export default Products;
