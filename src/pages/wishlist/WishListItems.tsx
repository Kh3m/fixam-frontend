import { useState } from "react";
import product1 from "../../assets/product_1.png";
import product4 from "../../assets/product_4.png";
import HR from "../../components/HR";
import WishListItem from "./WishListItem";

type WishListType = {
  product: {
    title: string;
    price: number;
    image: string;
  };
};

const WishListItems = () => {
  const [wishListItems, _] = useState<WishListType[]>([
    {
      product: {
        title: "Turkish Royal Fabric Sofa",
        image: product1,
        price: 549_999,
      },
    },
    {
      product: {
        title: "Womens Clutch Purse",
        image: product4,
        price: 49_999,
      },
    },
  ]);

  return (
    <section>
      {wishListItems.map(({ product: { image, price, title } }, index) => (
        <section key={index}>
          <WishListItem imageURL={image} price={price} title={title} />
          {wishListItems.length - 1 !== index && <HR styles="my-8" />}
        </section>
      ))}
    </section>
  );
};

export default WishListItems;
