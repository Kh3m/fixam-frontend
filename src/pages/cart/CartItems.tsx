import CartItem from "./CartItem";

import { CartItemType } from "../../services/cart";

interface Props {
  cartItems: CartItemType[];
  cartId: string;
}

const CartItems = ({ cartItems: realCartItems, cartId }: Props) => {
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
