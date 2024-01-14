import CartItem from "./CartItem";

import { useState } from "react";
import product1 from "../../assets/product_1.png";
import product4 from "../../assets/product_4.png";
import product0 from "../../assets/tabpanel.webp.png";
import { CartItemType } from "../../services/cart";

type CartType = {
  product: {
    image: string;
  };
};

interface Props {
  cartItems: CartItemType[];
  cartId: string;
}

const CartItems = ({ cartItems: realCartItems, cartId }: Props) => {
  const [cartItems, _] = useState<CartType[]>([
    {
      product: {
        image: product1,
      },
    },
    {
      product: {
        image: product4,
      },
    },
    {
      product: {
        image: product0,
      },
    },
  ]);

  // const handleInputChange = (
  //   e: ChangeEvent<HTMLInputElement>,
  //   index: number
  // ) => {};

  // Real cart Items
  if (realCartItems) {
    return (
      <section>
        {realCartItems.map(({ quantity, id, prod_id }, index) => (
          <section key={index}>
            <CartItem
              cartId={cartId}
              itemId={id!}
              productId={prod_id}
              imageURL={cartItems[index].product.image}
              quantity={quantity}
              // onChange={(e) => handleInputChange(e, index)}
              // handleInputChange={handleInputChange}
            />
            {/* {realCartItems.length - 1 !== index && <HR styles="my-8" />} */}
          </section>
        ))}
      </section>
    );
  }
};

export default CartItems;
