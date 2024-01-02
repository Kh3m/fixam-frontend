import CartItem from "./CartItem";

import { ChangeEvent, useState } from "react";
import product1 from "../../assets/product_1.png";
import product4 from "../../assets/product_4.png";
import product0 from "../../assets/tabpanel.webp.png";
import HR from "../../components/HR";
import { CartItemType } from "../../services/cart";

type CartType = {
  quantity: number;
  product: {
    title: string;
    image: string;
    description: string;
    price: number;
  };
};

interface Props {
  cartItems: CartItemType[];
}

const CartItems = ({ cartItems: realCartItems }: Props) => {
  const [cartItems, setCartItems] = useState<CartType[]>([
    {
      quantity: 2,
      product: {
        title: "Turkish Royal Fabric Sofa",
        image: product1,
        description:
          "Luxurious  7 seater turkish fabric sofa, assembled in Nigeria by Nigerians.",
        price: 549_999,
      },
    },
    {
      quantity: 1,
      product: {
        title: "Womens Clutch Purse Wristlet Wallet Evening.",
        image: product4,
        description:
          "Luxurious  7 seater turkish fabric sofa, assembled in Nigeria by Nigerians.",
        price: 49_999,
      },
    },
    {
      quantity: 4,
      product: {
        title: "Womens Clutch Purse Wristlet Wallet Evening.",
        image: product0,
        description:
          "Luxurious  7 seater turkish fabric sofa, assembled in Nigeria by Nigerians.",
        price: 49_999,
      },
    },
  ]);

  // const [quantity, setQuantity] = useState(defaultQty);

  const handleOnIcrementQuantity = (index: number) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((cartItem, indx) =>
        indx === index
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    });
  };

  const handleOnDecrementQuantity = (index: number) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((cartItem, indx) =>
        indx === index
          ? {
              ...cartItem,
              quantity: cartItem.quantity === 0 ? 0 : cartItem.quantity - 1,
            }
          : cartItem
      );
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((cartItem, indx) =>
        indx === index
          ? {
              ...cartItem,
              quantity: isNaN(Number.parseInt(e.target.value))
                ? 0
                : Number.parseInt(e.target.value),
            }
          : cartItem
      );
    });
  };

  // Real cart Items
  if (realCartItems) {
    return (
      <section>
        {realCartItems.map(({ quantity, id }, index) => (
          <section key={index}>
            <CartItem
              description={"Replace with real data"}
              imageURL={cartItems[index].product.image}
              price={id || 0}
              title={"Replace with real data"}
              quantity={quantity}
              handleOnIcrementQuantity={() => handleOnIcrementQuantity(index)}
              handleOnDecrementQuantity={() => handleOnDecrementQuantity(index)}
              onChange={(e) => handleInputChange(e, index)}
              handleInputChange={handleInputChange}
            />
            {realCartItems.length - 1 !== index && <HR styles="my-8" />}
          </section>
        ))}
      </section>
    );
  }

  // TODO: Remove after fully utilizing cart service
  return (
    <section>
      {cartItems.map(
        (
          { quantity, product: { description, image, price, title } },
          index
        ) => (
          <section key={index}>
            <CartItem
              description={description}
              imageURL={image}
              price={price}
              title={title}
              quantity={quantity}
              handleOnIcrementQuantity={() => handleOnIcrementQuantity(index)}
              handleOnDecrementQuantity={() => handleOnDecrementQuantity(index)}
              onChange={(e) => handleInputChange(e, index)}
              handleInputChange={handleInputChange}
            />
            {cartItems.length - 1 !== index && <HR styles="my-8" />}
          </section>
        )
      )}
    </section>
  );
};

export default CartItems;
