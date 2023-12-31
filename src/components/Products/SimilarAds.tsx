import { useState } from "react";
import Scroll from "../Scroll";
import Space from "../Space";
import Product, { ProductType } from "./Product";
import { ProductType as RealProductType } from "../../services/product";

import product1 from "../../assets/product_1.png";
import product2 from "../../assets/product_2.png";
import product3 from "../../assets/product_3.png";

const similarProducts: ProductType[] = [
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
      src: product1,
      alt: "Product 1",
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
      src: product2,
      alt: "Product 2",
    },
    title: "Washing Machine",
    price: 34_557.537,
    favorite: false,
    status: "For Sale",
  },
  {
    image: {
      src: product3,
      alt: "Product 1",
    },
    title: "Washing Machine",
    price: 34_557.537,
    favorite: false,
    status: "For Sale",
  },
];

interface Props {
  heading: string;
  products?: RealProductType[];
}

const SimilarAds = ({ heading, products }: Props) => {
  const [dummyProducts, setProducts] = useState(similarProducts);

  const handleFavStatus = (id: number) => {
    setProducts((prevProds) => {
      return prevProds.map((prod, indx) =>
        indx === id ? { ...prod, favorite: !prod.favorite } : prod
      );
    });
  };

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
                handleFavStatus={handleFavStatus}
                temId={i}
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
            <Product
              product={prod}
              handleFavStatus={handleFavStatus}
              temId={i}
              isAdProduct
              isDummy
            />
          </div>
        ))}
      </Scroll>
    </>
  );
};

export default SimilarAds;
