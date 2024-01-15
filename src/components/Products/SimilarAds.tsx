import { useState } from "react";
import Scroll from "../Scroll";
import Space from "../Space";
import Product from "./Product";
import { ProductType } from "../../services/product";

import product1 from "../../assets/product_1.png";
import product2 from "../../assets/product_2.png";
import product3 from "../../assets/product_3.png";

const similarProducts = [
  {
    id: "1",
    images: [product1],
    name: "Leather Sofa Chair",
    price: 34_557.537,
    category: "546556",
    category_name: "Buildings",
    type: " Sale",
    description: "Love To Code",
    selling_price: 4566.87,
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
    selling_price: 4566.87,
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
    selling_price: 4566.87,
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
    selling_price: 4566.87,
  },
];

interface Props {
  heading: string;
  products?: ProductType[];
}

const SimilarAds = ({ heading, products }: Props) => {
  const [dummyProducts] = useState(similarProducts);

  if (products)
    return (
      <>
        <h3 className="dark:text-white text-2xl">{heading}</h3>
        <Space spacing="my-4" />
        <Scroll direction="horizontal">
          {products.map((prod, i) => (
            // TODO: className="w-[665px]"
            <div key={i}>
              <Product
                // TODO: FIX this. Make it the Real Product
                product={dummyProducts[i]}
                // TODO: Remove this
                realProduct={prod}
                isAdProduct
              />
            </div>
          ))}
        </Scroll>
      </>
    );

  return (
    <>
      <h3 className="dark:text-white text-2xl">{heading}</h3>
      <Space spacing="my-4" />
      <Scroll direction="horizontal">
        {dummyProducts.map((prod, i) => (
          <div key={i} className="w-[665px]">
            <Product product={prod} isAdProduct isDummy />
          </div>
        ))}
      </Scroll>
    </>
  );
};

export default SimilarAds;
