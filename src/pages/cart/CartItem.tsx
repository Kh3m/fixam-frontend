import { useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Space from "../../components/Space";
import useProduct from "../../hooks/products/useProduct";
import useAuth from "../../hooks/useAuth";
import { formatPrice } from "../../utils/number-formatter";
import QuantityField from "./QuantityField";
import apiClient from "../../services/apiClient";

interface Props {
  quantity: number;
  imageURL: string;
  productId: string;
  cartId: string;
  itemId: number;
  isCheckingOut?: boolean;
  handleInputChange?: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const CartItem = ({
  quantity,
  imageURL,
  productId,
  itemId,
  cartId,
  isCheckingOut,
}: Props) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const { data: cartProduct } = useProduct(productId);

  const [isDeletingCartitems, setIsDeletingCartItems] = useState(false);

  const handleRemoveItemFromCart = async () => {
    setIsDeletingCartItems(true);

    try {
      const deleteCartRes = await apiClient.delete(
        `/carts/${cartId}/items/${itemId}/`
      );

      if (deleteCartRes.status == 204) {
        // Invalidate the cache for ["carts", "user", user?.id]
        queryClient.invalidateQueries({
          queryKey: ["carts", "user", user?.id],
        });

        setIsDeletingCartItems(false);
      }

      // Invalidate the cache for ["carts", "user", user?.id]
      queryClient.invalidateQueries({
        queryKey: ["carts", "user", user?.id],
      });
    } catch (error) {
      console.log("ERROR DELETING CART ITEM", error);
      setIsDeletingCartItems(false);
    }
  };

  if (cartProduct)
    return (
      <section className="last-of-type:border-b-0:border-b border-gray-300 py-6">
        <div className="flex space-x-5 w-full">
          <img
            src={imageURL}
            alt={cartProduct.name}
            className="w-24 object-contain overflow-hidden rounded-lg"
          />
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <Heading
                variant="h4"
                styles="font-semibold text-sm md:text-[20px]"
              >
                {cartProduct.name}
              </Heading>
              <Space spacing="my-1" />
              {/* <Rating count={5} withViews /> */}
              {/* <CustomerStarRatings rating={2} size={16} /> */}
              <Space spacing="my-1" />
              <div className="text-xs md:text-base font-semibold dark:text-gray-300">
                {formatPrice(cartProduct.selling_price as number)}
              </div>
              <Space spacing="my-1" />
              <div className="text-xs md:text-base font-semibold dark:text-gray-300">
                QTY: {quantity}
              </div>
              {/* <VariantOption
                variant="Color"
                defaultSelectValue={{ label: "Black", value: "Black" }}
                options={[
                  { label: "Red", value: "Red" },
                  { label: "Green", value: "Green" },
                  { label: "Black", value: "Black" },
                  { label: "Purple", value: "Purple" },
                  { label: "Cyan", value: "Cyan" },
                ]}
              /> */}
              <Space spacing="my-2" />
            </div>
            {!isCheckingOut && (
              <div className="flex space-x-4 text-xs">
                <Button
                  styles="hover:text-fyellow-shades-500 hover:font-semibold"
                  onClick={handleRemoveItemFromCart}
                  disabled={isDeletingCartitems}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          {!isCheckingOut && (
            <div className="flex space-x-2 items-center">
              <QuantityField
                cartId={cartId}
                itemId={itemId}
                userId={user?.id || ""}
                quantity={quantity}
              />
            </div>
          )}
        </div>
      </section>
    );
};

export default CartItem;
