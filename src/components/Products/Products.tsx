import Grid from "../Grid";
import Product from "./Product";
import { ProductType } from "../../services/product";
import product1 from "../../assets/product_1.png";
import product2 from "../../assets/product_2.png";
import product3 from "../../assets/product_3.png";
import { useState } from "react";
import Flex from "../Flex";

const initialProducts: ProductType[] = [
  {
    id: "1",
    images: [product1],
    name: "Leather Sofa Chair",
    price: 34_557.537,
    category: "546556",
    category_name: "Buildings",
    type: " Sale",
    description: "Love To Code",
  },
  {
    id: "2",
    images: [product2],
    name: "Leather Sofa Chair",
    price: 34_557.537,
    category: "546556",
    category_name: "Buildings",
    type: " Sale",
    description: "Love To Code",
  },
  {
    id: "3",
    images: [product3],
    name: "Leather Sofa Chair",
    price: 34_557.537,
    category: "546556",
    category_name: "Buildings",
    type: " Sale",
    description: "Love To Code",
  },
  {
    id: "4",
    images: [product1],
    name: "Leather Sofa Chair",
    price: 34_557.537,
    category: "546556",
    category_name: "Buildings",
    type: " Sale",
    description: "Love To Code",
  },
];

interface Props {
  direction?: "vertical" | "horizontal";
  products?: ProductType[];
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
