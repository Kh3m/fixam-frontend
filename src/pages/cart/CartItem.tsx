import { ChangeEvent, useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Rating from "../../components/Rating";
import Space from "../../components/Space";
import { formatPrice } from "../../utils/number-formatter";
import QuantityField from "./QuantityField";
import VariantOption from "../../components/VariantOption";
import useProduct from "../../hooks/products/useProduct";
import useReviewsForProduct from "../../hooks/review/useReviewsForProduct";
import { dummyApiClient } from "../../services/apiClient";
import { cartBaseURL } from "../../services/baseURLs";
import { useQueryClient } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

interface Props {
  quantity: number;
  imageURL: string;
  productId: string;
  cartId: string;
  itemId: number;
  handleInputChange?: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const CartItem = ({
  quantity,
  imageURL,
  productId,
  itemId,
  cartId,
  onChange,
}: Props) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [isHandlingQty, setIsHandlingQty] = useState(false);

  const { data: cartProduct } = useProduct(productId);
  const { data: cartProductReviews } = useReviewsForProduct(productId);

  const [isDeletingCartitems, setIsDeletingCartItems] = useState(false);

  const handleRemoveItemFromCart = async () => {
    setIsDeletingCartItems(true);

    try {
      const deleteCartRes = await dummyApiClient.delete(
        `${cartBaseURL}/carts/${cartId}/items/${itemId}/`
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

  return (
    <section>
      <div className="flex space-x-6 items-center w-full">
        <img
          src={imageURL}
          alt={cartProduct?.name}
          className="h-[137px] w-[207px] object-contain overflow-hidden rounded-lg"
        />
        <div className="flex-grow">
          <Heading variant="h4" styles="font-semibold text-[20px]">
            {cartProduct?.name}
          </Heading>
          <Space spacing="my-1" />
          <Rating count={5} withViews />
          <Space spacing="my-1" />

          <div className="text-base font-semibold">
            {formatPrice(cartProduct?.price as number)}
          </div>
          <VariantOption
            variant="Color"
            defaultSelectValue={{ label: "Black", value: "Black" }}
            options={[
              { label: "Red", value: "Red" },
              { label: "Green", value: "Green" },
              { label: "Black", value: "Black" },
              { label: "Purple", value: "Purple" },
              { label: "Cyan", value: "Cyan" },
            ]}
          />
          <Space spacing="my-6" />
          <div className="flex space-x-4 text-xs">
            <Button
              styles="hover:text-fyellow-shades-500 hover:font-semibold"
              onClick={handleRemoveItemFromCart}
              disabled={isDeletingCartitems}
            >
              Delete
            </Button>
          </div>
        </div>

        <div className="flex space-x-2 items-center">
          <QuantityField
            isHandlingQty={isHandlingQty}
            quantity={quantity}
            handleOnIcrementQuantity={async () => {
              setIsHandlingQty(true);
              await dummyApiClient.patch(
                `${cartBaseURL}/carts/${cartId}/items/${itemId}/`,
                { quantity: quantity + 1 }
              );
              // Invalidate the cache for ["carts", "user", user?.id]
              queryClient.invalidateQueries({
                queryKey: ["carts", "user", user?.id],
              });
              setIsHandlingQty(false);
              // setIsDeletingCartItems(false);
            }}
            handleOnDecrementQuantity={async () => {
              setIsHandlingQty(true);
              await dummyApiClient.patch(
                `${cartBaseURL}/carts/${cartId}/items/${itemId}/`,
                { quantity: quantity - 1 }
              );
              // Invalidate the cache for ["carts", "user", user?.id]
              queryClient.invalidateQueries({
                queryKey: ["carts", "user", user?.id],
              });
              setIsHandlingQty(false);
              // setIsDeletingCartItems(false);
            }}
            onChange={onChange}
          />
        </div>
      </div>
    </section>
  );
};

export default CartItem;
